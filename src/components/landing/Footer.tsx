import Link from "next/link";
import { FOOTER_LINKS } from "@/data/landing";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.logo}>
          Restro<span>-Mate</span>
        </p>
        <p className={styles.copy}>© 2026 Restro-Mate · Restaurant & Inventory Management</p>
        <nav className={styles.links} aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
