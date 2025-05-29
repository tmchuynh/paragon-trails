"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { contactDepartments } from "@/lib/constants/info/contact";
import { sortByProperty } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function ContactInformation() {
  const router = useRouter();
  const sortedDepartments = sortByProperty(contactDepartments, "department");
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

      <h2>Department Contacts</h2>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedDepartments.map((dept, index) => (
          <div key={index}>
            <h3>{dept.department}</h3>
            <h5 className="my-2 pt-2 border-t border-tertiary">{dept.short}</h5>
            <div>
              <p className="flex items-center gap-2">
                <Label>
                  <strong>Phone:</strong>
                </Label>{" "}
                {dept.phone}
              </p>
              <p className="flex items-center gap-2">
                <Label>
                  <strong>Email:</strong>
                </Label>{" "}
                <Button
                  className="my-0 p-0"
                  size={"sm"}
                  onClick={() => router.push(`mailto:${dept.email}`)}
                  variant="link"
                >
                  {dept.email}
                </Button>
              </p>
              <p className="flex items-center gap-2">
                <Label>
                  <strong>Hours:</strong>
                </Label>{" "}
                {dept.hours}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
