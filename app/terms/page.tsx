import Link from "next/link";

export default function TermsPage() {
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
          Terms and Conditions
        </h1>
        <p className="mt-2 text-stone-500 text-sm">Effective Date: Sept 6, 2024</p>
        <p className="mt-6 text-stone-600 leading-relaxed">
          Welcome to the website of My Task Labs, LLC (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our
          website or services, you agree to comply with and be bound by the
          following terms and conditions (&ldquo;Terms&rdquo;). If you do not
          agree with these Terms, please do not use our website or services.
        </p>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-850">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            By accessing this website or using our services, you confirm that
            you are at least 18 years of age and legally capable of entering
            into a binding agreement.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            2. Services Provided
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            My Task Labs, LLC provides marketing, consulting, and automation
            services, including communication workflow systems, as well as
            ancillary products to support small businesses. The specific details
            of services and products will be outlined in individual agreements
            or purchase terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            3. Use of Website
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">You agree to:</p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Use this website for lawful purposes only.</li>
            <li>
              Not engage in any activity that could disrupt or damage the
              website or its content.
            </li>
            <li>
              Refrain from uploading or transmitting harmful content, including
              viruses or malicious code.
            </li>
          </ul>
          <p className="mt-4 text-stone-600 leading-relaxed">
            We reserve the right to restrict access to the website or terminate
            accounts if these Terms are violated.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            4. Intellectual Property
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            All content on this website, including text, graphics, logos, and
            designs, is the property of My Task Labs, LLC or its licensors and
            is protected by intellectual property laws.
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>
              You may not reproduce, distribute, or use our content without
              prior written consent.
            </li>
            <li>
              Any unauthorized use of our intellectual property may result in
              legal action.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            5. Payment Terms
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            For services or products requiring payment:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>
              Payments must be made in accordance with the terms specified at
              the time of purchase.
            </li>
            <li>
              We use trusted third-party payment processors and are not
              responsible for any issues arising from their services.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            6. Disclaimer of Warranties
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Our website and services are provided &ldquo;as is&rdquo; without
            warranties of any kind, either express or implied, including but
            not limited to implied warranties of merchantability, fitness for a
            particular purpose, or non-infringement.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We do not guarantee that:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>The website will be available at all times or free from errors.</li>
            <li>
              The results obtained from our services will meet your specific
              expectations.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            7. Limitation of Liability
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            To the fullest extent permitted by law, My Task Labs, LLC shall not
            be liable for:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>
              Any indirect, incidental, or consequential damages arising from
              your use of our website or services.
            </li>
            <li>
              Loss of profits, data, or business opportunities, even if
              advised of such possibilities.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            8. User-Provided Content
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            If you submit content to our website (e.g., reviews, feedback, or
            suggestions):
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>
              You grant us a non-exclusive, royalty-free license to use,
              reproduce, and distribute your content.
            </li>
            <li>
              You confirm that your content does not violate the rights of any
              third party.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            9. Links to Third-Party Websites
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Our website may include links to third-party websites for your
            convenience. We do not control or endorse these sites and are not
            responsible for their content or practices.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            10. Changes to Terms
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We may revise these Terms at any time without prior notice. Changes
            will be effective upon posting on this website. It is your
            responsibility to review these Terms periodically.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            11. Termination
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We reserve the right to terminate your access to the website or our
            services at our discretion, without notice, for any violation of
            these Terms or applicable laws.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            12. Governing Law
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            These Terms are governed by and construed in accordance with the
            laws of the state of Delaware, without regard to its conflict of
            law principles. Any disputes shall be resolved in the courts
            located in Dover, Delaware.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            13. Contact Information
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            If you have any questions or concerns about these Terms, please
            contact us:
          </p>
          <address className="mt-2 text-stone-600 leading-relaxed not-italic">
            My Task Labs, LLC
            <br />
            Email: contact@mytasklabs.us
            <br />
            Address: 8 The Green, Suite B, Dover DE 19901
          </address>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-850">
            14. SMS Messaging Terms
          </h2>
          <p className="mt-2 text-stone-600 leading-relaxed">
            My Task Labs, LLC may use SMS (text messaging) as part of its
            services or communication workflows, either directly or on behalf
            of its business clients.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Consent to Receive SMS Messages
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            By providing your mobile phone number through our website, service
            forms, booking forms, or other communication channels, you expressly
            consent to receive SMS messages related to:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>Service inquiries</li>
            <li>Appointment scheduling and confirmations</li>
            <li>Estimates and service updates</li>
            <li>Customer support communications</li>
            <li>Account or service-related notifications</li>
          </ul>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Message frequency varies depending on interaction and service usage.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Consent to receive SMS messages is not a condition of purchase.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Opt-Out Instructions
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            You may opt out of receiving SMS messages at any time by replying:
          </p>
          <p className="mt-2 font-medium text-neutral-850">STOP</p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            After opting out, you may receive a final confirmation message. No
            further messages will be sent unless you reinitiate communication.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            For assistance, reply:
          </p>
          <p className="mt-2 font-medium text-neutral-850">HELP</p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Message and Data Rates
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Message and data rates may apply depending on your mobile carrier
            plan. Carriers are not liable for delayed or undelivered messages.
          </p>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            No Unsolicited Marketing
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We do not send unsolicited marketing messages. SMS communications
            are sent only:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
            <li>In response to a user-initiated inquiry</li>
            <li>After explicit opt-in consent</li>
            <li>As part of an active service relationship</li>
          </ul>

          <h3 className="mt-4 text-base font-semibold text-neutral-850">
            Third-Party Messaging Providers
          </h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            We may use third-party communication providers to facilitate SMS
            delivery. These providers process message data solely for the
            purpose of transmitting communications.
          </p>
        </section>
      </div>
    </div>
  );
}
