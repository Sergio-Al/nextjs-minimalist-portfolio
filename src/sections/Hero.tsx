import BlurFade from "@/components/magicui/blur-fade";
import { Stat, StatStrip } from "@/components/stat-strip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero({
  BLUR_FADE_DELAY = 0.04,
  DATA,
}: {
  BLUR_FADE_DELAY?: number;
  DATA: {
    name: string;
    role: string;
    avatarUrl: string;
    initials: string;
    description: string;
    stats: readonly Stat[];
  };
}) {
  const firstName = DATA.name.split(" ")[0];
  return (
    <section id="hero" className="relative isolate">
      {/* Soft bronze glow behind the hero. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-72 w-full -translate-x-1/2 rounded-full bg-brand/15 blur-3xl dark:bg-brand/10"
      />
      <div className="mx-auto w-full max-w-2xl space-y-10">
        <div className="gap-4 flex justify-between items-start">
          <div className="flex-col flex flex-1 space-y-3">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <p className="ds-eyebrow text-brand">{DATA.role}</p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="font-serif font-normal leading-none tracking-tight text-[clamp(2.5rem,9vw,3.75rem)]">
                Hi, I&apos;m <em className="italic text-brand">{firstName}</em>{" "}
                <span className="inline-block">👋</span>
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="max-w-[26rem] text-lg leading-relaxed text-muted-foreground">
                {DATA.description}
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-20 sm:size-28 border-2 border-brand/30 ring-4 ring-brand/10">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <StatStrip stats={DATA.stats} />
        </BlurFade>
      </div>
    </section>
  );
}
