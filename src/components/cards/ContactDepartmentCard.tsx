"use client";

import { contactDepartments } from "@/lib/constants/info/contact";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function ContactDepartmentCard({
  department,
}: {
  department: string;
}) {
  const router = useRouter();
  const contact = contactDepartments.find(
    (dept) => dept.department.toLowerCase() === department.toLowerCase()
  );

  if (!contact) {
    return (
      <div className="p-6 border border-red-300 rounded-lg text-red-700">
        <p className="font-semibold">Contact information for {department}:</p>
        <p>{department}</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2>{contact.department}</h2>
      <p className="mt-2">{contact.description}</p>

      <div className="gap-4 space-y-1 grid lg:grid-cols-3 mt-4">
        <div>
          <Label>
            <strong>Phone:</strong>
          </Label>
          <Button
            variant={"link"}
            onClick={() => router.push(`tel:${contact.phone}`)}
          >
            {contact.phone}
          </Button>
        </div>
        <div>
          <Label>
            <strong>Email:</strong>
          </Label>
          <Button
            variant={"link"}
            onClick={() => router.push(`mailto:${contact.email}`)}
          >
            {contact.email}
          </Button>
        </div>
        <div>
          <Label>
            <strong>Hours:</strong>
          </Label>
          <p className="mt-3 ml-5">{contact.hours}</p>
        </div>
      </div>
    </div>
  );
}
