import { Card } from "./Card";
import { Section } from "./Section";

type BeforeAfterProps = { tone?: "light" | "dark" };

export function BeforeAfter({ tone = "light" }: BeforeAfterProps) {
  const isDark = tone === "dark";
  return (
    <Section tone={tone}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Benefits
      </p>
      <h2
        className={`mt-3 text-2xl font-semibold ${
          isDark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        Before vs. After Automation
      </h2>
      <p
        className={`mt-4 text-sm leading-relaxed max-w-2xl ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        AI layers make the invisible work in your operations tangible. Here&apos;s
        how your day-to-day feels before and after automation.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant={isDark ? "lightOnDark" : "light"}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Before
          </p>
          <h3 className="mt-2 text-sm font-semibold text-slate-900">
            Manual triage and missed opportunities
          </h3>
          <ul className="mt-4 space-y-2 text-xs text-slate-600 leading-relaxed">
            <li>Leads sit in inboxes with no clear priority.</li>
            <li>Operators rely on gut feel to decide who gets a response.</li>
            <li>High-intent opportunities are buried under noise.</li>
            <li>Response times vary wildly between team members.</li>
          </ul>
        </Card>
        <Card variant="darkEmerald">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            After
          </p>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">
            Prioritized, measurable workflows
          </h3>
          <ul className="mt-4 space-y-2 text-xs text-slate-200 leading-relaxed">
            <li>Every inbound request is scored and tagged automatically.</li>
            <li>High-value leads are routed instantly to the right owner.</li>
            <li>Operators see a clear, prioritized queue instead of chaos.</li>
            <li>Response speed and follow-through are tracked and improved.</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

