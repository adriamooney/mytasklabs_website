import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-stone-600 hover:text-neutral-850 text-sm mb-8 inline-block"
        >
          ← Back to home
        </Link>

        <h1 className="text-2xl font-semibold text-neutral-850">
          Consumer Data Privacy Policy
        </h1>
        <p className="mt-2 text-stone-500 text-sm">Effective Date: Sept 6, 2024</p>
        <p className="mt-6 text-stone-600 leading-relaxed">
          At My Task Labs, LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;), your privacy is our priority. We are committed to
          protecting the personal information you share with us and ensuring it
          is used responsibly and transparently. This Privacy Policy explains
          how we collect, use, and safeguard your information when you visit our
          website or use our services, including SMS communications.
        </p>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-850">
            1. Information We Collect
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We may collect the following types of information from you:
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Personal Information
          </h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Name</li>
            <li>Email address</li>
            <li>
              Phone number (including mobile phone numbers for SMS communications)
            </li>
            <li>Mailing address</li>
            <li>
              Business information, such as company name or industry details
              (if applicable)
            </li>
          </ul>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Non-Personal Information
          </h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>IP address</li>
            <li>Browser type and operating system</li>
            <li>
              Usage data, such as pages visited, time spent on the website, and
              interaction with content
            </li>
            <li>
              Cookies and similar tracking technologies (e.g., for analytics or
              site performance)
            </li>
          </ul>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Payment Information
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            If you purchase our services or products, payment details (such as
            credit card information) are processed securely through trusted
            third-party payment processors. We do not store full payment card
            details on our servers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            2. SMS Communications and Mobile Information
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            If you provide your mobile phone number and consent to receive text
            messages, we may send SMS communications related to:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Service inquiries</li>
            <li>Appointment scheduling and confirmations</li>
            <li>Estimates and service updates</li>
            <li>Customer support communications</li>
            <li>Account notifications</li>
            <li>Other service-related information</li>
          </ul>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Message frequency varies depending on user interaction and service
            usage.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Message and data rates may apply depending on your mobile carrier
            plan.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            You may opt out of SMS messages at any time by replying STOP. For
            assistance, reply HELP.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We will not send unsolicited marketing messages via SMS without
            explicit consent.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            3. How We Use Your Information
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We use the information collected to:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Provide, personalize, and improve our services and website</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Process transactions and send confirmations</li>
            <li>Send service-related communications via email or SMS</li>
            <li>Send promotional emails (you may opt out at any time)</li>
            <li>Analyze website usage to improve our offerings</li>
            <li>Comply with legal requirements or enforce our Terms and Conditions</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            4. How We Protect Your Information
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We implement appropriate technical and organizational security
            measures, including:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Encryption for sensitive data transmission</li>
            <li>Secure storage of personal information</li>
            <li>Restricted access to authorized personnel only</li>
            <li>Regular monitoring and updates to prevent unauthorized access</li>
            <li>
              Secure payment processing through PCI DSS-compliant third-party
              services
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            5. Sharing Your Information
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We do not sell, rent, or trade your personal information.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Specifically, mobile information will not be shared with third
            parties or affiliates for marketing or promotional purposes.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We may share your data only in the following circumstances:
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Service Providers
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            With trusted third-party vendors who assist in operating our business,
            such as:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Website hosting providers</li>
            <li>Payment processors</li>
            <li>Analytics services</li>
            <li>Cloud storage providers</li>
            <li>SMS and communication service providers</li>
          </ul>
          <p className="mt-2 text-stone-600 leading-relaxed">
            These providers are contractually obligated to use your information
            solely for the purpose of delivering services on our behalf.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Legal Obligations
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            To comply with applicable laws, regulations, legal processes, or
            government requests.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Business Transfers
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            In the event of a merger, acquisition, restructuring, or sale of
            assets.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            6. Messaging on Behalf of Business Clients
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            My Task Labs, LLC may provide communication services on behalf of
            business clients. In such cases:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>
              Phone numbers are used solely to facilitate requested
              communications.
            </li>
            <li>
              Business clients are responsible for obtaining proper end-user
              consent before initiating SMS communications.
            </li>
            <li>
              We process message data only to transmit communications as
              directed by the client.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            7. Data Retention
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We retain personal information only as long as necessary to:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Provide requested services</li>
            <li>Maintain business records</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p className="mt-2 text-stone-600 leading-relaxed">
            SMS message logs may be retained for compliance and recordkeeping
            purposes.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            8. Your Privacy Choices
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            You have the right to:
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Access and Update Information
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Contact us to review or correct your personal data.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Opt Out of Marketing Emails
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Unsubscribe from promotional emails at any time.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Opt Out of SMS Messages
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Reply STOP to any SMS message to discontinue further messages.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Restrict Cookies
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Manage cookie preferences through your browser settings.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Request Deletion
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Request deletion of your personal information, subject to legal or
            contractual obligations.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            9. Third-Party Links
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Our website may include links to third-party websites. We are not
            responsible for the privacy practices of those sites. We encourage
            you to review their privacy policies before providing personal
            information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            10. Children&apos;s Privacy
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Our services are not intended for individuals under 18 years of age.
            We do not knowingly collect personal information from children. If
            we become aware that such data has been collected, we will take
            prompt steps to delete it.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            11. Updates to This Privacy Policy
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in
            our practices or legal requirements. Any updates will be posted on
            this page with a revised effective date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            12. Contact Us
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            If you have any questions about this Privacy Policy or how your data
            is handled, please contact us:
          </p>
          <address className="mt-2 text-stone-600 leading-relaxed not-italic">
            My Task Labs, LLC
            <br />
            Email: contact@mytasklabs.us
            <br />
            Address: 8 The Green, Suite B, Dover, DE 19901
          </address>
        </section>

        <p className="mt-10 text-stone-600 leading-relaxed">
          By using our website or services, you consent to the practices
          outlined in this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
