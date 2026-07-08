import { Header } from './Header'
import { Footer } from './Footer'
import { ReactLenis } from 'lenis/react'

export function PrivacyPolicy() {
  return (
    <ReactLenis root autoRaf={false}>
      <div className="relative min-h-screen w-full bg-white font-sans text-ink">
        <div className="relative z-10">
          <Header />
        </div>
        
        <main className="overflow-clip relative pt-32 pb-24">
          <div className="mx-auto max-w-3xl px-5">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none text-slate-ink space-y-6">
              <p className="text-lg font-medium"><strong>Effective Date:</strong> 14 June 2026</p>
              
              <p>This Privacy Policy explains how Email Pilots ("we," "us," or "our"), operating as a sole proprietorship in India, collects, uses, discloses, and safeguards your information when you visit our website or use the Email Pilots desktop application (collectively, the "Service"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.</p>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">1. The Email Pilots Desktop Application</h2>
                <p>We fundamentally believe that your data belongs to you. The Email Pilots desktop application is architected to operate <strong>100% locally on your machine</strong>.</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>No Data Harvesting or Telemetry:</strong> The application contains zero network telemetry, crash reporting, or tracking scripts. It makes no HTTP requests to our servers or any third-party analytics providers.</li>
                  <li><strong>Local Data Storage:</strong> All configuration and operational data, including your recipient lists, sending limits, suppressed emails, and email templates, are stored securely and solely on your local hard drive.</li>
                  <li><strong>Direct SMTP Connections:</strong> The application connects directly from your computer to your chosen SMTP provider (e.g., Gmail, Outlook, or custom SMTP). Your emails, attachments, and recipient data never pass through, touch, or get processed by our servers.</li>
                  <li><strong>Secure Credentials:</strong> Your SMTP credentials (e.g., App Passwords) are stored entirely locally on your machine. We have absolutely no access to your credentials or your email accounts.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">2. Information We Collect on Our Website</h2>
                <p>While our desktop application is fully local and private, we do collect certain information when you interact with our website.</p>
                
                <h3 className="text-xl font-bold text-ink mt-6 mb-3">A. Personal Data</h3>
                <p>When you purchase a subscription or contact us, we may collect personally identifiable information, such as:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Billing address</li>
                </ul>

                <h3 className="text-xl font-bold text-ink mt-6 mb-3">B. Payment Information</h3>
                <p>All subscription payments are processed securely through our Merchant of Record, <strong>LemonSqueezy</strong>. When you make a purchase, LemonSqueezy collects and processes your payment details (such as credit card numbers). We do not process, store, or have direct access to your full payment card information. Please review <a href="https://www.lemonsqueezy.com/privacy" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">LemonSqueezy’s Privacy Policy</a> for details on how they handle your data.</p>

                <h3 className="text-xl font-bold text-ink mt-6 mb-3">C. Usage Data and Analytics</h3>
                <p>We use <strong>Google Analytics</strong> to monitor and analyze web traffic on our website. Google Analytics may collect data such as your IP address, browser type, operating system, referring URLs, and pages viewed. This data is used to improve our website's user experience. You can opt out of Google Analytics tracking by using browser extensions or adjusting your cookie preferences.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">3. How We Use Your Information</h2>
                <p>We use the information collected via our website and payment processor to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide, operate, and maintain our Service.</li>
                  <li>Process your subscription payments and renewals (via LemonSqueezy).</li>
                  <li>Respond to your customer service requests and support needs.</li>
                  <li>Monitor website usage and analyze trends to improve our marketing and web presence.</li>
                  <li>Prevent fraudulent transactions and monitor against theft.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">4. Sharing Your Information</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>With Service Providers:</strong> We share necessary data with LemonSqueezy to facilitate payment processing.</li>
                  <li><strong>For Analytics:</strong> We share anonymized website usage data with Google Analytics.</li>
                  <li><strong>By Law:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency in India).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">5. Data Security</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. However, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                <p>For the desktop application, you are entirely responsible for the security of the data, recipient lists, and SMTP credentials stored on your own physical device.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">6. Your Rights</h2>
                <p>Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the personal information we have collected about you via our website or payment processor.</p>
                <p>To delete the data associated with the desktop app, you simply need to uninstall the application and delete its local configuration directory from your computer.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">7. Governing Law</h2>
                <p>This Privacy Policy and your use of the Service are governed by and construed in accordance with the laws of India.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">8. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ink mt-10 mb-4">9. Contact Us</h2>
                <p>If you have questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
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
