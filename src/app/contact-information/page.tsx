export default function ContactInformation() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>We’re Here to Guide You, Wherever You Go</h1>
        <h5>
          Reach out to the right team for seamless travel support and
          personalized service.
        </h5>
        <blockquote>
          "Travel isn't just about the destination—it's about having the right
          people behind you every step of the way."
        </blockquote>
      </header>

      <div className="gap-8 sm:gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto lg:mx-0 mt-16 max-w-2xl lg:max-w-none text-base/7">
        <div>
          <h3 className="pl-6 border-indigo-600 border-l font-semibold text-gray-900">
            Los Angeles
          </h3>
          <address className="pt-2 pl-6 border-gray-200 border-l text-gray-600 not-italic">
            <p>4556 Brendan Ferry</p>
            <p>Los Angeles, CA 90210</p>
          </address>
        </div>
        <div>
          <h3 className="pl-6 border-indigo-600 border-l font-semibold text-gray-900">
            New York
          </h3>
          <address className="pt-2 pl-6 border-gray-200 border-l text-gray-600 not-italic">
            <p>886 Walter Street</p>
            <p>New York, NY 12345</p>
          </address>
        </div>
        <div>
          <h3 className="pl-6 border-indigo-600 border-l font-semibold text-gray-900">
            Toronto
          </h3>
          <address className="pt-2 pl-6 border-gray-200 border-l text-gray-600 not-italic">
            <p>7363 Cynthia Pass</p>
            <p>Toronto, ON N3Y 4H8</p>
          </address>
        </div>
        <div>
          <h3 className="pl-6 border-indigo-600 border-l font-semibold text-gray-900">
            London
          </h3>
          <address className="pt-2 pl-6 border-gray-200 border-l text-gray-600 not-italic">
            <p>114 Cobble Lane</p>
            <p>London N1 2EF</p>
          </address>
        </div>
      </div>
    </div>
  );
}
