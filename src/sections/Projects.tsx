import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import React from "react";

interface Project {
  title: string;
  description: string;
  href: string;
  dates: string;
  featured?: boolean;
  metrics?: readonly { value: string; label: string }[];
  technologies: readonly string[];
  image: string;
  video: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

function renderCard(project: Project, featured: boolean) {
  return (
    <ProjectCard
      href={project.href}
      title={project.title}
      description={project.description}
      dates={project.dates}
      tags={project.technologies}
      image={project.image}
      video={project.video}
      links={project.links}
      metrics={project.metrics}
      featured={featured}
    />
  );
}

export default function Projects({
  DATA,
  BLUR_FADE_DELAY,
}: {
  DATA: { projects: readonly Project[] };
  BLUR_FADE_DELAY: number;
}) {
  const featured = DATA.projects.filter((p) => p.featured);
  const rest = DATA.projects.filter((p) => !p.featured);

  return (
    <section id="projects">
      <div className="w-full space-y-10 py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <p className="ds-eyebrow text-brand">My Projects</p>
            <h2 className="font-serif font-normal leading-[1.08] tracking-tight text-[clamp(1.875rem,6vw,2.875rem)]">
              Check out my latest <em className="italic text-brand">work</em>
            </h2>
            <p className="max-w-[34rem] text-base leading-relaxed text-muted-foreground">
              Side projects where I try ideas from my day job in the open, from
              AI agents to developer tools and APIs.
            </p>
          </div>
        </BlurFade>
        <div className="space-y-4">
          {featured.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              {renderCard(project, true)}
            </BlurFade>
          ))}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rest.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                className="h-full"
              >
                {renderCard(project, false)}
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
