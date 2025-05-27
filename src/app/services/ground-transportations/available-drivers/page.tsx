import { Badge } from "@/components/ui/badge";
import { driverQualificationMatrix } from "@/lib/constants/services/transportation/staff/drivers";

export default function AvailableDriversPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1> Available Drivers</h1>
        <h5>
          Explore our network of available drivers and find the perfect match
          for your transportation needs.
        </h5>
        <p>
          Whether you're looking for a quick ride or a long-distance journey, we
          have a variety of drivers ready to assist you. Our drivers are
          experienced, professional, and committed to providing a safe and
          comfortable travel experience. Browse through our driver profiles to
          find the right fit for your requirements. Each profile includes
          detailed information about their qualifications, experience, and
          availability, making it easy for you to make an informed choice.
        </p>
      </header>

      {/* Driver Categories */}
      {driverQualificationMatrix.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="mb-6 pb-2 border-gray-700 border-b">
            {category.category}
          </h2>

          {/* Driver Grid */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {category.profiles.map((profile, profileIndex) => (
              <div
                key={profileIndex}
                className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Driver Profile Header */}
                <div className="py-3 border-tertiary border-b-2">
                  <div className="px-6">
                    <Badge variant={"secondary"}>{profile.availability}</Badge>
                    <h3 className="mt-4">{profile.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  {/* Experience */}
                  <strong className="mb-3 text-fancy text-sm">
                    {profile.experienceYears} Years Experience
                  </strong>

                  {/* Certifications */}
                  <div className="mb-4">
                    <strong>Certifications</strong>
                    <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                      {profile.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <strong>Languages:</strong>
                    <p className="text-sm">{profile.languages.join(", ")}</p>
                  </div>

                  {/* Special Training */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <strong>Special Training:</strong>
                    </div>
                    <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                      {profile.specialTraining?.map((training, index) => (
                        <li key={index}>{training}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Specialties (if available) */}
                  {profile.specialties && (
                    <div className="mb-4">
                      <strong>Specialties:</strong>
                      <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                        {profile.specialties.map((specialty, index) => (
                          <li key={index}>{specialty}</li>
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
