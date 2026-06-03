import Link from "next/link";
import { cn } from "@/lib/cn";
import type { PricingPlan } from "./types";
import styles from "./PricingCard.module.css";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article className={cn(styles.card, plan.popular && styles.hot)}>
      {plan.popular ? <span className={styles.badge}>⭐ MOST POPULAR</span> : null}
      <p className={styles.tier}>{plan.tier}</p>
      <p className={cn(styles.price, plan.customPrice && styles.priceCustom)}>
        {plan.price}
        {plan.priceSuffix ? (
          <span className={styles.suffix}>{plan.priceSuffix}</span>
        ) : null}
      </p>
      <p className={styles.note}>{plan.note}</p>
      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f.label} className={styles.feature}>
            <span className={f.included ? styles.tick : styles.cross}>
              {f.included ? "✓" : "✗"}
            </span>
            {f.label}
          </li>
        ))}
      </ul>
      {plan.limit ? <p className={styles.limit}>{plan.limit}</p> : null}
      <Link href={plan.href} className={cn(styles.cta, plan.popular && styles.ctaHot)}>
        {plan.cta}
      </Link>
    </article>
  );
}
