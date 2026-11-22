"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function CountUp({ value, delay }: { value: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCurrent(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, delay]);

  return <span ref={ref}>{current}</span>;
}

export function StatStrip({ stats }: { stats: readonly Stat[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-brand/20 py-6 sm:grid-cols-4">
      {stats.map((stat, i) => {
        const full = `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`;
        return (
          <li key={stat.label} className="flex flex-col gap-1.5">
            <span className="sr-only">{`${full} ${stat.label}`}</span>
            <span
              aria-hidden
              className="font-serif text-4xl leading-none tabular-nums text-brand"
            >
              {stat.prefix}
              <CountUp value={stat.value} delay={0.2 + i * 0.12} />
              {stat.suffix}
            </span>
            <span aria-hidden className="text-xs leading-snug text-muted-foreground">
              {stat.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
