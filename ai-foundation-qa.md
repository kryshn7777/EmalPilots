# Local AI Foundation — QA / Bug List

## Runtime fixes (post-first-run)

- **RT-001 (2026-07-13) — model load failed with Vulkan KV-cache OOM** (`alloc_tensor_range: failed to allocate Vulkan1 buffer of size 1073741824`). Root cause: `localLlama.ensureLoaded` passed the model's **native** context (32k-128k) → multi-GB KV cache → failed on a limited-VRAM GPU, with no CPU fallback. **FIXED:** default context capped to **4096** when unset; layered load attempts — GPU@wanted → GPU@≤2048 → **CPU (`getLlama({gpu:false})`)@≤2048** — disposing partial loads between tries, aggregate error if all fail. App already didn't crash (graceful `status()`); this makes the model actually load. Typecheck + 207 tests green; manual re-run pending on the affected machine.



QA log for the foundation (Feature #1: Privacy-First Local AI). Findings were
logged per-task during implementation, then triaged in a final sweep.

Status legend: `ACCEPTED` (reviewed, intentional) · `CONFIRMED` (real bug, fix
required) · `FALSE-POSITIVE` (not a bug) · `FIXED`.

## Findings

| id | file | severity | suspicion | status | verdict / evidence |
|----|------|----------|-----------|--------|--------------------|
| BUG-001 | src/ai/providers/localLlama.ts | info | Security hook: `new Function` = possible code injection | ACCEPTED | Body is the fixed literal `return import(s)` — no interpolation/concatenation; the sole caller passes the hardcoded constant `'node-llama-cpp'`. No untrusted input reaches it → not an injection vector. Required to preserve a real ESM `import()` through the CJS bundle (ESM-main alternative violates the minimal-change rule). Documented in-code. |
| POT-002 | src/ai/providers/localLlama.ts | high | node-llama-cpp v3 API names assumed | FALSE-POSITIVE | All verified against installed 3.19 `.d.ts`: `getLlama` (getLlama.d.ts:320), `Llama.loadModel({modelPath})` (:158), `Llama.getGrammarFor` (:164), `LlamaModel.createContext(options?)` + `contextSize` option (LlamaContext/types.d.ts:36), `LlamaContext.getSequence()` (:55) + `.contextSize` (:30), `LlamaChatSession({contextSequence,systemPrompt})` (:12,:15), `session.prompt(text,{maxTokens,temperature,grammar})` (:453,:90,:105,:240), sequence/model/context `dispose()`. |
| POT-003 | src/ai/providers/localLlama.ts | med | `getSequence()` per generate could throw "no sequences left" if not freed | FALSE-POSITIVE | `LlamaContextSequence.dispose()` exists (LlamaContext.d.ts:129) and is called in `finally`; generations are mutex-serialised so ≤1 sequence is ever live. Full generate-with-model exercised only in the manual GUI smoke (needs a model file). |
| POT-004 | src/ai/providers/localLlama.ts (status) | low | `status()` awaits `ensureLoaded()`, so a status check triggers a (multi-GB) model load and does main-process work | ACCEPTED | Intentional (detection = try-load), and only when **enabled + model configured** (see POT-005 fix). node-llama-cpp offloads eval to native threads. Future: move to an Electron `utilityProcess` (the `AiProviderDeps`/facade seam keeps that swap non-breaking). |
| POT-005 | src/ai/providers/localLlama.ts (status) | med | `status()` loaded the model whenever a model path existed, **even when AI was disabled** — a disabled install would still eat RAM/time | FIXED | Gated the load on `enabled && runtimeAvailable && modelConfigured`. Disabled-but-configured now stays fully inert; `status()` still reports runtime/model availability for the UI without loading. |
| POT-006 | electron/main.ts (rebuildProcessors) | low | Rebuilds `globalAiService` on any config/account save, discarding a loaded model (reloads on next use) | ACCEPTED | Correctness-safe (config.ai may have changed → reload is the right default); old service is `close()`d to free memory. Reload cost is paid only on the next AI use and only when AI is enabled. Acceptable for the foundation. |

No CONFIRMED (unfixed) bugs remain.

## Verification results

1. **Typecheck ×3** — core / electron / renderer all clean (`tsc --noEmit`).
2. **Unit tests** — `npm test`: **177 passed** (23 files), incl. new `src/ai/factory.test.ts`, `src/__tests__/aiConfig.test.ts`, and `gui2Parity.test.ts` still green (both shells carry the AI tab/view with matching IDs).
3. **Non-breaking / additive** — every change to an existing file is new lines only; `git` confirms **no** send/reply/rate-limiter file was touched (`mailProcessor`, `rateLimiter`, `replyPoller`, `campaignRunner`, `emailService`, `renderer`, `suppressionManager` contain zero AI references). With `AI_ENABLED` unset the app behaves exactly as before.
4. **Runtime loads (ESM-from-CJS + native binary)** — CJS smoke: `new Function('s','return import(s)')('node-llama-cpp')` then `getLlama()` succeeded → runtime import + prebuilt native binary load from a CommonJS context confirmed.
5. **Bundling** — `vite build` clean (exit 0). Inspected `dist-electron/main.js`: the escape hatch is preserved verbatim (`new Function("s","return import(s)")`, call `await …("node-llama-cpp")`) and there is **no** `require("node-llama-cpp")` — esbuild did not down-level the dynamic import. This was the single highest-risk item; it is validated.

## Remaining manual verification (needs a desktop + a model file)

These require a GUI session and a downloaded GGUF, so they are for a real machine,
not this automated run:

- **GUI click-through** — `npm run dev`, open **Local AI** tab: with no model, status reads "Disabled · runtime OK · no model · not ready"; pick a small GGUF (e.g. Qwen2.5-1.5B-Instruct Q4_K_M), enable, "Check Status" → READY; "Generate" returns text. Confirm offline (airplane mode) → zero network traffic (privacy contract). (Full generate also closes out POT-003's runtime note.)
- **Packaged smoke** — `npm run build` (nsis/portable), then confirm the packaged app's `ai-status` reports `runtimeAvailable=true` (proves `asarUnpack` shipped the native binary outside the read-only asar). electron-builder packaging is heavy and machine-specific; the `asarUnpack` globs are set and `vite build` already validated the bundle.

---

# Feature #2 — Reply Classification + Workflow Automation

## Findings (send-path-reviewer + self-scan) — all triaged, all fixed

| id | file | sev | issue | status | resolution |
|----|------|-----|-------|--------|-----------|
| F2-BUG-001 | vite.config.ts / replyPoller | build | lazy `import('mailparser')` code-split the electron main into 3 chunks (0.11 kB stub + 2 chunks) — fragile under Electron/asar | FIXED | Marked `mailparser` external → single-file `main.js` restored; verified `await import('mailparser')` resolves `simpleParser` at runtime (CJS interop) and the node-llama-cpp hatch stayed intact. |
| F2-HIGH-1 | replyPoller / replyStore | high | stale per-address `classification`: a real reply that fails to re-classify keeps a prior `OutOfOffice` label → `pauseOnOoo` gate wrongly keeps a drip sending to someone who actually replied | FIXED | `recordReply` clears `classification` whenever it advances `repliedAt` → an unclassified newer reply falls back to the safe "any reply counts" default (stops the drip). Regression tests in `replyStore.test.ts`. |
| F2-HIGH-2 | replyPoller | high | no timeout on classify (source fetch + local inference) in the sweep — a wedged model/parse hangs `scanAccount` → `poll()` never returns → `polling` flag stuck → ALL polling frozen app-wide until restart | FIXED | `withTimeout(classifyOne, 30s)`; a stall degrades to "skip this message". |
| F2-MED-3 | replyPoller | med | `{source:true}` batch fetch + no per-message guard: one poison message aborts the sweep before the cursor advances → that account re-fails every poll | FIXED | Batch fetch reverted to **envelope-only** (pre-feature, robust); bodies fetched **per-message via `fetchOne` after** the stream drains + after the cursor advances, each guarded + time-bounded. A bad message skips only its own classification. |
| F2-LOW-4 | replyPoller | low | new `console.error` logged the recipient email (PII) on classify failure | FIXED | Dropped the email from the new error log. |

No CONFIRMED (unfixed) findings remain. Reviewer confirmed clean on: non-breaking guarantee, auto-suppress correctness (lowercased key, idempotent), and privacy/SMTP-only (fully local; the new `config.ai` field cannot leak a password through `get-config`).

## Verification results

1. **Typecheck ×3** — clean.
2. **Tests** — `npm test`: **191 passed** (24 files), incl. new `replyClassifier.test.ts`, `sequenceRunner` `replyCountsForGate` cases, `replyStore` stale-label regression, and `gui2Parity` green (both shells carry the 3 reply-automation toggle IDs).
3. **Non-breaking:** `config.ai.actions.*` default false; `doClassify` requires `ai.isEnabled() && classifyReplies`; off ⇒ envelope-only fetch, `classifyAndAct` never runs, `replyCountsForGate` degrades to the exact old `hasRepliedSince`. `advanceSequenceRecord` gate untouched.
4. **Build** — `vite build` clean; single-file `dist-electron/main.js`; `await import('mailparser')` runtime-verified.

## Remaining manual verification (needs desktop + model + test inbox)

Enable AI + a model + **Classify incoming replies**; send yourself a plain "interested", an OOO auto-reply, and an "unsubscribe"; run **poll-now** → category badges appear in the Recipients "Replied" column + the summary line updates. Toggle **Auto-suppress unsubscribes** → the unsubscribe address lands in suppression. Toggle **Keep drips through OOO** → an OOO reply does NOT end an active drip; a real reply still does. Confirm offline (no network during classify).

---

# Feature #3 — AI Writing Assistant

## Findings (self-scan) — triaged, all fixed

| id | file | sev | issue | status | resolution |
|----|------|-----|-------|--------|-----------|
| F3-BUG-001 | src/main.ts | low | security hook: `innerHTML` for the tone `<select>` | FIXED | Built from the hardcoded `AI_ASSIST_TONES` constant (no untrusted input) → not an XSS vector, but replaced with `createElement`/`textContent` anyway. |
| F3-POT-002 | src/main.ts | med | on-attach `gate()` called `aiStatus()` at startup → for an AI-enabled user with a model, the multi-GB model would load on **every app launch** (startup regression) | FIXED | Removed the startup gate; the toolbar gate now runs only on composer-modal open (`openRecipientModal`) + AI-status change (`refreshAiStatus`). Disabled/not-configured stays cheap (status returns not-ready without loading). |

No open findings.

## Verification results

1. **Typecheck ×3** — clean.
2. **Tests** — `npm test`: **199 passed** (25 files), incl. new `writingAssistant.test.ts` (per-action prompt building + trimming + error propagation); `gui2Parity` green (assistant UI is injected in JS → no new static IDs).
3. **Non-breaking:** the assistant toolbar mounts hidden and shows only when `aiStatus().ready`; the sole path that writes the composer is the user clicking **Apply**. With AI off/not-ready, the composer is unchanged.
4. **Build:** `vite build` clean; single-file `dist-electron/main.js` (writingAssistant bundled; no code-split).

## Remaining manual verification (needs desktop + model)

Enable AI + a model; open a recipient → the composer shows the **✨ AI** toolbar. **Improve/Rewrite/Fix grammar** transform the current draft; **Apply** replaces it, **Dismiss** leaves it; **Write** + an instruction drafts from scratch; **Tone** rewrites. Confirm offline (no network during a suggestion).

---

# Feature #4 — AI Spam & Deliverability Advisor

## Findings (self-scan) — triaged

| id | file | sev | issue | status | notes |
|----|------|-----|-------|--------|-------|
| F4-POT-001 | src/main.ts (renderPreviewAi / deliverability) | low | the AI button's readiness gate + Analyze call `aiStatus()`, which loads the model once (cached) when AI is enabled — first preview/analyze after enabling pays the load | ACCEPTED | Same accepted pattern as feature #3; user-initiated context, not a startup load. |

No CONFIRMED (unfixed) findings. **Send path untouched** (grep: no AI-spam refs in mailProcessor/rateLimiter/campaignRunner/emailService/replyPoller/sequenceRunner/scheduler) → advisory-only, never blocks/rewrites; `renderSpamBanner` + `warnIfSpammy` unchanged → no send-path-reviewer required.

## Verification results

1. **Typecheck ×3** — clean.
2. **Tests** — `npm test`: **207 passed** (26 files), incl. new `spamAdvisor.test.ts` (score parse/clamp, level bands, safe never-throws fallback, json:true); `gui2Parity` green (Deliverability tab IDs in both shells).
3. **Non-breaking:** advisory only; the heuristic `#preview-spam` banner unchanged; the AI button appears only when `aiStatus().ready` and runs on click; the Deliverability screen never writes saved content (prefill only, editable).
4. **Build:** `vite build` clean; single-file `dist-electron/main.js`.

## Remaining manual verification (needs desktop + model)

Open the **Deliverability** tab → subject/body pre-fill from your default template → **Analyze** shows the instant rules check + (AI enabled) an AI score chip + Issues + Suggestions. Also: open a recipient → **Preview** → the **✨ Check deliverability with AI** button appears below the heuristic banner and returns the same analysis. The email is never modified. Confirm offline.

---

# Feature #5 — Personalized Email Generation

New module `src/ai/personalizer.ts` (pure over `AiService`), IPC `ai-personalize`
(clone of `ai-assist`, reuses the shared `'ai-stream'` channel), preload
`aiPersonalize`, and renderer UI: a ✨ button per recipients-table row that opens
the edit modal's injected **Personalize** panel (goal + tone → streamed draft →
Apply / Copy / Preview). "Continuous learning" = few-shot style examples selected
**read-only** from `replies.json × recipients.json` (recipients whose reply was
classified `Interested`/`MeetingBooked`), built in the main process.

## Findings (self-scan + send-path-reviewer heuristics) — all triaged

| id | file | sev | issue | status | verdict / resolution |
|----|------|-----|-------|--------|----------------------|
| F5-POT-001 | src/main.ts (personalizer Preview) | med | security hook: `iframe.contentWindow.document.write()` for the Preview render | ACCEPTED | Exact mirror of the two existing preview call sites (`previewBtn` and the composer preview) writing into the same sandboxed preview iframe; the content is the user's own `renderEmail` output (identical bytes to the real preview/send). No new/untrusted input path → not a new XSS surface. Diverging from the established preview mechanism for one button would be inconsistent + out of scope. |
| F5-POT-002 | src/ai/personalizer.ts | med | few-shot examples pull another recipient's message into this prospect's draft — privacy/leak | ACCEPTED | Examples are the user's **own** message **templates** (they contain merge tags like `{{name}}`, not resolved recipient PII), kept on-device and sent only to the **local** model. System prompt forbids copying their specifics ("do NOT copy them verbatim or reuse their specific details"); the active recipient's own facts are a separate, dominant block. Privacy contract (no cloud, no external API) intact. |
| F5-POT-003 | src/ai/personalizer.ts | med | unbounded prompt size (many/long winner templates + big record) | FIXED (by design) | Hard caps: `recipientFacts` truncates each field to 200 chars and skips array/object values; `selectWinningExamples` caps 3 examples × 800 chars + dedupes; `instruction` ≤ 2000, `baseTemplate` ≤ 4000, `MAX_EXAMPLES` 5. Prompt is bounded regardless of data volume. |
| F5-POT-004 | src/main.ts (gate) | med | ✨ gate correctness: first cut used a cached flag → the personalize bar could stay hidden while the F3 writing bar appeared on modal-open (AI ready, AI tab never visited) | FIXED | Personalizer gate now mirrors F3 exactly — a **live `aiStatus()`** check on modal-open / status-change reveals the bar when ready **and** refreshes the cached `aiReady` flag that drives the table ✨ buttons. AI disabled/not-ready ⇒ both the panel and every ✨ button are hidden (`syncPersonalizeButtons`). |
| F5-POT-005 | src/main.ts (goal input) | low | the goal `<input>` sits inside `recipient-form`; Enter would submit the form | FIXED | `keydown` on the goal input intercepts Enter → `preventDefault()` + `run()`, so Enter generates instead of submitting. All injected buttons are `type="button"` (no accidental submit). |
| F5-POT-006 | src/main.ts | low | file-type recipient (`messageType:'file'`): generating then Apply writes a hidden text box | ACCEPTED | The personalizer bar is injected inside `rec-msg-text-group`, which the modal sets to `display:none` for file-type recipients → the Generate UI is unreachable by construction for those; no bad state. |
| F5-POT-007 | electron/main.ts (ai-personalize) | low | handler reads `recipients.json` + `replies.json` on every call to build examples | ACCEPTED | Bounded O(n) read wrapped in try/catch → any failure degrades to **zero-shot** generation (still works). Read-only, off the send path, no writes. Mirrors the existing `list-replies` / `preview-email` read pattern. |

No CONFIRMED (unfixed) findings remain.

**Invariants re-verified:** send path untouched (grep: zero `personaliz`/`ai-personalize` refs in `mailProcessor`/`rateLimiter`/`campaignRunner`/`emailService`/`replyPoller`/`sequenceRunner`/`scheduler`/`renderer`/`suppressionManager`); advisory-only (the sole recipient-mutating path is the user's explicit **Apply**); positioning ("outreach"-framed system prompt, unit-asserted to contain **no** "cold email"); optional (both surfaces gated on `aiStatus().ready`; disabled ⇒ zero new UI); privacy (all local; `config.ai` cannot leak a password through `get-config`). `types.ts`/`aiService.ts` untouched.

## Verification results

1. **Typecheck ×3** — core / electron / renderer all clean (`tsc --noEmit`).
2. **Tests** — `npm test`: **220 passed** (27 files), incl. new `src/ai/personalizer.test.ts` (facts formatting + PII/plumbing exclusion, `selectWinningExamples` join/filter/truncate/limit, prompt building incl. the no-"cold email" assertion, streaming pass-through + error propagation); `gui2Parity` green (all F5 UI is `createElement` → no new static IDs).
3. **Non-breaking / additive** — new module + 1 IPC handler + 1 preload method + renderer wiring; no edits to `renderer.ts`, `mailProcessor.ts`, any store, `types.ts`, `aiService.ts`, or the HTML shells. Empty winner pool ⇒ graceful zero-shot; AI off ⇒ app unchanged.
4. **Build** — `vite build` clean (exit 0); single-file `dist-electron/main.js` (~1,692 kB) + `preload.js`; streaming reuses the existing `'ai-stream'` channel (no code-split).

## Remaining manual verification (needs desktop + model)

Enable AI + a model. Recipients → a row's **✨ Personalize** → the edit modal opens with the **✨ Personalize** bar focused → type a goal (e.g. "invite to a quick demo") → **Generate** streams a draft built from that prospect's fields within ~1s → **Apply** fills the message box, **Copy** copies, **Preview** renders it (never saved). Classify ≥1 reply as **Interested**/**MeetingBooked**, then generate again → the draft's style reflects the winning template; with no positive replies it still generates cleanly (zero-shot). AI **disabled** → no ✨ buttons, no panel; recipients behave exactly as before. Confirm offline (no network during generation).

---

# GPU acceleration — keep inference off the CPU (perf)

**Symptom:** the same GGUF is much faster in LM Studio. **Root cause:** our loader called `loadModel({modelPath})` with `gpuLayers:"auto"` — which fits layers for an **`"auto"`-sized** context — then created a **4096** context, so the KV cache had no VRAM left → the Vulkan `alloc_tensor_range` OOM (RT-001), and the ladder dropped to **CPU**. LM Studio/Ollama stay on the GPU by offloading only as many layers as fit **around** the intended context. **Fix:** offload with `gpuLayers:{fitContext:{contextSize}}` (reserves KV room) + **flash attention** (shrinks the KV), and only fall back to CPU after the GPU options are exhausted. Plus user overrides (backend, layer count, flash toggle). API verified against the installed `node-llama-cpp@3.19` `.d.ts` (`LlamaModelOptions.gpuLayers` object form, `LlamaContextOptions.flashAttention`, `getLlama({gpu})`, `LlamaModel.flashAttentionSupported`/`gpuLayers`, `Llama.gpu`).

Additive footprint: `config.ai.{gpu,gpuLayers,flashAttention}` (+ `AI_GPU`/`AI_GPU_LAYERS`/`AI_FLASH_ATTENTION` parse + `saveConfigToEnv`), the `ensureLoaded` attempt ladder in `localLlama.ts`, `AiStatus.{gpuType,gpuLayers}`, and a "GPU acceleration" settings block (both shells) + its wiring. **No send-path/store/feature-module changes.**

## Findings (self-scan) — triaged

| id | file | sev | issue | status | verdict / resolution |
|----|------|-----|-------|--------|----------------------|
| GPU-001 | src/ai/providers/localLlama.ts | med | status showed `"false"`/misleading backend: `Llama.gpu` returns `false` when auto-detect finds no GPU, and a GPU backend can load with **0** offloaded layers (effectively CPU) | FIXED | Resolve from the authoritative `llama.gpu` + `model.gpuLayers`: `activeGpuType = (backend && backend!==false && layers>0) ? backend : 'cpu'`. Status reads "on CPU" / "on GPU (cuda, N layers)" correctly. |
| GPU-002 | src/config.ts | low | `AI_GPU_LAYERS=0` (force CPU) could be swallowed as "auto" | FIXED | Parse distinguishes empty (→ undefined/auto) from `0` (→ 0/CPU); negatives clamp to 0; unit-tested (`aiConfig.test.ts`). `??`-chains in `saveConfigToEnv` preserve `0` (nullish-only) so CPU-only round-trips. |
| GPU-003 | src/ai/providers/localLlama.ts | low | forcing a backend the prebuilt lacks (e.g. `cuda`/`metal` on a Vulkan-only box) | ACCEPTED | `getLlama({gpu})` throws → the ladder's remaining GPU tries fail identically → CPU fallback. Degrades safely (a few wasted attempts on an explicit user choice); logged via the aggregate load error. |
| GPU-004 | src/ai/providers/localLlama.ts | low | flash attention forced on an unsupported model/backend | FIXED (guarded) | Enabled only when `model.flashAttentionSupported`; explicit `false` disables; otherwise `'auto'` (model default). |
| GPU-005 | electron/main.ts (saveConfig) | info | changing a GPU knob must reload the model | ACCEPTED | `saveConfig`→`rebuildProcessors` already rebuilds `globalAiService` (POT-006); the change handlers then call `refreshAiStatus()` → reload with the new backend/layers/flash. Reload cost paid only on explicit change. |

No CONFIRMED (unfixed) findings. **Non-breaking:** every knob defaults to today's behavior (`gpu:'auto'`, `gpuLayers:auto-fit`, `flashAttention:on` but self-gated on support); with AI disabled nothing loads. Send path untouched.

## Verification results

1. **Typecheck ×3** — clean.
2. **Tests** — `npm test`: **224 passed** (27 files), incl. 4 new `aiConfig` cases (GPU defaults, parse, `0`=CPU + negative clamp, unknown-backend fallback); `gui2Parity` green (the 3 new settings IDs `ai-gpu-backend`/`ai-gpu-layers`/`ai-flash-attention` added to **both** shells).
3. **Build** — `vite build` clean; single-file `dist-electron/main.js`; the ESM-from-CJS hatch intact.

## Remaining manual verification (needs the affected desktop + a model)

On the machine where LM Studio was faster: enable AI + a model, **Check Status** → expect **"on GPU (vulkan/cuda, N layers)"** (not "on CPU"), and generation noticeably faster than before. If it still says CPU: raise/lower **GPU layers** (blank=auto-fit, or a specific N), toggle **Flash attention**, or set **Backend** to CUDA (NVIDIA) — Check Status after each. Confirm the model still loads + generates; confirm offline (no network).

---

# Model-load progress bar (UX)

**Ask:** after choosing a model, show a progress bar for the (multi-GB, multi-second) load instead of a silent freeze. **How:** node-llama-cpp's `loadModel({onLoadProgress})` reports 0→1 (verified `LlamaModel.d.ts:150-153`). Threaded it through a new `AiProvider.preload(onProgress?)` → `AiService.preload` → IPC `ai-load-model` (streams `ai-load-progress`) → preload `onAiLoadProgress` → a `createElement` `<progress>` bar injected under the AI status line. Picking a model now **enables AI + loads with the bar**; the same bar drives enable-toggle, Check Status, and any context/GPU-setting change (all reload the model).

Additive footprint: `preload?` on the provider interface + `localLlama` (`loadProgressCb` + `onLoadProgress` + `preload()`), `AiService.preload`, one IPC handler, 2 preload methods, and the renderer bar + `loadModelWithProgress()`. No new static ids (dynamic bar) → gui2-parity untouched. Send path/stores untouched.

## Findings (self-scan) — triaged

| id | file | sev | issue | status | verdict / resolution |
|----|------|-----|-------|--------|----------------------|
| PB-001 | electron/main.ts + src/main.ts | med | loading the model while AI is disabled would violate the inert-when-disabled contract | FIXED (double-gated) | `ai-load-model` returns early when `!svc.isEnabled()`; `loadModelWithProgress` also skips the bar+load unless the enable toggle is on. Picking a model flips enable **on first** (explicit user intent), so the load then proceeds. |
| PB-002 | electron/main.ts (ai-select-model → saveConfigToEnv) | high | after picking a model, does the load target the NEW path? | VERIFIED-OK | `saveConfigToEnv` reloads `globalConfig` (loadConfig) **and** `rebuildProcessors()` (fresh `globalAiService`) before returning, so `preload()` loads the just-selected model; the enable-save rebuilds again (still fresh). No stale-path load. |
| PB-003 | src/ai/providers/localLlama.ts | low | the GPU→CPU attempt ladder calls `loadModel` per attempt, so `onLoadProgress` can reset 0→1 more than once | ACCEPTED | With the `fitContext` GPU fix the first attempt usually succeeds (one 0→1); on a genuine retry the reset legitimately signals "trying another config". Bar is clamped [0,100]. |
| PB-004 | src/main.ts | low | already-loaded model emits no progress (loadModel not re-called) → bar could hang | FIXED | `loadModelWithProgress` completes the bar in `finally` (set 100 → hide after 700 ms) regardless of whether any progress event fired, so the warm-model fast path shows a brief complete-then-hide. |

No CONFIRMED (unfixed) findings. **Non-breaking:** the bar is dynamic + hidden by default; with AI disabled nothing loads and no bar shows.

## Verification results

1. **Typecheck ×3** — clean.
2. **Tests** — `npm test`: **224 passed** (27 files); `gui2Parity` green (dynamic bar → no new ids).
3. **Build** — `vite build` clean; single-file `dist-electron/main.js` + `preload.js`.

## Remaining manual verification (needs desktop + model)

**Local AI** → **Select model** (pick a GGUF) → the **Loading model…** bar fills 0→100% as weights load, then **Status** shows READY + backend. Toggling **Enable AI** on (with a model set), **Check Status**, or changing **context/GPU** settings re-shows the bar during the reload. AI disabled → no bar, nothing loads. Confirm offline.
