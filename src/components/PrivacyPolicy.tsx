import { Header } from './Header'
import { Footer } from './Footer'
import { ReactLenis } from 'lenis/react'

export function PrivacyPolicy() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full bg-white font-sans text-ink">
        <div className="relative z-10">
          <Header />
        </div>
        
        <main className="overflow-clip relative pt-32 pb-24">
          <div className="mx-auto max-w-3xl px-5">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none text-slate-ink space-y-6">
              <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">1. Introduction</h2>
                <p>Welcome to Email Pilots. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">2. The data we collect about you</h2>
                <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">3. How we use your personal data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">5. Your legal rights</h2>
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">6. Contact us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at support@emailpilots.com.</p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  )
}
