import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { partnerHighlights, teamMembers } from "@/lib/constants/info/general";

const notableRecognitions = [
  {
    label: "National Geographic Legacy Travel Partner",
    years: [2015],
    description:
      "Partnership with National Geographic to promote responsible and educational travel experiences.",
  },
  {
    label: "UN Global Compact Member Organization",
    years: [2017],
    description:
      "Commitment to aligning operations with universal principles on human rights, labor, environment, and anti-corruption.",
  },
  {
    label: "GSTC Preferred Partner – Certified in Sustainable Travel Practices",
    years: [2018],
    description:
      "Recognition for adherence to the Global Sustainable Tourism Council’s standards for sustainable tourism.",
  },
  {
    label: "Global Sustainable Tourism Council Affiliate",
    years: [2019],
    description:
      "Affiliation with GSTC to further sustainable tourism development worldwide.",
  },
  {
    label: "Adventure Travel Trade Association Member",
    years: [2016],
    description:
      "Membership with ATTA to support the growth of sustainable adventure travel.",
  },
  {
    label: "Certified B Corporation",
    years: [2018],
    description:
      "Certified for meeting high standards of social and environmental performance, accountability, and transparency.",
  },
  {
    label: "Green Business Bureau Certified",
    years: [2020],
    description:
      "Certification for implementing eco-friendly business practices and reducing environmental impact.",
  },
  {
    label: "World Travel & Tourism Council Supporter",
    years: [2017],
    description:
      "Supporter of global initiatives for sustainable growth in travel and tourism sectors.",
  },
  {
    label: "Ethical Travel Forum Partner",
    years: [2019],
    description:
      "Partnership focused on promoting responsible and ethical travel across the industry.",
  },
  {
    label: "International Ecotourism Society Member",
    years: [2016],
    description:
      "Member of a leading organization dedicated to promoting ecotourism and conservation worldwide.",
  },
];

const awards = [
  {
    title: 'Condé Nast Traveler "Global Vision Award"',
    years: [2022],
    description:
      "Awarded for visionary leadership in sustainable and responsible tourism on a global scale.",
  },
  {
    title: 'Travel + Leisure "World\'s Best" Luxury Agency',
    years: [2019, 2021, 2023],
    description:
      "Recognized repeatedly as a top luxury travel agency known for exceptional service and unique experiences.",
  },
  {
    title: "World Tourism Awards – Best Sustainable Tour Operator",
    years: [2020, 2022],
    description:
      "Honored for excellence in sustainable tourism operations and environmental stewardship.",
  },
  {
    title: "TripAdvisor Travelers’ Choice Award",
    years: [2021, 2022, 2023],
    description:
      "Voted by travelers as a highly rated and trusted tour operator with outstanding reviews.",
  },
  {
    title: "Luxury Travel Guide Award – Best Ethical Tour Company",
    years: [2021],
    description:
      "Recognized for outstanding commitment to ethical practices and responsible luxury travel experiences.",
  },
  {
    title: "Sustainable Tourism Award – Innovation in Ecotourism",
    years: [2020],
    description:
      "Awarded for pioneering innovative approaches to ecotourism and sustainability in travel.",
  },
  {
    title: "Global Green Travel Award",
    years: [2019, 2021],
    description:
      "Acknowledged for leadership in environmental responsibility and sustainable travel initiatives.",
  },
  {
    title: "World Responsible Tourism Award",
    years: [2018, 2022],
    description:
      "Celebrated for best practices in responsible tourism and positive community impact.",
  },
  {
    title:
      "International Travel & Tourism Award – Excellence in Customer Experience",
    years: [2021],
    description:
      "Award for delivering exceptional customer service and memorable travel experiences.",
  },
  {
    title: "Green Globe Certification Recognition",
    years: [2023],
    description:
      "Recognized for achieving the highest standards in sustainable tourism certification.",
  },
];

