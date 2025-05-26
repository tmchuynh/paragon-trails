export default function CancellationAndRefundPolicy() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mx-auto py-8 max-w-4xl">
        <h1 className="mb-4 font-bold text-3xl text-center">
          Cancellation and Refund Policy
        </h1>

        <div className="mb-8">
          <h2 className="mb-2 font-semibold text-2xl text-center">
            Clarity, transparency, and integrity—before your journey even
            begins.
          </h2>
          <p className="mb-4 text-lg">
            At Paragon Trails, we understand that plans can change. While our
            journeys are highly personalized and often require extensive advance
            coordination, we have structured our cancellation and refund
            policies to balance flexibility with the realities of luxury travel
            design and third-party commitments.
          </p>
          <p className="mb-4 text-lg">
            This policy outlines what you can expect in the event of a
            cancellation, modification, or refund request.
          </p>
        </div>

        {/* Standard Cancellation Policy Section */}
        <section className="mb-12">
          <h2 className="mb-2 font-semibold text-2xl">
            Standard Cancellation Policy
          </h2>
          <h3 className="mb-6 text-lg italic">
            Tiered Based on Lead Time and Services Secured
          </h3>

          <div className="mb-4 overflow-x-auto">
            <table className="bg-white border border-gray-200 min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 border-b text-left">
                    Days Before Scheduled Departure
                  </th>
                  <th className="px-4 py-3 border-b text-left">
                    Cancellation Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b">90 days or more</td>
                  <td className="px-4 py-3 border-b">
                    15% of total booking (non-refundable deposit retained)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">60–89 days</td>
                  <td className="px-4 py-3 border-b">30% of total booking</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">31–59 days</td>
                  <td className="px-4 py-3 border-b">50% of total booking</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">15–30 days</td>
                  <td className="px-4 py-3 border-b">75% of total booking</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">14 days or less</td>
                  <td className="px-4 py-3 border-b">
                    100% of total booking (non-refundable)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm italic">
            Note: Some accommodations, charter services, and local experiences
            may carry stricter cancellation terms. These will be disclosed and
            agreed upon prior to booking.
          </p>
        </section>

        {/* Refund Eligibility Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">Refund Eligibility</h2>
          <p className="mb-4">
            We strive to process eligible refunds efficiently and transparently.
          </p>

          <div className="gap-8 grid md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-medium text-xl">Eligible for Refund</h3>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  Amounts paid beyond the non-refundable percentage, according
                  to the timeline above
                </li>
                <li>
                  Services cancelled by Paragon Trails or our partners due to
                  force majeure (e.g., natural disaster, political instability)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-medium text-xl">
                Not Eligible for Refund
              </h3>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Non-refundable deposits</li>
                <li>Travel insurance premiums</li>
                <li>
                  Third-party fees that are contractually non-recoverable (e.g.,
                  private aviation, yacht charters, seasonal exclusives)
                </li>
                <li>No-shows or late arrivals for scheduled experiences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modifications & Rebooking Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            Modifications & Rebooking
          </h2>
          <p className="mb-4">
            We are happy to assist with rescheduling whenever possible.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="min-w-[150px] font-medium">Date Changes:</span>
              <span>
                Permitted up to 30 days before departure, subject to
                availability and third-party fees
              </span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[150px] font-medium">
                Service Substitutions:
              </span>
              <span>
                We will offer equal or better alternatives if any component
                becomes unavailable
              </span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[150px] font-medium">Credits:</span>
              <span>
                In select cases, your payment may be applied as a travel credit
                valid for 12 months
              </span>
            </li>
          </ul>
        </section>

        {/* Force Majeure Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            Force Majeure & Exceptional Circumstances
          </h2>
          <p className="mb-4">
            In the case of events beyond your control—including natural
            disasters, pandemics, or travel bans—Paragon Trails will work on
            your behalf to:
          </p>

          <ul className="space-y-2 mb-4 pl-5 list-disc">
            <li>Secure partial or full credits with partners</li>
            <li>Negotiate refunds where contractually feasible</li>
            <li>Rebook or reschedule without penalty when possible</li>
          </ul>

          <p>
            We do not charge administrative fees for force majeure claims;
            however, many third-party vendors apply their own policies and
            limitations.
          </p>
        </section>

        {/* Travel Insurance Section */}
        <section className="bg-gray-50 mb-12 p-6 rounded-lg">
          <h2 className="mb-4 font-semibold text-2xl">
            Travel Insurance Recommendation
          </h2>
          <p className="mb-4">
            We strongly recommend securing comprehensive travel insurance that
            includes:
          </p>

          <ul className="space-y-2 mb-4 pl-5 list-disc">
            <li>Trip cancellation and interruption coverage</li>
            <li>Emergency medical assistance</li>
            <li>Lost or delayed baggage</li>
            <li>
              Coverage for weather, illness, or force majeure-related
              cancellations
            </li>
          </ul>

          <p className="italic">
            Paragon Trails does not assume liability for costs not covered by
            your insurance provider.
          </p>
        </section>

        {/* Contact & Claims Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">Contact & Claims</h2>
          <p className="mb-4">
            To initiate a cancellation, refund request, or policy inquiry,
            please contact your dedicated travel designer or reach out via:
          </p>

          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <p className="mb-1">
              <span className="font-medium">Email:</span>{" "}
              concierge@paragontrails.com
            </p>
            <p className="mb-1">
              <span className="font-medium">Phone:</span> +1 (310) 477–8820
            </p>
            <p>
              <span className="font-medium">Hours:</span> Monday–Friday, 9:00 AM
              to 5:00 PM PT
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-8 text-center">
          <h2 className="mb-4 font-semibold text-2xl">Our Commitment</h2>
          <p className="text-lg">
            We approach every booking—and every cancellation—with integrity and
            care. We understand that travel is a personal and often emotional
            investment. Our goal is to provide peace of mind, fairness, and
            professional guidance in all situations.
          </p>
        </section>
      </div>
    </div>
  );
}
