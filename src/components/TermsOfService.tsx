import { Header } from './Header'
import { Footer } from './Footer'
import { ReactLenis } from 'lenis/react'

export function TermsOfService() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full bg-white font-sans text-ink">
        <div className="relative z-10">
          <Header />
        </div>
        
        <main className="overflow-clip relative pt-32 pb-24">
          <div className="mx-auto max-w-3xl px-5">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-8">Terms of Service</h1>
            <div className="prose prose-slate max-w-none text-slate-ink space-y-6">
              <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">1. Agreement to Terms</h2>
                <p>By accessing or using Email Pilots, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Email Pilots' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on Email Pilots' website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">3. Disclaimer</h2>
                <p>The materials on Email Pilots' website are provided on an 'as is' basis. Email Pilots makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">4. Limitations</h2>
                <p>In no event shall Email Pilots or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Email Pilots' website, even if Email Pilots or a Email Pilots authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">5. Acceptable Use</h2>
                <p>You agree not to use Email Pilots for any unlawful purpose or any purpose prohibited under this clause. You agree not to use Email Pilots in any way that could damage our website, services, or general business of Email Pilots.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">6. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Email Pilots operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  )
}