export default function CoreTeamAndPartnerships() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <div className="mx-auto py-8">
        <header>
          <h1>Core Team and Partnerships</h1>
          <h5>The people behind the journeys that redefine luxury.</h5>
        </header>

        <section>
          <p>
            At Paragon Trails, our promise of curated, meaningful travel is made
            possible by a deeply experienced, globally connected, and
            values-driven team. Every journey we design is a reflection of
            decades of insight, cultural fluency, and collaborative trust with
            the world's most discerning travel partners.
          </p>
          <p>
            We are not just travel planners. We are storytellers, connectors,
            and stewards of experience—backed by a global network of like-minded
            visionaries.
          </p>
        </section>

        {/* Leadership Team Section */}
        <section>
          <h2>Our Leadership Team</h2>
          <h5>Decades of Expertise. One Vision.</h5>

          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-4 mb-6">
            {teamMembers.map((member, index) => (
              <Card
                key={`${member.name}-${index}`}
                className="flex flex-col justify-between p-0 h-full overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full w-24 h-24 object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-2 font-semibold text-xl">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={"defaultFaded"}>{member.title}</Badge>
                      </div>
                    </div>
                  </div>

                  {member.description && <p>{member.description}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Global Partners Section */}
        <section>
          <h2>Our Global Partners</h2>
          <h5>We go far because we go together.</h5>

          <p className="my-6">
            Paragon Trails works hand-in-hand with a network of international
            partners who share our passion for thoughtful, ethical travel. Our
            partnerships are based on long-term collaboration, trust, and shared
            values—not transactions.
          </p>

          <h3>Key Partnership Categories:</h3>
          <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 mt-4 mb-8">
            {partnerHighlights.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex items-center lg:items-start gap-6 p-4 border border-border rounded-lg"
              >
                <div className="bg-secondary lg:mt-2 p-3 rounded-full w-fit h-fit text-secondary-foreground">
                  <Icon size={25} />
                </div>
                <div>
                  {" "}
                  <h4 className="mb-1 font-medium">{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section>
          <h2>Awards & Recognition</h2>
          <p>
            Our commitment to excellence has been recognized by leading travel
            publications and organizations worldwide. Here are some of our most
            notable accolades:
          </p>
          <p className="mb-6">
            We are proud to be recognized for our dedication to sustainable,
            ethical, and transformative travel experiences. Our awards reflect
            our commitment to excellence, innovation, and the positive impact we
            strive to make in the world of luxury travel.
          </p>

          <h3>Our Prideful Awards</h3>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-12">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="flex flex-col border rounded-lg h-full overflow-hidden"
              >
                <CardContent className="flex flex-col justify-between px-6 h-full">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-4">
                        {award.years.map((year, i) => (
                          <Badge key={i} variant={"outline"}>
                            {year}
                            {i < award.years.length - 1 ? ", " : ""}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <h4 className="mb-3 font-semibold text-lg">
                      {award.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3>Notable Recognitions</h3>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-8">
            {notableRecognitions.map((recognition, index) => (
              <Card
                key={index}
                className="flex flex-col border rounded-lg h-full overflow-hidden"
              >
                <CardContent className="flex flex-col justify-between px-6 h-full">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-4">
                        {recognition.years.map((year, i) => (
                          <Badge key={i} variant={"outline"}>
                            {year}
                            {i < recognition.years.length - 1 ? ", " : ""}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <h4 className="mb-3 font-semibold text-lg">
                      {recognition.label}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    {recognition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-8 p-8 rounded-lg text-center">
          <h2>Join Our Journey</h2>
          <p>
            Whether you are a traveler seeking meaning, a creator of exceptional
            experiences, or a steward of place and culture—our team is here to
            elevate the possibilities of what travel can be.
          </p>
          <p className="mt-6 font-medium text-lg">
            Let's redefine luxury, one partnership at a time.
          </p>
        </section>
      </div>
    </div>
  );
}
