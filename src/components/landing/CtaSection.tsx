import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";
import { Section } from "./ui/Section";
import styles from "./CtaSection.module.css";

export function CtaSection() {
  return (
    <Section variant="cta" className={styles.cta}>
      <div className={styles.blob} aria-hidden />
      <FadeIn className={styles.inner}>
        <h2 className={styles.title}>
          Ready to transform
          <br />
          your <em>restaurant?</em>
        </h2>
        <p className={styles.text}>
          Restro-Mate is live and ready to use. Jump into the demo, explore every module, and see the
          difference for yourself.
        </p>
        <div className={styles.buttons}>
          <Button href="/demo" variant="primary">
            Open Live Demo →
          </Button>
          <Button href="/pricing" variant="secondary">
            View Pricing
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
