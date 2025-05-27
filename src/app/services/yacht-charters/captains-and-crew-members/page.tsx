import { Badge } from "@/components/ui/badge";
import { yachtStaff } from "@/lib/constants/services/transportation/staff/yachtStaff";

export default function CaptainsAndCrewMembersPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Command & Concierge at Sea</h1>
        <h5>
          Meet the experienced professionals who ensure your voyage is seamless,
          safe, and exceptional.
        </h5>
        <blockquote>
          "Our crew is dedicated to delivering impeccable service and expert
          navigation, making every journey aboard your private yacht
          unforgettable." — Samantha R., Yacht Charter Specialist
        </blockquote>
        <p>
          Whether you're looking for a skilled captain to navigate your yacht or
          a professional crew to enhance your sailing experience, we have a
          variety of options to suit your needs. Our crew members are carefully
          selected for their expertise, professionalism, and passion for the
          sea. Browse through our crew profiles to find the perfect match for
          your yacht charter, and let us help you create an unforgettable
          sailing adventure.
        </p>
      </header>

      {/* Staff Categories */}
      {yachtStaff.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="mb-6 pb-2 border-gray-700 border-b">
            {category.category}
          </h2>

          {/* Staff Grid */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {category.profiles.map((profile, profileIndex) => (
              <div
                key={profileIndex}
                className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Profile Header */}
                <div className="relative py-3 border-tertiary border-b-2">
                  <div className="px-6">
                    <Badge className="right-6 absolute" variant={"secondary"}>
                      {category.category.slice(0, -1)}
                    </Badge>
                    <h3 className="mt-4">{profile.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  {/* Experience */}
                  <strong className="mb-3 text-fancy text-sm">
                    {profile.experienceYears} Years Experience
                  </strong>

                  {/* Languages */}
                  <div className="mb-4">
                    <strong>Languages:</strong>
                    <p className="text-sm">{profile.languages.join(", ")}</p>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <strong>Certifications</strong>
                    </div>
                    <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                      {profile.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties or Responsibilities */}
                  {profile.specialties && (
                    <div className="mb-4">
                      <strong>Specialties</strong>
                      <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                        {profile.specialties.map((specialty, index) => (
                          <li key={index}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {profile.responsibilities && (
                    <div className="mb-4">
                      <strong>Responsibilities</strong>
                      <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                        {profile.responsibilities.map(
                          (responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Special Training (if available) */}
                  {profile.specialTraining && (
                    <div className="mb-4">
                      <strong>Special Training</strong>
                      <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                        {profile.specialTraining.map((training, index) => (
                          <li key={index}>{training}</li>
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
