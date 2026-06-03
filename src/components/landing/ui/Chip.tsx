import styles from "./Chip.module.css";

export function Chip({ children }: { children: React.ReactNode }) {
  return <span className={styles.chip}>{children}</span>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.eyebrow}>
      <div className={styles.eyebrowDot}>🍽</div>
      <span className={styles.eyebrowText}>{children}</span>
    </div>
  );
}

export function Pill({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.pill}>
      <span className={styles.pillValue}>{value}</span>
      <span className={styles.pillLabel}>{label}</span>
    </div>
  );
}
