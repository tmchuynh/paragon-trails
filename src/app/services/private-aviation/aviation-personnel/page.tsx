import { Badge } from "@/components/ui/badge";
import { aviationPersonnel } from "@/lib/constants/services/transportation/staff/aviationPersonnel";

export default function AviationPersonnel() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Private Aviation Personnel</h1>
        <h5>Our Flight Team who Ensures an Unforgettable Experience</h5>
        <p>
          Our team of aviation professionals is dedicated to providing
          exceptional service and ensuring the safety and comfort of our
          passengers. From pilots to cabin crew, each member is highly trained
          and experienced in private aviation. We pride ourselves on our
          attention to detail and commitment to excellence in every aspect of
          your flight experience.
        </p>
      </header>

      {aviationPersonnel.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="mb-6 pb-2 border-gray-700 border-b">
            {category.category}
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {category.profiles.map((profile, profileIndex) => (
              <div
                key={profileIndex}
                className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="py-3 border-tertiary border-b-2">
                  <div className="px-6">
                    <Badge variant={"secondary"}>{profile.availability}</Badge>
                    <h3 className="mt-4">{profile.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  {/* Availability Tag */}
                  <strong className="mb-3 text-fancy text-sm">
                    {profile.experienceYears} Years Experience
                  </strong>
                  {/* Certifications */}
                  {profile.certifications && (
                    <div className="mb-3">
                      <strong>Certifications:</strong>
                      <ul className="ml-2 text-sm list-disc list-inside">
                        {profile.certifications.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Languages */}
                  {profile.languages && (
                    <div className="mb-3">
                      <strong>Languages:</strong>
                      <p className="ml-2 text-sm">
                        {profile.languages.join(", ")}
                      </p>
                    </div>
                  )}
                  {/* Aircraft Types */}
                  {profile.qualifiedAircraft && (
                    <div className="mb-3">
                      <strong>Qualified Aircraft:</strong>
                      <p className="ml-2 text-sm">
                        {profile.qualifiedAircraft.join(", ")}
                      </p>
                    </div>
                  )}
                  {/* Special Training */}
                  {profile.specialTraining && (
                    <div className="mb-3">
                      <strong>Special Training:</strong>
                      <ul className="ml-2 text-sm list-disc list-inside">
                        {profile.specialTraining.map((training, i) => (
                          <li key={i}>{training}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Specialties (for chefs) */}
                  {profile.specialties && (
                    <div className="mb-3">
                      <p>Specialties:</p>
                      <ul className="ml-2 text-sm list-disc list-inside">
                        {profile.specialties.map((specialty, i) => (
                          <li key={i}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Responsibilities */}
                  {profile.responsibilities && (
                    <div className="mb-3">
                      <p>Responsibilities:</p>
                      <ul className="ml-2 text-sm list-disc list-inside">
                        {profile.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
