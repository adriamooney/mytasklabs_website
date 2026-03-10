import { Card } from "./Card";
import { Section } from "./Section";

type OurDifferenceProps = { tone?: "light" | "dark" };

export function OurDifference({ tone = "light" }: OurDifferenceProps) {
  const isDark = tone === "dark";
  return (
    <Section tone={tone}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Our Difference
      </p>
      <h2
        className={`mt-3 text-2xl sm:text-3xl font-semibold tracking-tight ${
          isDark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        Built for complex, operational teams
      </h2>
      <p
        className={`mt-3 text-sm leading-relaxed max-w-2xl ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        Not another generic AI agency. MyTask Labs combines deep systems
        experience with custom automation so your workflows fit your business,
        not the other way around.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="emerald">
          <h3 className="text-sm font-semibold tracking-tight text-emerald-700">
            MyTask Labs
          </h3>
          <ul className="mt-3 space-y-2 text-xs text-slate-700 leading-relaxed">
            <li>Custom-built automation around your existing tools.</li>
            <li>Experts in AI and operational business systems.</li>
            <li>Free, focused workflow audit to surface quick wins.</li>
            <li>Ongoing support and iteration as your volume changes.</li>
          </ul>
        </Card>

        <Card variant="muted">
          <h3 className="text-sm font-semibold tracking-tight text-slate-800">
            Other AI consultants
          </h3>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 leading-relaxed">
            <li>Cookie-cutter, prebuilt playbooks and templates.</li>
            <li>Limited industry and implementation experience.</li>
            <li>Paid audits that stop at a slide deck.</li>
            <li>No long-term ownership of workflow performance.</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

