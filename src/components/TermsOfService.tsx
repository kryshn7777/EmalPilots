import { Header } from './Header'
import { Footer } from './Footer'
import { ReactLenis } from 'lenis/react'

export function TermsOfService() {
  return (
    <ReactLenis root autoRaf={false}>
      <div className="relative min-h-screen w-full bg-white font-sans text-ink">
        <div className="relative z-10">
          <Header />
        </div>
        
        <main className="overflow-clip relative pt-32 pb-24">
          <div className="mx-auto max-w-3xl px-5">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-8">Terms and Conditions</h1>
            <div className="prose prose-slate max-w-none text-slate-ink space-y-6">
              <p className="text-lg font-medium"><strong>Effective Date:</strong> 14 June 2026</p>
              
              <p>These Terms and Conditions ("Terms") govern your access to and use of the Email Pilots website and desktop application (collectively, the "Service"), operated by Email Pilots ("we," "us," or "our"), a sole proprietorship based in India. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">1. Description of Service</h2>
                <p>Email Pilots provides a downloadable, locally-hosted software application designed to schedule and automate email outreach. The software connects directly to your own email accounts and SMTP credentials and operates entirely on your local machine.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">2. Subscriptions and Payments</h2>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Pricing and Billing:</strong> Access to the Service requires a subscription, currently priced at €2 per week. We reserve the right to modify our pricing at any time.</li>
                  <li><strong>Merchant of Record:</strong> All payments, subscriptions, and billing inquiries are processed securely through our Merchant of Record, <strong>LemonSqueezy</strong>. By subscribing, you also agree to LemonSqueezy’s terms of service.</li>
                  <li><strong>Referral Program:</strong> Users may participate in our referral program. For each successful referral, you will receive two (2) free weeks credited to your subscription. We reserve the right to modify, suspend, or terminate the referral program at any time, especially in cases of suspected abuse.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">3. Refund Policy</h2>
                <p>We offer a strict <strong>14-day money-back guarantee</strong> for your initial purchase. If you are not satisfied with the Service, you may request a full refund within exactly 14 days of your initial subscription payment. To request a refund, please contact us at the email provided below. Subsequent recurring subscription charges or renewals are not eligible for refunds.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">4. Acceptable Use and Anti-Spam Policy</h2>
                <p>Email Pilots is a tool intended to facilitate legitimate, lawful outreach. You agree <strong>not</strong> to use the Service to send unsolicited spam, malicious software, phishing attempts, or fraudulent content.</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>User Liability and Compliance:</strong> The application includes a built-in spam checker that provides advisory warnings regarding your email content (e.g., flagging ALL CAPS subjects, missing plain-text alternatives, or specific spam-trigger words). The application <em>does not strictly block</em> sends based on these heuristics. You are solely responsible for reviewing these warnings and ensuring that all emails sent via the Service comply with all applicable local and international anti-spam laws, including but not limited to the CAN-SPAM Act, the GDPR, and the CCPA.</li>
                  <li><strong>Automatic Bounce Management:</strong> The application automatically intercepts permanent SMTP envelope rejection errors (5xx) and adds those addresses to a local suppression list. You agree not to tamper with, circumvent, or bypass this suppression mechanism to forcefully re-email bounced addresses.</li>
                  <li><strong>Account and Domain Reputation:</strong> Because the application connects directly to your SMTP provider, you are solely responsible for maintaining the health, reputation, and limits of your email accounts and domains. We accept no liability if your email account gets restricted, suspended, or banned by your provider (e.g., Google, Microsoft, or custom SMTP) due to sending volume, user complaints, hard bounces, or policy violations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">5. Limitation of Liability</h2>
                <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied. To the fullest extent permitted by applicable law, Email Pilots and its proprietor shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, loss of email account access, or business interruption arising out of your use of, or inability to use, the Service.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">6. Intellectual Property</h2>
                <p>Email Pilots retains all rights, title, and interest in and to the Service, including the desktop application, website, logos, and associated branding. Your subscription grants you a limited, non-exclusive, non-transferable, and revocable license to download and use the software for your own personal or internal business purposes. You may not reverse-engineer, redistribute, or resell the software.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">7. Governing Law and Dispute Resolution</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal disputes arising from or relating to these Terms or the Service shall be resolved exclusively in the competent courts located in India.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">8. Changes to These Terms</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date." Your continued use of the Service after any changes are posted constitutes your acceptance of the new Terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">9. Contact Information</h2>
                <p>For support, refund requests, or legal inquiries regarding these Terms, please contact:</p>
                <p><strong>Email:</strong> <a href="mailto:emailpilots.sales@gmail.com" className="text-blue hover:underline">emailpilots.sales@gmail.com</a></p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  )
}
