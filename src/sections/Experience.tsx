import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";

export default function Experience({
  DATA,
  BLUR_FADE_DELAY,
}: {
  DATA: {
    work: {
      company: string;
      logoUrl: string;
      title: string;
      href: string;
      badges: string[];
      start: string;
      end: string;
      description: string;
    }[];
  };
  BLUR_FADE_DELAY: number;
}) {
  return (
    <section id="experience">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
