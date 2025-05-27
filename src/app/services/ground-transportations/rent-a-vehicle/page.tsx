export default function RentAVehicle() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Rent a Vehicle</h1>
        <h5>
          Experience the freedom of exploration with our premium vehicle
          rentals.
        </h5>
        <p>
          At Paragon Trails, we offer a curated selection of luxury vehicles for
          rent, ensuring you travel in style and comfort. Whether you're
          exploring scenic routes or navigating urban landscapes, our vehicles
          are designed to enhance your journey.
        </p>
      </header>

      {/* Vehicle Rental Options Section */}
      <section>
        <h2 className="mb-2 font-semibold text-2xl">Vehicle Rental Options</h2>
        <p>Choose from our exclusive range of vehicles:</p>
        <ul className="pl-6 list-disc">
          <li>Luxury SUVs</li>
          <li>Premium Sedans</li>
          <li>Convertible Sports Cars</li>
          <li>Electric Vehicles</li>
        </ul>
      </section>

      {/* Booking Information Section */}
      <section className="mt-8">
        <h2 className="mb-2 font-semibold text-2xl">Booking Information</h2>
        <p>
          To book a vehicle, please contact our customer service team at least
          48 hours in advance. We require a valid driver's license and a credit
          card for security purposes.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="mt-8">
        <h2 className="mb-2 font-semibold text-2xl">Contact Us</h2>
        <p>
          For more information or to make a reservation, please email us at{" "}
        </p>
      </section>
    </div>
  );
}
