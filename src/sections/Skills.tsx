import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";

export default function Skills({
  DATA,
  BLUR_FADE_DELAY
}: {
  DATA: {
    skills: string[];
  };
  BLUR_FADE_DELAY: number;
}) {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
