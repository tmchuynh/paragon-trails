import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { tourGuides } from "@/lib/constants/staff/tourGuides";
import {
  generateRandomString,
  groupAndSortByProperties,
} from "@/lib/utils/sort";
import Image from "next/image";

export default function TourGuides() {
  const sortedTourGuides = groupAndSortByProperties(tourGuides, "city", "name");

  // Group tour guides by region/country for better organization
  const guidesByRegion = sortedTourGuides.reduce((acc, guide) => {
    const region = guide.region || guide.city || "Global";
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(guide);
    return acc;
  }, {} as Record<string, typeof tourGuides>);

  // Sort regions alphabetically
  const sortedRegions = Object.keys(guidesByRegion).sort();

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>The Ones Who Lead The Way</h1>
        <h5>
          Passionate Locals. Expert Storytellers. Your Gateway to Authentic
          Experiences.
        </h5>
        <blockquote>
          "Our guides don't just show you places; they open doors to experiences
          that would otherwise remain hidden."
          <cite>— Alexandra Chen, Head of Guide Relations</cite>
        </blockquote>
      </header>

      <section className="mb-16">
        <p className="mx-auto mb-12 max-w-3xl text-center">
          Paragon Trails guides are carefully selected for their deep local
          knowledge, storytelling abilities, and passion for sharing their
          culture. Many are published authors, renowned historians, or respected
          cultural figures in their communities. All are committed to creating
          meaningful connections between travelers and destinations.
        </p>

        <Accordion type="single" collapsible>
          {sortedRegions.map((region, index) => (
            <AccordionItem
              value={`${region}-${index}`}
              key={`${region}-${index}-${generateRandomString(5)}`}
              className="bg-card mb-16 px-6 border border-border rounded-2xl"
            >
              <AccordionTrigger>
                <h2 className="mb-0">{region}</h2>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-7 border-t-2 border-tertiary">
                  {guidesByRegion[region].map((guide) => (
                    <li
                      key={`${guide.name}-${generateRandomString(5)}`}
                      className="bg-card border border-border rounded-lg transition-shadow overflow-hidden"
                    >
                      <div className="relative h-64">
                        <Image
                          alt={`Portrait of ${guide.name}`}
                          src={
                            guide.image ||
                            "/images/people/default-tour-guide.jpg"
                          }
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="mb-1 font-semibold text-xl">
                          {guide.name}
                        </h3>
                        <p className="mb-3 text-tertiary">{guide.city}</p>

                        {guide.specialties && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {guide.specialties.map((specialty, index) => (
                              <Badge
                                size={"lg"}
                                key={index}
                                variant="secondary"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <p className="mb-3">"{guide.quote}"</p>

                        {guide.languages && (
                          <p>
                            <strong>Languages:</strong>{" "}
                            {guide.languages.join(", ")}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-16">
        <h2>Our Guide Selection Process</h2>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-8">
          <div className="bg-card p-6 border border-border rounded-lg">
            <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-12 h-12 text-primary">
              1
            </div>
            <h3 className="mb-3">Local Expertise</h3>
            <p>
              We select guides who have deep, often academic knowledge of their
              regions, with a minimum of five years living experience in their
              guide location.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-lg">
            <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-12 h-12 text-primary">
              2
            </div>
            <h3 className="mb-3">Rigorous Training</h3>
            <p>
              Our guides undergo extensive training in cultural sensitivity,
              sustainability practices, and emergency protocols beyond standard
              certifications.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-lg">
            <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-12 h-12 text-primary">
              3
            </div>
            <h3 className="mb-3">Exceptional Storytelling</h3>
            <p>
              The ability to weave history, culture, and personal insights into
              compelling narratives is essential for all Paragon Trails guides.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Interested in Joining Our Guide Network?</h2>
        <p className="mb-6">
          We're always looking for exceptional local experts to join our global
          network of guides. If you have deep knowledge of your region, a
          passion for storytelling, and a commitment to creating authentic
          travel experiences, we'd love to hear from you.
        </p>

        <p>
          Contact our Guide Relations team at{" "}
          <a
            href="mailto:guides@paragontrails.com"
            className="text-primary hover:underline"
          >
            guides@paragontrails.com
          </a>
        </p>
      </section>
    </div>
  );
}
