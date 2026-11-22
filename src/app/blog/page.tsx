import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-serif font-normal leading-none tracking-tight text-[clamp(2.25rem,8vw,3.25rem)] mb-1.5">
          Blog
        </h1>
        <p className="mb-4 text-base text-muted-foreground">
          Notes on building software — and occasionally on lunch.
        </p>
      </BlurFade>
      <div className="flex flex-col">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="group flex flex-col gap-1.5 border-t border-border py-5"
                href={`/blog/${post.slug}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-[3px]">
                    {post.metadata.title}
                  </span>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground whitespace-nowrap">
                    {post.metadata.publishedAt}
                  </span>
                </div>
                {post.metadata.summary && (
                  <span className="text-sm leading-snug text-muted-foreground">
                    {post.metadata.summary}
                  </span>
                )}
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
