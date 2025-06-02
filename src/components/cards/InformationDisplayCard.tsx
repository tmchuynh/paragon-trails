"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InformationDisplayCard({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const router = useRouter();
  return (
    <div className="bg-card shadow-lg hover:shadow-xl border border-border rounded-lg h-full transition-shadow overflow-hidden">
      <Card className="flex flex-col justify-between h-full">
        <CardContent className="flex flex-col justify-center items-center p-6 h-full text-center">
          <h2>{label}</h2>
          <Button onClick={() => router.push(href)} variant="outline">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
