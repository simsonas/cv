import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certification = NonNullable<(typeof RESUME_DATA)["certifications"]>[number];

interface CertificationsProps {
  certifications: readonly Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certifications-section">
        Certifications
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="certifications-section"
      >
        {certifications.map((certification) => (
          <article key={`${certification.name}-${certification.issuer}`}>
            <Card className="border-none">
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {certification.name}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {certification.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 text-foreground/80 print:text-[12px]">
                {certification.issuer}
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </Section>
  );
}