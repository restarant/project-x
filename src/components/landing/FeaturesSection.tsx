import { FEATURES } from "@/data/landing";
import { FeatureCard } from "./FeatureCard";
import { FadeIn } from "./ui/FadeIn";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import styles from "./FeaturesSection.module.css";

export function FeaturesSection() {
  return (
    <Section id="features">
      <FadeIn>
        <SectionHeader
          label="Core Features"
          title={
            <>
              Everything your restaurant
              <br />
              <em>needs to run</em>
            </>
          }
          description="Five powerful modules covering every aspect of your restaurant — from the front counter to the back office."
        />
      </FadeIn>
      <div className={styles.grid}>
        {FEATURES.map((feature, i) => (
          <FadeIn
            key={feature.name}
            delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            className={styles.cell}
          >
            <FeatureCard feature={feature} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
