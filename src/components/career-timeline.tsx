"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface TimelineRole {
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
}

export interface TimelineGroup {
  name: string;
  href: string;
  logoUrl: string;
  location: string;
  /** Newest first. */
  roles: TimelineRole[];
}

function RoleItem({
  role,
  groupName,
  defaultOpen,
}: {
  role: TimelineRole;
  groupName: string;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const current = role.end === "Present";

  return (
    <li className="relative pl-6">
      {/* Dot sits centered on the group's vertical rule. */}
      {current && (
        <span
          aria-hidden
          className="absolute -left-[5px] top-[0.85rem] size-[9px] animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden"
        />
      )}
      <span
        aria-hidden
        className={cn(
          "absolute -left-[5px] top-[0.85rem] size-[9px] rounded-full ring-2 ring-background",
          current ? "bg-brand" : "bg-brand/40"
        )}
      />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full flex-col gap-0.5 py-2 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-3"
      >
        <span className="flex flex-col">
          <span className="inline-flex items-center text-sm font-medium">
            {role.title}
            <ChevronRightIcon
              className={cn(
                "ml-1 size-3.5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:text-brand",
                open && "rotate-90"
              )}
            />
          </span>
          {role.company !== groupName && (
            <span className="text-xs text-muted-foreground">{role.company}</span>
          )}
        </span>
        <span className="ds-meta whitespace-nowrap text-xs text-muted-foreground">
          {role.start} – {role.end}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-3 text-sm leading-relaxed text-muted-foreground">
              {role.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function CareerTimeline({ group }: { group: TimelineGroup }) {
  const newest = group.roles[0];
  const oldest = group.roles[group.roles.length - 1];
  const promotions = group.roles.length - 1;

  return (
    <div>
      <div className="flex items-center gap-3">
        <Avatar className="size-10 border bg-muted-background dark:bg-foreground">
          <AvatarImage src={group.logoUrl} alt={group.name} className="object-contain" />
          <AvatarFallback>{group.name[0]}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <Link
              href={group.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold transition-colors hover:text-brand"
            >
              {group.name}
            </Link>
            <span className="ds-meta text-xs text-muted-foreground">
              {oldest.start} – {newest.end}
            </span>
          </div>
          <div className="text-xs text-muted-foreground">
            {group.location}
            {promotions > 0 && (
              <span className="text-brand">
                {" "}
                · {promotions} {promotions === 1 ? "promotion" : "promotions"}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* ml-5 puts the rule under the center of the 40px logo. */}
      <ol className="ml-5 mt-2 border-l border-brand/25">
        {group.roles.map((role, i) => (
          <RoleItem
            key={`${role.company}-${role.title}`}
            role={role}
            groupName={group.name}
            defaultOpen={i === 0 && role.end === "Present"}
          />
        ))}
      </ol>
    </div>
  );
}
