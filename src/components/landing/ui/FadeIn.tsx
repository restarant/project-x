"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import styles from "./FadeIn.module.css";

type FadeInProps = {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  /** Use inside CSS grids so the wrapper doesn’t break layout */
  displayContents?: boolean;
};

export function FadeIn({
  children,
  delay = 1,
  className,
  displayContents = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        styles.root,
        styles[`delay${delay}`],
        visible && styles.visible,
        displayContents && styles.contents,
        className
      )}
    >
      {children}
    </div>
  );
}

/** Hero entrance — plays immediately on load */
export function FadeInHero({ children, delay = 1, className }: Omit<FadeInProps, "displayContents">) {
  return (
    <div className={cn(styles.root, styles.hero, styles[`delay${delay}`], styles.visible, className)}>
      {children}
    </div>
  );
}
