export default function Terms() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Terms of Service</h1>
          <p className="text-center mt-4 text-gray-300">Last updated: October 14, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-xl">
          <p className="text-gray-700 text-lg">
            These Terms of Service ("Terms") govern your use of the Executive AI Fluency Sprint services provided by AI Strategy LLC ("we," "our," or "us"). By purchasing or using our services, you agree to these Terms.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Services</h2>
          <p className="text-gray-700 text-lg">
            The Executive AI Fluency Sprint consists of:
          </p>
          <ul className="text-gray-700 text-lg">
            <li>3-5 personalized coaching sessions (60 minutes each)</li>
            <li>Email support between sessions</li>
            <li>Access to resources and frameworks</li>
            <li>Personalized guidance and exercises</li>
          </ul>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Payment Terms</h2>
          <p className="text-gray-700 text-lg">
            The total fee for the Executive AI Fluency Sprint is $1,499 USD. Payment is due in full upon registration. We accept payment via credit card through our secure payment processor, Stripe.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Satisfaction Guarantee</h2>
          <div className="bg-teal/10 p-6 rounded-lg border-l-4 border-teal">
            <p className="text-gray-700 font-semibold text-lg">
              Experience your first session risk-free. If you don't have at least one breakthrough moment, we'll refund 100% of your payment.
            </p>
            <p className="text-gray-700 mt-2 text-lg">
              To request a refund under this guarantee, you must notify us within 48 hours after your first session via email at michele@aistrategyllc.com.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Scheduling and Cancellations</h2>
          <ul className="text-gray-700 text-lg">
            <li>Sessions must be scheduled within 6 months of purchase</li>
            <li>48-hour notice required for rescheduling</li>
            <li>No-shows forfeit the session</li>
            <li>We'll work with you to accommodate reasonable scheduling needs</li>
          </ul>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 text-lg">
            All materials, frameworks, and content provided during the sprint remain the intellectual property of AI Strategy LLC. You receive a license to use these materials for your personal and professional development but may not reproduce or distribute them without permission.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Confidentiality</h2>
          <p className="text-gray-700 text-lg">
            We maintain strict confidentiality regarding all information shared during coaching sessions. We will not disclose your personal or business information to third parties without your consent, except as required by law.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 text-lg">
            Our services provide coaching and educational guidance. We are not responsible for business decisions or outcomes based on our coaching. Our total liability shall not exceed the amount paid for the services.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Code of Conduct</h2>
          <p className="text-gray-700 text-lg">
            Participants agree to:
          </p>
          <ul className="text-gray-700 text-lg">
            <li>Engage respectfully and professionally</li>
            <li>Maintain confidentiality of other participants (if in group setting)</li>
            <li>Not record sessions without permission</li>
            <li>Provide honest feedback to help us improve</li>
          </ul>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Termination</h2>
          <p className="text-gray-700 text-lg">
            Either party may terminate the engagement with written notice. If you terminate after the first session, no refund will be provided unless under the satisfaction guarantee terms. If we terminate (except for cause), we'll provide a pro-rated refund for unused sessions.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Governing Law</h2>
          <p className="text-gray-700 text-lg">
            These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 text-lg">
            We may modify these Terms at any time. Changes will be effective for new purchases only. Your purchase is governed by the Terms in effect at the time of purchase.
          </p>

          <h2 className="text-3xl font-bold text-navy mt-10 mb-4">Contact Information</h2>
          <p className="text-gray-700 text-lg">
            For questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-700 text-lg">
            AI Strategy LLC<br />
            Email: michele@aistrategyllc.com
          </p>
        </div>
      </section>
    </main>
  )
}
