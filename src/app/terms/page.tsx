
export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32 sm:pt-48">
      <h1 className="text-4xl font-bold mb-8 text-primary text-center">Terms and Conditions</h1>
      <div className="prose prose-lg text-foreground max-w-4xl mx-auto">
        <p className="text-center">
          These Terms & Conditions apply to all cleaning services provided by Gleam Genie. By booking a service, the client agrees to the terms below.
        </p>
        
        <hr className="my-8" />

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">1. PAYMENT TERMS</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Invoices must be paid within 3 days of being issued.</li>
              <li>Failure to pay may result in paused services and possible debt recovery action.</li>
              <li>Late payments may incur fees to cover administration or legal costs.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">2. CANCELLATIONS & RESCHEDULING</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Same-day cancellations (including within 24 hours) require full payment of the scheduled clean.</li>
              <li>No access: If the cleaner cannot enter the property within 15 minutes of arrival, a 50% fee of the clean will be charged.</li>
              <li>Rescheduling with more than 24 hours’ notice is free.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">3. NON-PAYMENT</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>If payment is not made after reminders, the outstanding amount may be escalated to external debt recovery or taken to VCAT.</li>
              <li>All additional recovery costs may be added to the client’s balance.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">4. QUALITY & COMPLAINTS</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>If the client is unsatisfied with any part of the clean, a complaint must be made within 24 hours of the service.</li>
              <li>We offer a re-clean of the affected areas only, not full refunds.</li>
              <li>Complaints made after 24 hours cannot be accepted due to natural dust, usage, and environmental factors.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">5. ACCESS & SECURITY</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>The client must provide safe access to the property (keys, codes, unlocked doors, pets secured, etc.).</li>
              <li>Gleam Genie is not responsible for missed cleans due to incorrect or inaccessible entry.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">6. PRICING & ESTIMATES</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Quotes are based on the information provided by the client.</li>
              <li>If the property requires more time due to extra mess, heavy buildup, or additional tasks not originally discussed, the price may be adjusted and the client will be informed.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">7. SAFETY & LIMITATIONS</h2>
            <p className="font-light">We cannot:</p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Move heavy furniture</li>
              <li>Declutter or organise personal items unless agreed</li>
              <li>Clean hazardous substances (mould infestations, blood, animal waste, etc.)</li>
              <li>Work in unsafe environments</li>
            </ul>
            <p className="font-light mt-2">If conditions are unsafe, the clean may be stopped and a fee may apply.</p>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">8. DAMAGE & BREAKAGE</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>We take care during every clean, but small wear-and-tear incidents may occur.</li>
              <li>Any accidental damage must be reported within 24 hours.</li>
              <li>Gleam Genie is not responsible for instability of items that were already loose, unsecured, or damaged prior.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">9. REGULAR CLEANING AGREEMENTS</h2>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Weekly, fortnightly, or monthly cleans must follow the payment and cancellation policies above.</li>
              <li>If more than 2 regular payments are missed, services will be paused.</li>
            </ul>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">10. PHOTOS & EVIDENCE</h2>
            <p className="font-light">Before-and-after photos may be taken for:</p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>quality control</li>
              <li>proof of completed tasks</li>
              <li>protection against false claims</li>
            </ul>
            <p className="font-light mt-2">Photos will never show personal belongings in a recognisable way.</p>
          </div>

          <hr className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-3 text-primary">11. TERMINATION OF SERVICES</h2>
            <p className="font-light">Gleam Genie may discontinue services if:</p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>payments are consistently late</li>
              <li>communication becomes abusive</li>
              <li>unsafe conditions exist</li>
              <li>terms & conditions are repeatedly breached</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
