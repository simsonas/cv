import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certification = NonNullable<(typeof RESUME_DATA)["certifications"]>[number];

interface CertificationsProps {
  certifications: readonly Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section className="gap-y-2 print:gap-y-1">
      <h2 className="text-xl font-bold" id="certifications-section">
        Certifications
      </h2>
      <div
        className="space-y-2"
        role="feed"
        aria-labelledby="certifications-section"
      >
        {certifications.map((certification) => (
          <article key={`${certification.name}-${certification.url}`}>
            <div className="flex items-baseline justify-between gap-x-3 text-sm print:text-[12px]">
              <h3 className="min-w-0 font-medium leading-none">
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate hover:underline"
                >
                  {certification.name}
                </a>
              </h3>
              <div className="shrink-0 tabular-nums text-gray-500">
                {certification.date}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}