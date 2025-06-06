import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Book, UserCheck, HeartHandshake, Users } from "lucide-react"; // Import icons

export default function SustainabilityAndCommunityInvolvement() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Sustainability and Community Involvement</h1>
        <h5>Luxury that honors the world around us.</h5>
      </header>

      <section>
        <p>
          At Paragon Trails, we believe the world is not just a destination—it's
          a responsibility. Our commitment to sustainability and community
          engagement is not a marketing strategy; it's a founding principle.
          Since 1994, we've designed meaningful journeys that enrich the
          traveler and the world they explore.
        </p>
      </section>

      {/* Sustainability Ethos Section */}
      <section>
        <h2>Our Sustainability Ethos</h2>
        <h5>Travel Light. Leave a Lasting Good.</h5>
        <p className="mb-6">
          We embed sustainability into every layer of our service—without
          compromising elegance, comfort, or personalization.
        </p>

        <h3 className="mb-3 font-semibold">Core Pillars:</h3>
        <div className="gap-4 grid md:grid-cols-2 mb-8">
          <div className="bg-card p-4 border border-border rounded-lg">
            <h4 className="font-medium">Eco-Conscious Stays</h4>
            <p>
              All partner accommodations are vetted for environmental impact,
              from solar-powered villas to rainwater-harvesting estates.
            </p>
          </div>
          <div className="bg-card p-4 border border-border rounded-lg">
            <h4 className="font-medium">Low-Impact Travel Routes</h4>
            <p>
              We prioritize rail, electric ground transport, and extended-stay
              models to reduce client emissions.
            </p>
          </div>
          <div className="bg-card p-4 border border-border rounded-lg">
            <h4 className="font-medium">Carbon Offsetting</h4>
            <p>
              100% of flights and long-distance ground travel booked through us
              are carbon offset via Gold Standard™ verified projects.
            </p>
          </div>
          <div className="bg-card p-4 border border-border rounded-lg">
            <h4 className="font-medium">Minimal Waste Philosophy</h4>
            <p>
              Reusable amenities and client gift kits help reduce single-use
              plastics. We avoid itineraries that promote overtourism or
              environmentally harmful excursions.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics Section */}
      <section>
        <h2>Sustainability Metrics (as of Q1 2025)</h2>
        <div className="overflow-x-auto">
          <Table className="bg-card border border-border rounded-2xl min-w-full overflow-auto">
            <TableHeader>
              <TableRow className="bg-card border border-border">
                <TableHead>
                  <h3>Metric</h3>
                </TableHead>
                <TableHead>
                  <h3>2023</h3>
                </TableHead>
                <TableHead>
                  <h3>2024</h3>
                </TableHead>
                <TableHead>
                  <h3>YTD 2025</h3>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>% of Eco-Certified Accommodations Used</TableCell>
                <TableCell>71%</TableCell>
                <TableCell>83%</TableCell>
                <TableCell>89%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Journeys with Full Carbon Offset</TableCell>
                <TableCell>92%</TableCell>
                <TableCell>97%</TableCell>
                <TableCell>100%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Average CO₂ Offset per Client Trip</TableCell>
                <TableCell>1.6 tons</TableCell>
                <TableCell>1.9 tons</TableCell>
                <TableCell>2.1 tons</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Refillable Amenity Kit Adoption</TableCell>
                <TableCell>64%</TableCell>
                <TableCell>81%</TableCell>
                <TableCell>95%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Local Supplier Utilization</TableCell>
                <TableCell>58%</TableCell>
                <TableCell>72%</TableCell>
                <TableCell>78%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Profits Donated to Grassroots NGOs</TableCell>
                <TableCell>2.1%</TableCell>
                <TableCell>2.7%</TableCell>
                <TableCell>3.0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Community-Based Excursions Booked</TableCell>
                <TableCell>410</TableCell>
                <TableCell>560</TableCell>
                <TableCell>320 (YTD)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="mt-6 font-medium text-center">
          Next Milestone: Net-Zero Operations Targeted by 2028
        </p>
      </section>

      {/* Community Engagement Section */}
      <section>
        <h2>Global Community Engagement</h2>
        <h3>Partnership, Not Patronage.</h3>
        <p className="mb-6">
          We maintain direct relationships with community leaders and nonprofits
          to ensure all cultural, humanitarian, and educational programs benefit
          locals first—without dilution or performative tourism.
        </p>

        <h3 className="mb-3 font-semibold">Highlights:</h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
          <div className="flex flex-col items-center bg-background p-6 rounded-lg text-center">
            <div className="bg-muted mb-4 p-4 rounded-full">
              <Book size={24} />
            </div>
            <h4 className="mb-2 font-medium">Education Funding</h4>
            <p className="text-muted-foreground text-sm">
              Over $280,000 donated to fund scholarships and school
              infrastructure in Nepal, Kenya, and Peru since 2015.
            </p>
          </div>

          <div className="flex flex-col items-center bg-background p-6 rounded-lg text-center">
            <div className="bg-muted mb-4 p-4 rounded-full">
              <UserCheck size={24} />
            </div>
            <h4 className="mb-2 font-medium">
              Artisan & Cultural Preservation
            </h4>
            <p className="text-muted-foreground text-sm">
              70+ local artisan workshops included in active itineraries,
              directly supporting generational skills and fair trade.
            </p>
          </div>

          <div className="flex flex-col items-center bg-background p-6 rounded-lg text-center">
            <div className="bg-muted mb-4 p-4 rounded-full">
              <HeartHandshake size={24} />
            </div>
            <h4 className="mb-2 font-medium">Post-Crisis Support</h4>
            <p className="text-muted-foreground text-sm">
              Rapid-response funds allocated to local recovery efforts after
              events in Morocco (2023), Maui (2023), and southern Brazil (2024).
            </p>
          </div>

          <div className="flex flex-col items-center bg-background p-6 rounded-lg text-center">
            <div className="bg-muted mb-4 p-4 rounded-full">
              <Users size={24} />
            </div>
            <h4 className="mb-2 font-medium">Women's Empowerment Focus</h4>
            <p className="text-muted-foreground text-sm">
              42% of all on-the-ground guides and experience leads in Africa and
              Southeast Asia are women—a direct result of targeted hiring
              incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="mb-6 font-semibold text-2xl text-center">
          Client Testimonials
        </h2>
        <div className="space-y-8">
          <blockquote className="py-2 pl-4 border-border border-l-4 italic">
            <p className="mb-2">
              "We were deeply moved by how seamlessly Paragon Trails built
              environmental integrity into every element of our honeymoon. The
              ecolodge in Patagonia, the electric transfer through Torres del
              Paine, even the handcrafted welcome basket—everything was both
              stunning and sustainable."
            </p>
            <footer className="text-right font-medium">
              — Derek & Hannah Lin, Boston, MA
            </footer>
          </blockquote>

          <blockquote className="py-2 pl-4 border-border border-l-4 italic">
            <p className="mb-2">
              "Paragon Trails made us feel like the world was our home, not just
              our playground. The Maasai-led cultural immersion was respectful
              and unforgettable. Knowing part of our trip helped fund education
              for girls in the area gave the experience even more depth."
            </p>
            <footer className="text-right font-medium">
              — Sofia Abadi, Los Angeles, CA
            </footer>
          </blockquote>

          <blockquote className="py-2 pl-4 border-border border-l-4 italic">
            <p className="mb-2">
              "We've traveled extensively, but Paragon Trails gave us the rare
              combination of luxury and purpose. From rainforest conservation
              programs in Costa Rica to supporting a local ceramicist's co-op in
              Kyoto, it never felt performative—just real."
            </p>
            <footer className="text-right font-medium">
              — James Patel, London, UK
            </footer>
          </blockquote>

          <blockquote className="py-2 pl-4 border-border border-l-4 italic">
            <p className="mb-2">
              "As someone with a climate-conscious mindset, I usually travel
              reluctantly. Paragon Trails made it guilt-free. Their carbon
              accountability was transparent, and I left feeling restored rather
              than conflicted."
            </p>
            <footer className="text-right font-medium">
              — Maya Chen, Seattle, WA
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mb-8 text-center">
        <h2>Travel With Purpose</h2>
        <p>
          Our clients aren't just travelers. They are stewards. They understand
          that every step they take can either leave a footprint—or plant a
          seed.
        </p>
        <p>
          Paragon Trails exists to help you choose the latter. We believe that
          the most luxurious journeys are the ones that leave something good
          behind.
        </p>
        <p className="font-medium text-lg">
          Join us in moving the world forward—one journey at a time.
        </p>
      </section>
    </div>
  );
}
