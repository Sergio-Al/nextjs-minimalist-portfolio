import Markdown from "react-markdown";

export default function About(
  { DATA }: { DATA: { summary: string } }
) {
  return (
    <section id="about">
      <div className="mx-auto w-full max-w-2xl space-y-3">
        <h2 className="text-[1.375rem] font-semibold tracking-tight">About</h2>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert prose-strong:font-semibold prose-strong:text-foreground prose-a:text-brand">
          {DATA.summary}
        </Markdown>
      </div>
    </section>
  );
}
