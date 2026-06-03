import { HERO_PILLS } from "@/data/landing";
import { Button } from "./ui/Button";
import { Eyebrow, Pill } from "./ui/Chip";
import chipStyles from "./ui/Chip.module.css";
import { DashboardMockup } from "./DashboardMockup";
import { FadeInHero } from "./ui/FadeIn";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />
      <div className={styles.orb3} aria-hidden />

      <div className={styles.inner}>
        <FadeInHero delay={1} className={styles.copy}>
          <Eyebrow>All-in-one Restaurant Management</Eyebrow>
          <h1 className={styles.title}>
            Run Your
            <br />
            <em>Restaurant</em>
            <br />
            <span>Smarter.</span>
          </h1>
          <p className={styles.description}>
            Billing, order management, inventory, purchase, and analytics — all in one platform.
            Built for restaurants that mean business.
          </p>
          <div className={styles.cta}>
            <Button href="/demo" variant="primary">
              Get Started →
            </Button>
            <Button href="/demo" variant="secondary">
              View Demo
            </Button>
          </div>
          <div className={chipStyles.pills}>
            {HERO_PILLS.map((pill) => (
              <Pill key={pill.value} value={pill.value} label={pill.label} />
            ))}
          </div>
        </FadeInHero>

        <FadeInHero delay={6} className={styles.mockup}>
          <DashboardMockup />
        </FadeInHero>
      </div>
    </section>
  );
}
