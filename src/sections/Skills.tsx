import BlurFade from "@/components/magicui/blur-fade";

export default function Skills({
  DATA,
  BLUR_FADE_DELAY,
}: {
  DATA: {
    skillGroups: { label: string; items: string[] }[];
  };
  BLUR_FADE_DELAY: number;
}) {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="mb-4 text-[1.375rem] font-semibold tracking-tight">
            Skills
          </h2>
        </BlurFade>
        <div className="flex flex-col">
          {DATA.skillGroups.map((group, id) => (
            <BlurFade
              key={group.label}
              delay={BLUR_FADE_DELAY * 10 + id * 0.04}
            >
              <div className="flex items-baseline gap-5 border-t border-border py-3">
                <span className="w-[7.75rem] flex-none font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground pt-px">
                  {group.label}
                </span>
                <span className="text-[0.9rem] leading-relaxed text-foreground">
                  {group.items.join("  ·  ")}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
