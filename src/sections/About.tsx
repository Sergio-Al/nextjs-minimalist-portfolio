import Markdown from "react-markdown";

export default function About(
  { DATA }: { DATA: { summary: string } }
) {
  return (
    <section id="about">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <h2 className="text-xl font-bold">About</h2>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </div>
    </section>
  );
}
