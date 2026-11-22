import { CareerTimeline, TimelineGroup } from "@/components/career-timeline";
import BlurFade from "@/components/magicui/blur-fade";

interface WorkEntry {
  company: string;
  /** Consecutive entries with the same group render as one company. */
  group?: string;
  logoUrl: string;
  title: string;
  href: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

function groupWork(work: readonly WorkEntry[]): TimelineGroup[] {
  const groups: TimelineGroup[] = [];
  for (const entry of work) {
    const name = entry.group ?? entry.company;
    const role = {
      company: entry.company,
      title: entry.title,
      start: entry.start,
      end: entry.end,
      description: entry.description,
    };
    const last = groups[groups.length - 1];
    if (last && last.name === name) {
      last.roles.push(role);
    } else {
      groups.push({
        name,
        href: entry.href,
        logoUrl: entry.logoUrl,
        location: entry.location,
        roles: [role],
      });
    }
  }
  return groups;
}

export default function Experience({
  DATA,
  BLUR_FADE_DELAY,
}: {
  DATA: { work: readonly WorkEntry[] };
  BLUR_FADE_DELAY: number;
}) {
  const groups = groupWork(DATA.work);
  return (
    <section id="experience">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-[1.375rem] font-semibold tracking-tight">Work Experience</h2>
        </BlurFade>
        {groups.map((group, id) => (
          <BlurFade key={group.name} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <CareerTimeline group={group} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
