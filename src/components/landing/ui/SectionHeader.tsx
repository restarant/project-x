import { cn } from "@/lib/cn";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  titleSize?: "default" | "compact";
  descriptionMargin?: "default" | "none" | "tight";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  titleSize = "default",
  descriptionMargin = "default",
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        styles.header,
        styles[align],
        titleSize === "compact" && styles.titleCompact,
        descriptionMargin === "none" && styles.descNone,
        descriptionMargin === "tight" && styles.descTight,
        className
      )}
    >
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
