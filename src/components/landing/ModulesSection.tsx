import { MODULES } from "@/data/landing";
import { ModuleCard } from "./ModuleCard";
import { FadeIn } from "./ui/FadeIn";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import styles from "./ModulesSection.module.css";

export function ModulesSection() {
  return (
    <Section id="modules" variant="alt">
      <FadeIn>
        <SectionHeader
          label="Explore Modules"
          title={
            <>
              Go deeper into
              <br />
              <em>each module</em>
            </>
          }
          description="Each module is a full-featured system — click through to explore your live app."
          titleSize="compact"
          descriptionMargin="none"
        />
      </FadeIn>
      <div className={styles.grid}>
        {MODULES.map((mod, i) => (
          <FadeIn
            key={mod.name}
            delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            className={styles.cell}
          >
            <ModuleCard module={mod} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
