import BlurFade from "@/components/magicui/blur-fade";

export default function Contact({
  BLUR_FADE_DELAY,
  DATA,
}: {
  BLUR_FADE_DELAY: number;
  DATA: {
    contact: {
      email: string;
    };
  };
}) {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-5 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex flex-col items-center space-y-3">
            <p className="ds-eyebrow text-brand">Contact</p>
            <h2 className="font-serif font-normal leading-[1.08] tracking-tight text-[clamp(1.875rem,6vw,2.875rem)]">
              Get <em className="italic text-brand">in touch</em>
            </h2>
            <p className="mx-auto max-w-[34rem] text-base leading-relaxed text-muted-foreground">
              Want to chat? Send me a note and I&apos;ll reply when I can.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <a
            href={`mailto:${DATA.contact.email}`}
            className="font-mono text-sm underline underline-offset-4 text-foreground"
          >
            {DATA.contact.email}
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
