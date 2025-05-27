import { contactDepartments } from "@/lib/constants/info/contact";

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

      <h2 className="mt-24 mb-6 font-bold text-2xl text-gray-900">
        Department Contacts
      </h2>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contactDepartments.map((dept, index) => (
          <div
            key={index}
            className="shadow-sm hover:shadow-md p-6 border border-gray-200 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-indigo-600 text-lg">
              {dept.department}
            </h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="font-medium">Phone:</span> {dept.phone}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${dept.email}`}
                  className="text-indigo-600 hover:underline"
                >
                  {dept.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Hours:</span> {dept.hours}
              </p>
              <p className="mt-2 pt-2 border-gray-100 border-t text-gray-500 text-sm">
                {dept.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
