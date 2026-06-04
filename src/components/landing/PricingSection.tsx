import { PRICING_PLANS } from "@/data/landing";
import { PricingCard } from "./PricingCard";
import { FadeIn } from "./ui/FadeIn";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import styles from "./PricingSection.module.css";

export function PricingSection() {
  return (
    <Section id="pricing">
      <FadeIn>
        <SectionHeader
          label="Pricing"
          title={
            <>
              Simple, transparent
              <br />
              <em>pricing plans</em>
            </>
          }
          description="Choose the plan that fits your restaurant best. Start with Lite, scale up anytime."
          descriptionMargin="tight"
        />
      </FadeIn>
      <div className={styles.grid}>
        {PRICING_PLANS.map((plan, i) => (
          <FadeIn
            key={plan.id}
            delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            className={styles.cell}
          >
            <PricingCard plan={plan} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
