import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import { Button } from "@/components/ui/button";

export default function Accommodations() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}
      <header>
        <h1>Accommodations Policy</h1>
        <h5>Effective Date: May 2025</h5>
        <blockquote> "Luxury redefined, one journey at a time."</blockquote>
      </header>

      {/* Overview */}
      <section>
        <h2 className="mb-4 font-bold text-3xl">Overview</h2>
        <p className="mb-4">
          At Paragon Trails, your comfort, safety, and satisfaction are at the
          core of our service philosophy. Our accommodations span global
          destinations and include high-end hotels, heritage estates, luxury
          eco-resorts, curated homestays, and private residences—each one
          carefully selected to meet our premium quality standards. This
          Accommodations Policy outlines our terms, expectations, and service
          commitments related to all lodging services provided or arranged by
          Paragon Trails.
        </p>
      </section>

      {/* 1. Booking & Confirmation Process */}
      <section>
        <h2>1. Booking & Confirmation Process</h2>

        <div className="mb-6">
          <h3>Instant Confirmation on Select Properties</h3>
          <p className="mb-4">
            For select destinations and partner properties, instant confirmation
            is available. For more exclusive or tailored accommodations,
            confirmation may take 12–24 hours while final arrangements are
            secured.
          </p>
        </div>

        <div className="mb-6">
          <h3>Booking Documentation</h3>
          <p className="mb-4">
            A complete summary of your lodging—including address, photos,
            amenities, terms, check-in procedures, and point-of-contact—is
            provided via email and available in your client portal.
          </p>
        </div>

        <div className="mb-6">
          <h3>Deposits & Payment</h3>
          <p className="mb-4">
            Most accommodations require a deposit or full prepayment. Payment
            schedules vary by property type and destination. All terms are
            disclosed prior to booking confirmation.
          </p>
        </div>

        <div className="mb-6">
          <h3>Booking on Behalf of Others</h3>
          <p className="mb-4">
            If reserving accommodations for someone else, authorization and
            verified guest details must be provided at the time of booking.
          </p>
        </div>

        <ContactDepartmentCard department="Reservations & Booking" />
      </section>

      {/* 2. Check-In & Check-Out Policy */}
      <section>
        <h2>2. Check-In & Check-Out Policy</h2>

        <div className="mb-6">
          <h3>Standard Schedule</h3>
          <ul className="space-y-2 pl-8 list-disc">
            <li>
              <strong>Check-in:</strong> 3:00 PM local time
            </li>
            <li>
              <strong>Check-out:</strong> 11:00 AM local time
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3>Extended Stay Requests</h3>
          <p className="mb-4">
            Requests for early check-in or late check-out should be made at
            least 48 hours prior to arrival. Fees may apply and are determined
            by the individual property.
          </p>
        </div>

        <div className="mb-6">
          <h3>Arrival Assistance</h3>
          <p className="mb-4">
            Transportation from airport/train terminals and baggage handling is
            available for all premium bookings. Personalized welcome services
            and guided check-ins are included for Signature and Platinum Tier
            guests.
          </p>
        </div>
      </section>

      {/* 3. Accommodation Standards */}
      <section>
        <h2>3. Accommodation Standards</h2>

        <div className="mb-6">
          <h3>Luxury-Grade Certification</h3>
          <p className="mb-4">
            Every property in our network is independently vetted and must meet
            at least 25 quality checkpoints, including hygiene, privacy, safety,
            service, accessibility, and environmental impact.
          </p>
        </div>

        <div className="mb-6">
          <h3>Daily Upkeep</h3>
          <p className="mb-4">
            Most properties offer daily housekeeping. For long-stay or remote
            homestays, cleaning frequency may vary. Turn-down service and
            personal laundry services are available at select locations.
          </p>
        </div>

        <div className="mb-6">
          <h3>Amenity Expectations</h3>
          <p className="mb-2">Standard luxury amenities include:</p>
          <ul className="space-y-2 pl-8 list-disc">
            <li>Fresh linens and towels</li>
            <li>Wi-Fi and secured networks</li>
            <li>In-room safes</li>
            <li>Bath products (organic and cruelty-free)</li>
            <li>Complimentary bottled water or minibar</li>
          </ul>
        </div>

        <ContactDepartmentCard department="Accessibility & Special Accommodations" />

        <div className="mb-6">
          <h3>Barrier-Free Travel</h3>
          <p className="mb-4">
            We offer a variety of ADA-compliant accommodations and assistive
            services, including step-free entry, wheelchair-accessible
            bathrooms, grab bars, visual alert systems, and mobility transport
            equipment.
          </p>
        </div>

        <div className="mb-6">
          <h3>Sensory-Sensitive Environments</h3>
          <p className="mb-4">
            Guests may request non-fragranced spaces, quiet floor assignments,
            and light-dimming devices.
          </p>
        </div>

        <div className="mb-6">
          <h3>Service Animals</h3>
          <p className="mb-4">
            Certified service animals are welcomed at all partner properties.
            Documentation may be required to comply with local regulations.
          </p>
        </div>
      </section>

      {/* 4. Guest Capacity, Visitors & Use */}
      <section>
        <h2>4. Guest Capacity, Visitors & Use</h2>

        <div className="mb-6">
          <h3>Maximum Occupancy Limits</h3>
          <p className="mb-4">
            Each unit is licensed for a maximum number of occupants. Exceeding
            capacity without prior notice may result in cancellation without
            refund and/or additional charges.
          </p>
        </div>

        <div className="mb-6">
          <h3>Unregistered Guests</h3>
          <p className="mb-4">
            Overnight stays by unregistered guests are not permitted without
            written approval. For multi-room villas or homes, registration of
            each guest is mandatory prior to check-in.
          </p>
        </div>

        <div className="mb-6">
          <h3>Special Events & Gatherings</h3>
          <p className="mb-4">
            Hosting events, filming, or large gatherings requires prior approval
            and may involve special licensing, security protocols, or liability
            coverage.
          </p>
        </div>
      </section>

      {/* 6. Property Use, Damage & Conduct */}
      <section>
        <h2>5. Property Use, Damage & Conduct</h2>

        <div className="mb-6">
          <h3>Guest Responsibility</h3>
          <p className="mb-4">
            You are responsible for maintaining the property in its original
            condition during your stay. Any damage, loss, or theft may result in
            fees charged to your card on file.
          </p>
        </div>

        <div className="mb-6">
          <h3>Non-Smoking Policy</h3>
          <p className="mb-4">
            All accommodations are 100% smoke-free indoors. Some properties may
            allow outdoor smoking in designated areas.
          </p>
        </div>

        <div className="mb-6">
          <h3>Substance Prohibitions</h3>
          <p className="mb-4">
            Use of illegal substances is strictly prohibited and will result in
            immediate removal from the property without refund.
          </p>
        </div>

        <div className="mb-6">
          <h3>Quiet Hours & Courtesy</h3>
          <p className="mb-4">
            Respect for neighbors, staff, and co-guests is expected. Repeated
            complaints may result in eviction and/or denied future bookings.
          </p>
        </div>

        <div className="mb-6">
          <h3>Cleanliness & Hygiene Standards</h3>
          <p className="mb-4">
            Properties must adhere to internationally recognized cleaning
            protocols including enhanced disinfection of high-touch surfaces,
            air filtration, and room ventilation between stays.
          </p>
        </div>
      </section>

      {/* 7. Homestays & Heritage Stays */}
      <section>
        <h2>6. Homestays & Heritage Stays</h2>

        <div className="mb-6">
          <h3>Curated Homestays</h3>
          <p className="mb-4">
            All private homestay hosts are professionally screened. We
            prioritize safety, hospitality, and cultural immersion for travelers
            choosing these experiences.
          </p>
        </div>

        <div className="mb-6">
          <h3>Shared Living Environments</h3>
          <p className="mb-4">
            In some homestays, guests may share common areas with the host.
            These will be clearly indicated prior to booking.
          </p>
        </div>

        <div className="mb-6">
          <h3>Respect for Culture & Property</h3>
          <p className="mb-4">
            Guests are expected to act with cultural sensitivity and adhere to
            any special house rules, including attire, noise levels, and
            restricted areas.
          </p>
        </div>
        <Button>View Our Homestays Guidelines & Information</Button>
      </section>

      {/* 8. Refunds & Cancellations */}
      <section>
        <h2>7. Refunds & Cancellations</h2>

        <h3>Standard Cancellation Policy</h3>
        <h4>Tiered Based on Lead Time and Services Secured</h4>

        <div className="mb-4 overflow-x-auto">
          <table className="bg-card mt-4 border border-border rounded-xl min-w-full">
            <thead className="bg-card border border-border">
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

        <ContactDepartmentCard department="Billing & Payments" />

        <p className="text-sm italic">
          Note: Some accommodations, charter services, and local experiences may
          carry stricter cancellation terms. These will be disclosed and agreed
          upon prior to booking.
        </p>
        <Button>View Our Cancellation & Refund Policy</Button>
      </section>

      {/* 9. Emergency, Health & Safety */}
      <section>
        <h2>8. Emergency, Health & Safety</h2>

        <div className="mb-6">
          <h3>Crisis Response Protocols</h3>
          <p className="mb-4">
            All partner properties are required to have fire, medical, and
            security procedures in place. Emergency exits and contact info are
            clearly posted at every location.
          </p>
        </div>

        <ContactDepartmentCard department="Emergency Travel Support" />
      </section>
    </div>
  );
}
