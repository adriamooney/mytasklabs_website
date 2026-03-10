import { Button } from "./Button";
import { Card } from "./Card";
import { FloatingPaths } from "./FloatingPaths";
import { Section } from "./Section";

type FinalCTAProps = {
  calendlyUrl: string;
  tone?: "light" | "dark";
};

export function FinalCTA({ calendlyUrl, tone = "dark" }: FinalCTAProps) {
  return (
    <Section id="contact" tone={tone}>
      <div className="absolute inset-0 z-0 opacity-60 overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <Card
        variant="containerDarkCta"
        as="div"
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
          If your team handles high volumes of leads, emails, or coordination,
          you likely have untapped performance gains sitting in manual triage
          and inconsistent follow-up.
        </p>
        <p className="mt-3 text-sm sm:text-base font-medium text-slate-50">
          Let&apos;s map the bottlenecks and design the automations to remove
          them.
        </p>
        <Button href={calendlyUrl} className="mt-8">
          Book a strategy call →
        </Button>
      </Card>
    </Section>
  );
}
