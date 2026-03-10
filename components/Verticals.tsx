import { Card } from "./Card";
import { Section } from "./Section";

type VerticalsProps = { tone?: "light" | "dark" };

const verticals = [
  {
    label: "Home service professionals",
    subtitle: "High-volume local teams",
    points: [
      "Handle incoming inquiries via SMS, web forms, and call transcription.",
      "Automated quoting and scheduling workflows that fit your dispatch tools.",
      "Post-job feedback and follow-up sequences that run without manual nudges.",
    ],
  },
  {
    label: "Professional services",
    subtitle: "Legal, advisory, and real estate",
    points: [
      "Triage inbound leads across email, portals, and referrals into clear tiers.",
      "Surface context and history so specialists start every conversation prepared.",
      "Turn meeting notes into structured tasks, next steps, and CRM updates.",
    ],
  },
  {
    label: "Operations-heavy businesses",
    subtitle: "Complex internal coordination",
    points: [
      "Connect intake channels to routing logic instead of ad-hoc assignment.",
      "Highlight at-risk work before it slips through the cracks.",
      "Give leadership visibility into response times and workflow load.",
    ],
  },
];

export function Verticals({ tone = "light" }: VerticalsProps) {
  const isDark = tone === "dark";
  return (
    <Section tone={tone}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Who we work with
      </p>
      <h2
        className={`mt-3 text-2xl sm:text-3xl font-semibold tracking-tight ${
          isDark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        Vertical focus, reusable patterns
      </h2>
      <p
        className={`mt-3 text-sm leading-relaxed max-w-2xl ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        We specialize in teams where every missed follow-up or delayed response
        has a real cost. The patterns are shared, but the workflows are tailored
        to each industry.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {verticals.map((vertical) => (
          <Card
            key={vertical.label}
            variant={isDark ? "lightOnDark" : "light"}
          >
            <h3 className="text-sm font-semibold text-slate-900">
              {vertical.label}
            </h3>
            <p className="mt-1 text-xs text-slate-500">{vertical.subtitle}</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 leading-relaxed">
              {vertical.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

