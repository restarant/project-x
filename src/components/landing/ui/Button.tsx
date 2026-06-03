import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

export type ButtonVariant = "ghost" | "fill" | "primary" | "secondary" | "pricing";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={cn(styles.btn, styles[variant], className)}>
      {children}
    </Link>
  );
}
