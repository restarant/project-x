import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export function BrandLogo({ href = "/", size = "md", className, onClick }: BrandLogoProps) {
  const content = (
    <>
      <div className={styles.mark} aria-hidden>
        🍽
      </div>
      <span className={styles.name}>
        Restro<span className={styles.accent}>-Mate</span>
      </span>
    </>
  );

  const classes = cn(styles.logo, styles[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
