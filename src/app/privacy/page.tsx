export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32 sm:pt-48">
      <h1 className="text-4xl font-bold mb-8 text-primary text-center">Privacy Policy, Gleam Genie</h1>
      <div className="prose prose-lg text-foreground max-w-4xl mx-auto">
        <p className="text-center">
          Gleam Genie (“we”, “our”) respects your privacy. Here’s how we handle your information:
        </p>

        <hr className="my-8" />

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">What We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Your name, email, phone number, and address</li>
              <li>Any information you provide when requesting a quote or booking a cleaning service</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">How We Use It</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>To provide cleaning services and send booking updates</li>
              <li>To communicate with you about your service</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">Sharing Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
                <li>We do not sell your data</li>
                <li>We only share it when necessary to provide the service (e.g., payment processor)</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">Security</h2>
            <p className="font-light">
              We take reasonable steps to keep your information safe.
            </p>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
                <li>You can ask us to see, update, or delete your personal information at any time</li>
                <li>Contact us at: <a href="mailto:gleamgenie9@gmail.com" className="text-primary hover:underline font-bold">gleamgenie9@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
