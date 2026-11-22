"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  featured?: boolean;
  metrics?: readonly { value: string; label: string }[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

/** Demo video that only loads and plays while hovered, focused or tapped. */
function HoverVideo({
  src,
  poster,
  title,
  className,
}: {
  src: string;
  poster?: string;
  title: string;
  className: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    ref.current?.play().then(() => setPlaying(true)).catch(() => {});
  };
  const pause = () => {
    ref.current?.pause();
    setPlaying(false);
  };

  return (
    <button
      type="button"
      aria-label={playing ? `Pause ${title} demo` : `Play ${title} demo`}
      onPointerEnter={(e) => e.pointerType === "mouse" && play()}
      onPointerLeave={(e) => e.pointerType === "mouse" && pause()}
      onClick={() => (playing ? pause() : play())}
      className="relative block w-full"
    >
      <video
        ref={ref}
        // With a poster nothing downloads until play; without one, load just
        // enough to show the first frame.
        src={poster ? src : `${src}#t=0.1`}
        poster={poster}
        preload={poster ? "none" : "metadata"}
        loop
        muted
        playsInline
        className={className}
      />
      <span
        className={cn(
          "absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium shadow-sm backdrop-blur transition-opacity",
          playing && "opacity-0"
        )}
      >
        <PlayIcon className="size-3 fill-current text-brand" />
        Play demo
      </span>
    </button>
  );
}

/** Typographic cover for projects without a screenshot or video. */
function Cover({ title, tags, className }: { title: string; tags: readonly string[]; className: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand/20 via-brand/5 to-transparent",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(hsl(var(--brand)/0.35)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:linear-gradient(to_bottom,black,transparent)] transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-x-4 bottom-3 space-y-1">
        <p className="ds-eyebrow truncate text-brand">{tags.slice(0, 3).join(" · ")}</p>
        <p className="font-serif text-3xl leading-none">{title}</p>
      </div>
    </div>
  );
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  featured = false,
  metrics,
  links,
}: Props) {
  const mediaClass = cn(
    "w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]",
    featured ? "aspect-[16/9] h-auto" : "h-44"
  );

  let media: React.ReactNode;
  if (video) {
    // When a project has both, the image doubles as the video's poster.
    media = <HoverVideo src={video} poster={image} title={title} className={mediaClass} />;
  } else if (image) {
    media = (
      <Link href={href || "#"} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden>
        <Image
          src={image}
          alt=""
          width={featured ? 1440 : 640}
          height={featured ? 862 : 384}
          sizes={featured ? "(max-width: 720px) 100vw, 672px" : "(max-width: 640px) 100vw, 336px"}
          priority={featured}
          className={mediaClass}
        />
      </Link>
    );
  } else {
    media = <Cover title={title} tags={tags} className={featured ? "aspect-[5/2]" : "h-44"} />;
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 motion-reduce:hover:translate-y-0",
        featured && "ring-1 ring-brand/15"
      )}
    >
      <div className="overflow-hidden border-b">{media}</div>
      <div className={cn("flex flex-1 flex-col", featured ? "gap-3 p-5" : "gap-2 p-4")}>
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className={cn(
              "font-semibold leading-snug",
              featured ? "font-serif text-3xl font-normal" : "text-[15px]"
            )}
          >
            <Link
              href={href || "#"}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand"
            >
              {title}
            </Link>
          </h3>
          <time className="ds-meta shrink-0 text-[11px] text-muted-foreground">{dates}</time>
        </div>
        {featured && <p className="ds-eyebrow -mt-1 text-brand">Featured project</p>}
        <Markdown
          className={cn(
            "prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert",
            featured ? "text-sm" : "text-[12.5px]"
          )}
        >
          {description}
        </Markdown>
        {metrics && metrics.length > 0 && (
          <dl className="flex flex-wrap gap-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-md border border-brand/25 bg-brand/5 px-2.5 py-1.5"
              >
                <dt className="sr-only">{m.label}</dt>
                <dd className="flex items-baseline gap-1.5">
                  <span className="font-serif text-lg leading-none text-brand">{m.value}</span>
                  <span aria-hidden className="text-[11px] text-muted-foreground">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        )}
        {tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1 pt-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="whitespace-nowrap px-1.5 py-0 text-[10px] font-semibold"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-[11px] font-medium text-primary-foreground transition-colors hover:bg-brand"
              >
                {link.icon}
                {link.type}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
