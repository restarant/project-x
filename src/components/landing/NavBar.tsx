"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

function subscribeNoop() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}
import { MENU_LEGAL_LINKS, MENU_LOCALES, NAV_LINKS } from "@/data/landing";
import { cn } from "@/lib/cn";
import { BrandLogo } from "./ui/BrandLogo";
import { Button } from "./ui/Button";
import styles from "./NavBar.module.css";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState(MENU_LOCALES[0].code);
  const isClient = useIsClient();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.body.classList.toggle("menu-open", menuOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className={cn(styles.nav, scrolled && styles.scrolled, menuOpen && styles.navAboveMenu)}>
        <BrandLogo href="/" />

        <nav className={styles.links} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="/demo" variant="ghost">
            Live Demo
          </Button>
          <Button href="/pricing" variant="fill">
            Get Started →
          </Button>
        </div>

        <button
          type="button"
          className={cn(styles.menuBtn, menuOpen && styles.menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {isClient &&
        createPortal(
          <div
            className={cn(styles.menuOverlay, menuOpen && styles.menuOverlayOpen)}
            aria-hidden={!menuOpen}
            onClick={closeMenu}
          >
            <div className={styles.menuBackdrop} aria-hidden />
            <div
              className={styles.menuStack}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              onClick={(e) => e.stopPropagation()}
            >
              <header className={cn(styles.menuSegment, styles.menuTopBar)}>
                <BrandLogo href="/" size="sm" className={styles.menuLogo} onClick={closeMenu} />
                <button type="button" className={styles.menuClose} onClick={closeMenu}>
                  Close
                </button>
              </header>

              <nav className={cn(styles.menuSegment, styles.menuGlass)} aria-label="Mobile">
                <ul className={styles.menuList}>
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={styles.menuItem} onClick={closeMenu}>
                        <span className={styles.menuLabel}>{link.label}</span>
                        {link.meta ? <span className={styles.menuMeta}>{link.meta}</span> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={cn(styles.menuSegment, styles.menuFooterLegal)}>
                {MENU_LEGAL_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className={styles.menuLegalLink} onClick={closeMenu}>
                    {link.label}
                  </a>
                ))}
              </div>

              <div
                className={cn(styles.menuSegment, styles.menuFooterLocales)}
                role="group"
                aria-label="Language"
              >
                {MENU_LOCALES.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    className={cn(styles.localeBtn, locale === item.code && styles.localeActive)}
                    aria-pressed={locale === item.code}
                    aria-label={item.label}
                    onClick={() => setLocale(item.code)}
                  >
                    {item.code}
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
