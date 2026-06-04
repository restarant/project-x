import Link from "next/link";
import type { FeatureItem } from "./types";
import { Chip } from "./ui/Chip";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  feature: FeatureItem;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const inner = (
    <>
      <div className={styles.top}>
        <div className={styles.icon}>{feature.icon}</div>
        {feature.href ? <span className={styles.arrow}>↗</span> : null}
      </div>
      <h3 className={styles.name}>{feature.name}</h3>
      <p className={styles.description}>{feature.description}</p>
      <div className={styles.chips}>
        {feature.chips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>
    </>
  );

  if (feature.href) {
    return (
      <Link href={feature.href} className={styles.card}>
        {inner}
      </Link>
    );
  }

  return <article className={styles.card}>{inner}</article>;
}
