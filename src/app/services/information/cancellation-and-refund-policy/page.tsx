import { Button } from "@/components/ui/button";

export default function CancellationAndRefundPolicy() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Cancellation and Refund Policy</h1>
        <h5>
          Clarity, transparency, and integrity—before your journey even begins.
        </h5>
        <blockquote>
          “Paragon Trails handled my cancellation with such professionalism and
          care. I felt supported every step of the way.” – Emily R., Luxury
          Traveler
        </blockquote>
        <p>
          At Paragon Trails, we understand that plans can change. While our
          journeys are highly personalized and often require extensive advance
          coordination, we have structured our cancellation and refund policies
          to balance flexibility with the realities of luxury travel design and
          third-party commitments. This policy outlines what you can expect in
          the event of a cancellation, modification, or refund request.
        </p>
      </header>

      {/* Standard Cancellation Policy Section */}
      <section>
        <h2 className="mb-2 font-semibold text-2xl">
          Standard Cancellation Policy
        </h2>
        <h4>Tiered Based on Lead Time and Services Secured</h4>

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
          Note: Some accommodations, charter services, and local experiences may
          carry stricter cancellation terms. These will be disclosed and agreed
          upon prior to booking.
        </p>
      </section>

      {/* Refund Eligibility Section */}
      <section>
        <h2>Refund Eligibility</h2>
        <p>
          We strive to process eligible refunds efficiently and transparently.
        </p>

        <div className="gap-8 grid md:grid-cols-2">
          <div>
            <h3>Eligible for Refund</h3>
            <ul className="space-y-2 pl-5 list-disc">
              <li>
                Amounts paid beyond the non-refundable percentage, according to
                the timeline above
              </li>
              <li>
                Services cancelled by Paragon Trails or our partners due to
                force majeure (e.g., natural disaster, political instability)
              </li>
            </ul>
          </div>

          <div>
            <h3>Not Eligible for Refund</h3>
            <p className="mb-4">
              For high-demand periods, properties may enforce stricter or
              non-refundable policies. These are clearly stated prior to
              booking.
            </p>
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

          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-2xl">No-Shows</h3>
            <p className="mb-4">
              Failure to check in without notice is considered a no-show and is
              not eligible for refund.
            </p>
          </div>
        </div>
      </section>

      {/* Modifications & Rebooking Section */}
      <section>
        <h2>Modifications & Rebooking</h2>
        <p>We are happy to assist with rescheduling whenever possible.</p>

        <ul className="space-y-3">
          <li className="flex items-start">
            <strong className="min-w-[200px]">Date Changes:</strong>
            <span>
              Permitted up to 30 days before departure, subject to availability
              and third-party fees
            </span>
          </li>
          <li className="flex items-start">
            <strong className="min-w-[200px]">Service Substitutions:</strong>
            <span>
              We will offer equal or better alternatives if any component
              becomes unavailable
            </span>
          </li>
          <li className="flex items-start">
            <strong className="min-w-[200px]">Credits:</strong>
            <span>
              In select cases, your payment may be applied as a travel credit
              valid for 12 months
            </span>
          </li>
        </ul>
      </section>

      {/* Force Majeure Section */}
      <section>
        <h2>Force Majeure & Exceptional Circumstances</h2>
        <p>
          In the case of events beyond your control—including natural disasters,
          pandemics, or travel bans—Paragon Trails will work on your behalf to:
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
      <section>
        <h2>Travel Insurance Recommendation</h2>
        <p>
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
          Paragon Trails does not assume liability for costs not covered by your
          insurance provider.
        </p>

        <Button>Read More About Travel Insurance</Button>
      </section>

      {/* Contact & Claims Section */}
      <section>
        <h2>Contact & Claims</h2>
        <p>
          To initiate a cancellation, refund request, or policy inquiry, please
          contact your dedicated travel designer or reach out via:
        </p>

        <div>
          <p className="mb-1">
            <span>Email:</span> concierge@paragontrails.com
          </p>
          <p className="mb-1">
            <span>Phone:</span> +1 (310) 477–8820
          </p>
          <p>
            <span>Hours:</span> Monday–Friday, 9:00 AM to 5:00 PM PT
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section>
        <h2>Our Commitment</h2>
        <p>
          We approach every booking—and every cancellation—with integrity and
          care. We understand that travel is a personal and often emotional
          investment. Our goal is to provide peace of mind, fairness, and
          professional guidance in all situations.
        </p>
      </section>
    </div>
  );
}
