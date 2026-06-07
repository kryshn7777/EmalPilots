import { useState } from 'react'
import { motion } from 'motion/react'
import { Plane, CheckCircle2, Loader2 } from 'lucide-react'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setStatus('loading')
    
    // Formspree Integration
    try {
      const response = await fetch('https://formspree.io/f/mojzepne', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        setStatus('success')
      } else {
        // If there's an error, revert to idle so they can try again
        setStatus('idle')
        alert("Oops! There was a problem submitting your email. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setStatus('idle')
    }
  }

  return (
    <section id="waitlist" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-ink to-ink" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto w-16 h-16 bg-blue/10 border border-blue/20 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Plane className="w-8 h-8 text-blue-400" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Get early access to the flight deck.
          </h2>
          <p className="text-[17px] md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Email Pilots is currently in private beta. Join the waitlist to be the first to know when we open up spots for new commanders.
          </p>

          <div className="relative max-w-lg mx-auto group mt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-[1.5rem] blur-xl opacity-50 group-focus-within:opacity-100 transition duration-500" />
            <div className="relative bg-[#0A0F1C] border border-slate-700/60 rounded-[1.5rem] p-1.5 shadow-2xl overflow-hidden">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 flex items-center justify-center gap-3 text-green-400"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-semibold text-lg">You're on the list!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row relative z-10">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    disabled={status === 'loading'}
                    className="flex-1 bg-transparent px-6 py-4 text-[16px] text-white placeholder:text-slate-500 focus:outline-none disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-blue hover:bg-blue-600 text-white font-semibold rounded-xl px-8 py-4 transition-all flex items-center justify-center disabled:opacity-80 min-w-[160px] shadow-glow"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Request Access"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {status !== 'success' && (
            <p className="mt-6 text-[13px] text-slate-400 font-medium">
              Join <span className="text-white">2,400+</span> others already waiting. No spam, ever.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
