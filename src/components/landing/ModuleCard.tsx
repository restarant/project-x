import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ModuleItem } from "./types";
import styles from "./ModuleCard.module.css";

type ModuleCardProps = {
  module: ModuleItem;
};

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <article className={cn(styles.card, module.highlighted && styles.highlighted)}>
      <div className={styles.icon}>{module.icon}</div>
      <h3 className={styles.name}>{module.name}</h3>
      <p className={styles.description}>{module.description}</p>
      <Link
        href={module.href}
        className={cn(styles.link, module.highlighted && styles.linkHighlighted)}
      >
        {module.cta}
      </Link>
    </article>
  );
}
