# Privacy Policy

**Effective Date:** 3 October 2026

This Privacy Policy explains how Email Pilots ("we," "us," or "our"), operating as a sole proprietorship in India, collects, uses, discloses, and safeguards your information when you visit our website or use the Email Pilots desktop application (collectively, the "Service"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.

## 1. The Email Pilots Desktop Application

We fundamentally believe that your data belongs to you. The Email Pilots desktop application is architected to operate **100% locally on your machine**.

* **No Data Harvesting or Telemetry:** The application contains zero network telemetry, crash reporting, or tracking scripts. It makes no HTTP requests to our servers or any third-party analytics providers.
* **License Validation (First Class only):** The free tier makes no first-party network requests at all. If you purchase First Class and enter a license key, the application periodically sends that license key (and your computer's name, as the instance label) to Lemon Squeezy — our Merchant of Record — to confirm your subscription is active. Nothing else is transmitted: no email content, no recipient data, no usage data. If you never enter a license key, this check never runs.
* **Other network connections:** The application makes a few connections that carry none of your email data. (a) **Update check:** installed copies check GitHub, where releases are published, for a newer version at launch and every few hours, and download it if there is one — a plain read of the public release list, no identifier attached. (b) **Icons:** the interface loads its icon font from Google Fonts. (c) **AI model download:** only if you choose to download an on-device AI model, it is fetched from Hugging Face. (d) **Your mail provider:** sending and reply checks connect to the provider you chose (SMTP/IMAP servers, or Microsoft Graph for Microsoft accounts).
* **Local Data Storage:** All configuration and operational data—including your recipient lists, sending limits, suppressed emails, and email templates—are stored securely and solely on your local hard drive.
* **Direct SMTP Connections:** The application connects directly from your computer to your chosen SMTP provider (e.g., Gmail, Outlook, or custom SMTP). Your emails, attachments, and recipient data never pass through, touch, or get processed by our servers.
* **Secure Credentials:** Your SMTP credentials (App Passwords) and any sign-in tokens (Microsoft or Google OAuth) are stored entirely locally on your machine, encrypted with your operating system's protection. We have absolutely no access to your credentials or your email accounts.

### Google user data ("Sign in with Google")

If you connect a Gmail mailbox with Sign in with Google, the application asks Google for your account's email address (so it knows which mailbox you connected) and for the Gmail mail scope (https://mail.google.com/). That is the access a desktop mail program uses, and the only Gmail permission that allows sending and reading over SMTP and IMAP. The application uses it only for the following, and only on your computer:

* **Sending:** the messages you schedule are sent from your mailbox over SMTP.
* **Reply and bounce detection:** over IMAP, the application checks the sender, subject and date of new messages in your inbox to recognise replies from people on your recipient list and delivery-failure notices. Messages from anyone else are skipped, and nothing about them is kept.
* **Reading a message's content, in two cases only:** a delivery-failure notice, to find the address that bounced; and, only if you turn on the optional on-device AI reply sorting, a reply from someone on your list, to sort it (for example, to honour an unsubscribe request).

What the application keeps (who replied and when, the subject line, a reply's category, and addresses that bounced) stays in files on your computer, and the sign-in token is stored there encrypted with your operating system's protection. No Google user data is transmitted to us or to any other server: the only endpoints it ever reaches are Google's own sign-in, SMTP and IMAP servers, so no one at Email Pilots can see it. Google user data is never sold and never used for advertising. Email Pilots does not use Google Workspace APIs data to develop, improve, or train non-personalized AI and/or ML models; the optional AI runs a downloaded model on your computer and does not learn from your mail.

You can revoke access at any time on your Google Account's [third-party connections page](https://myaccount.google.com/connections). Signing out of the application, or removing the account from it, deletes the token from your computer.

Email Pilots' use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes), including the Limited Use requirements.

## 2. Information We Collect on Our Website

While our desktop application is fully local and private, we do collect certain information when you interact with our website.

### A. Personal Data
When you purchase a subscription or contact us, we may collect personally identifiable information, such as:
* Name
* Email address
* Billing address

### B. Payment Information
All subscription payments are processed securely through our Merchant of Record, **LemonSqueezy**. When you make a purchase, LemonSqueezy collects and processes your payment details (such as credit card numbers). We do not process, store, or have direct access to your full payment card information. Please review [LemonSqueezy’s Privacy Policy](https://www.lemonsqueezy.com/privacy) for details on how they handle your data.

### C. Usage Data and Analytics
We use **GoatCounter**, a privacy-friendly analytics service, to count visits to our website. It sets no cookies, does not track you across sites, and builds no visitor profiles — we see only aggregate counts such as pages viewed, referrers, browser type, and country. This data is used to improve our website's user experience.

## 3. How We Use Your Information

We use the information collected via our website and payment processor to:
* Provide, operate, and maintain our Service.
* Process your subscription payments and renewals (via LemonSqueezy).
* Respond to your customer service requests and support needs.
* Monitor website usage and analyze trends to improve our marketing and web presence.
* Prevent fraudulent transactions and monitor against theft.

## 4. Sharing Your Information

We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:
* **With Service Providers:** We share necessary data with LemonSqueezy to facilitate payment processing.
* **For Analytics:** Aggregate, cookieless website visit counts are processed by GoatCounter.
* **By Law:** We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency in India).

## 5. Data Security

We use administrative, technical, and physical security measures to help protect your personal information. However, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. 
For the desktop application, you are entirely responsible for the security of the data, recipient lists, and SMTP credentials stored on your own physical device.

## 6. Your Rights

Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the personal information we have collected about you via our website or payment processor.
To delete the data associated with the desktop app, you simply need to uninstall the application and delete its local configuration directory from your computer.

## 7. Governing Law

This Privacy Policy and your use of the Service are governed by and construed in accordance with the laws of India. 

## 8. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.

## 9. Contact Us

If you have questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact us at:
**Email:** emailpilots.sales@gmail.com
