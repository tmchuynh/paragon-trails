export default function TravelSafetyInformation() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mx-auto py-8 max-w-4xl">
        <h1 className="mb-4 font-bold text-3xl text-center">
          Travel Safety Information
        </h1>

        <div className="mb-8">
          <h2 className="mb-2 font-semibold text-2xl text-center">
            Your safety is our highest priority—so you can travel freely,
            fearlessly, and fully immersed in the experience.
          </h2>
          <p className="mb-4 text-lg">
            At Paragon Trails, safety is never an afterthought. It's built into
            the architecture of every journey we design. From your initial
            consultation to the final moments of your return, we work behind the
            scenes to ensure that every aspect of your trip is supported by
            world-class security standards, global partnerships, and on-call
            assistance. Our philosophy is simple: the freedom to explore begins
            with the confidence of knowing you are protected.
          </p>
          <p className="mb-4 text-lg">
            Whether you're traveling to a bustling metropolis or an isolated
            island sanctuary, this page outlines essential safety guidance to
            keep you informed, prepared, and protected.
          </p>
        </div>

        {/* Before You Travel Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            1. Before You Travel: Preparation Is Protection
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-2 font-medium text-xl">
                Passport, Visas & Entry Requirements
              </h3>
              <p className="mb-2">
                Ensure your passport is valid for at least six months beyond
                your intended return. Some countries may deny entry otherwise.
                We also recommend:
              </p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>
                  Double-checking visa requirements with your destination's
                  embassy.
                </li>
                <li>
                  Carrying physical and digital copies of your passport and
                  visa.
                </li>
                <li>
                  Keeping a copy of your full travel itinerary with someone back
                  home.
                </li>
              </ul>
              <p className="mt-2 italic">
                <strong>Paragon Pro Tip:</strong> We provide visa support and
                country-specific guidance upon booking. Let our team handle the
                paperwork so you can focus on the experience.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-xl">
                Health & Immunization Guidelines
              </h3>
              <p className="mb-2">
                Traveling internationally may expose you to unfamiliar
                environments. Prepare in advance by:
              </p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>
                  Consulting your healthcare provider 4–6 weeks prior to
                  departure.
                </li>
                <li>
                  Verifying required or recommended vaccinations (e.g., yellow
                  fever, typhoid, hepatitis A/B).
                </li>
                <li>
                  Packing prescription medications with labels and
                  documentation.
                </li>
              </ul>
              <p className="mt-2 italic">
                <strong>Additional Note:</strong> Let us know of any allergies,
                medical conditions, or accessibility needs—so we can tailor your
                experience discreetly and safely.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-xl">
                Comprehensive Travel Insurance
              </h3>
              <p className="mb-2">
                We strongly recommend insurance that includes:
              </p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Emergency medical evacuation</li>
                <li>Repatriation of remains</li>
                <li>Trip cancellation or interruption</li>
                <li>Lost luggage</li>
                <li>COVID-19-related cancellations or quarantines</li>
              </ul>
              <p className="mt-2">
                Our concierge team can connect you with leading providers that
                cater to luxury and global travel clientele.
              </p>
            </div>
          </div>
        </section>

        {/* In Transit Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            2. In Transit: Tips for Secure Movement
          </h2>

          <div className="gap-6 grid md:grid-cols-2">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="mb-3 font-medium text-xl">Airports & Flights</h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Arrive early for international departures.</li>
                <li>
                  Use TSA PreCheck or Global Entry for expedited processing.
                </li>
                <li>Never leave luggage unattended—even in private lounges.</li>
                <li>
                  Keep identification, medication, and valuables in your
                  carry-on.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="mb-3 font-medium text-xl">
                Transportation Abroad
              </h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>
                  Use pre-arranged private transfers or licensed taxis through
                  Paragon Trails.
                </li>
                <li>
                  Avoid public transport late at night or in high-risk zones
                  unless guided.
                </li>
                <li>
                  Ensure vehicles have seatbelts and are in working condition
                  before boarding.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* On the Ground Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            3. On the Ground: Staying Safe at Your Destination
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-2 font-medium text-xl">
                Hotel & Villa Security
              </h3>
              <p className="mb-2">
                All accommodations booked through Paragon Trails are:
              </p>
              <ul className="space-y-1 mb-3 pl-5 list-disc">
                <li>Vetted for safety, quality, and local compliance</li>
                <li>Located in secure, traveler-friendly areas</li>
                <li>Staffed with 24/7 reception and security</li>
                <li>
                  Equipped with in-room safes, emergency exits, and multilingual
                  assistance
                </li>
              </ul>

              <p className="mb-2">When checking in:</p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Note your room's fire escape routes.</li>
                <li>Store important items in the safe.</li>
                <li>
                  Use door latches and avoid admitting strangers without
                  verifying with the front desk.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-xl">Local Awareness</h3>
              <p className="mb-2">
                Cultural sensitivity often plays a role in safety. Remain aware
                of:
              </p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Local customs, dress codes, and religious observances</li>
                <li>Laws around alcohol, public conduct, and photography</li>
                <li>
                  Social norms—what may be polite in one culture could be
                  offensive in another
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-xl">Food & Water Safety</h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Drink bottled water unless told otherwise.</li>
                <li>
                  Eat only at reputable restaurants or those recommended by your
                  travel advisor.
                </li>
                <li>
                  Avoid undercooked meat, unwashed produce, or ice made from tap
                  water.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology & Digital Security Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            4. Technology & Digital Security
          </h2>

          <div className="gap-6 grid md:grid-cols-2">
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="mb-3 font-medium text-xl">Staying Connected</h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>
                  Set up international roaming or use an eSIM with reliable
                  coverage.
                </li>
                <li>Activate location sharing with a trusted contact.</li>
                <li>
                  Download offline maps, translation tools, and embassy info
                  before departure.
                </li>
              </ul>
            </div>

            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="mb-3 font-medium text-xl">
                Cybersecurity Best Practices
              </h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>
                  Avoid using public Wi-Fi for banking or email without a VPN.
                </li>
                <li>Lock your devices with strong passwords or biometrics.</li>
                <li>Enable remote wiping for lost or stolen devices.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Services Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            5. Emergency Services & On-Call Support
          </h2>

          <p className="mb-4">
            In the rare event that something goes wrong, you'll never be alone.
            Paragon Trails provides:
          </p>

          <ul className="space-y-1 mb-6 pl-5 list-disc">
            <li>24/7 emergency contact with a senior travel coordinator</li>
            <li>On-the-ground support through vetted local partners</li>
            <li>Real-time itinerary updates and rebooking assistance</li>
            <li>
              Direct communication with embassies, airlines, and medical
              facilities
            </li>
          </ul>

          <p className="mb-4">
            Each client receives a private emergency hotline and priority access
            to crisis support.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="mb-3 font-medium text-xl">
              Emergency Situations We Assist With:
            </h3>
            <ul className="space-y-1 pl-5 list-disc">
              <li>Lost or stolen passport</li>
              <li>Medical incidents and hospital navigation</li>
              <li>Natural disasters or civil unrest</li>
              <li>Sudden itinerary changes or evacuations</li>
              <li>Language translation in critical situations</li>
            </ul>
          </div>
        </section>

        {/* Destination Risk Monitoring Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            6. Destination Risk Monitoring
          </h2>

          <p className="mb-4">
            Paragon Trails uses an integrated risk-assessment platform to
            monitor:
          </p>

          <ul className="space-y-1 mb-6 pl-5 list-disc">
            <li>Local crime trends and political stability</li>
            <li>Natural disaster zones and climate alerts</li>
            <li>Health-related advisories (e.g., infectious diseases)</li>
            <li>Embassy travel warnings and airline security notifications</li>
          </ul>

          <p>
            Before your trip begins, you'll receive a destination-specific
            briefing report tailored to your itinerary.
          </p>
        </section>

        {/* General Travel Tips Section */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            7. General Travel Tips from Our Experts
          </h2>

          <ul className="space-y-2 pl-5 list-disc">
            <li>
              Photograph important documents and store copies securely in the
              cloud.
            </li>
            <li>
              Carry a local phrasebook or translation app, even for short trips.
            </li>
            <li>
              Use RFID-blocking wallets to avoid digital pickpocketing in
              tourist areas.
            </li>
            <li>
              Stay alert in crowds, and avoid distractions like loud phone calls
              or large backpacks that make you a target.
            </li>
            <li>
              Register your trip with your government's traveler program (e.g.,
              STEP for U.S. citizens).
            </li>
            <li>
              Avoid excessive jewelry or designer logos when traveling in
              economically vulnerable regions.
            </li>
            <li>
              Limit alcohol intake in unfamiliar environments—awareness is your
              strongest protection.
            </li>
            <li>
              Keep a printed contact card with local emergency numbers and your
              hotel address in your pocket or wallet at all times.
            </li>
          </ul>
        </section>

        {/* Final Words Section */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">
            Final Words from Our Safety Team
          </h2>

          <p className="mb-4">
            Luxury should never compromise safety—and with Paragon Trails, it
            never does. Our behind-the-scenes infrastructure is designed to keep
            your experience seamless, no matter the complexity of your
            destination. From exclusive access to secure zones to curated ground
            logistics, every journey is underpinned by our commitment to
            protection, discretion, and constant support.
          </p>

          <p>
            If you have specific safety concerns or require a custom safety
            briefing, please contact us prior to departure.
          </p>
        </section>

        {/* Emergency Contact Section */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h3 className="mb-3 font-semibold text-xl">
            Emergency Travel Assistance:
          </h3>
          <p>
            <span className="font-medium">Phone:</span> +1 (310) 477–8820 (24/7
            Support)
          </p>
          <p>
            <span className="font-medium">Email:</span> safety@paragontrails.com
          </p>
          <p>
            <span className="font-medium">Office Hours:</span> Mon–Fri, 9:00 AM
            – 5:00 PM PT
          </p>
        </section>
      </div>
    </div>
  );
}
