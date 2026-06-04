import { cn } from "@/lib/cn";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  variant?: "default" | "alt" | "cta";
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  variant = "default",
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn(styles.section, styles[variant], className)}>
      <div className={cn(styles.container, containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className={styles.dividerWrap} aria-hidden>
      <div className={styles.divider} />
    </div>
  );
}
