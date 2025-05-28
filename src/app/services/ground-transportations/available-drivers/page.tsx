import { Badge } from "@/components/ui/badge";
import { driverQualificationMatrix } from "@/lib/constants/services/transportation/staff/drivers";

export default function AvailableDriversPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Expertise on Every Mile</h1>
        <h5>
          Skilled chauffeurs ensuring safe, comfortable, and timely journeys.
        </h5>
        <blockquote>
          "Having a professional driver made all the difference—effortless
          travel with exceptional service from start to finish." – Emily R.,
          Frequent Traveler
        </blockquote>
        <p>
          Whether you need a swift city transfer or a dedicated chauffeur for a
          long-distance journey, our network of professional drivers is at your
          service. At Paragon Trails, we understand that the right driver can
          transform your travel experience—from a routine ride into a journey
          marked by comfort, reliability, and discretion. Our drivers are
          carefully vetted, highly trained, and deeply familiar with regional
          routes and local nuances. Each brings years of experience in executive
          transport, with an unwavering commitment to safety, punctuality, and
          guest care. Whether you prefer conversational engagement or a quiet
          ride, our drivers adapt to your preferences to ensure a seamless and
          personalized experience.
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
                <div className="relative py-3 border-tertiary border-b-2">
                  <div className="px-6">
                    <Badge className="right-6 absolute" variant={"secondary"}>
                      {profile.availability}
                    </Badge>
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
                      {profile.certifications?.map((cert, index) => (
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
