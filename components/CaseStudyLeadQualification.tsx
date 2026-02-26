export function CaseStudyLeadQualification() {
  return (
    <section className="py-16 px-6 bg-white border-y border-stone-200">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-stone-500 uppercase tracking-wide">
          Case Study
        </p>
        <h2 className="text-2xl font-semibold text-neutral-850 mt-1 mb-10">
          AI Lead Qualification &amp; Routing System
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Challenge
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              High-volume service teams often receive inbound leads through
              forms, email, and multiple listing platforms.
            </p>
            <p className="mt-2 text-stone-600 leading-relaxed">
              Leads are manually reviewed, inconsistently prioritized, and
              routed based on availability rather than intent.
            </p>
            <p className="mt-2 text-stone-600 leading-relaxed">The result:</p>
            <ul className="mt-2 space-y-1 text-stone-600 list-disc list-inside">
              <li>Slow response times</li>
              <li>Missed high-value opportunities</li>
              <li>Inconsistent follow-up</li>
              <li>Revenue leakage</li>
            </ul>
            <p className="mt-4 text-stone-600 leading-relaxed font-medium">
              Manual triage becomes the bottleneck.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Solution
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              Designed and implemented an AI-powered lead qualification system
              that:
            </p>
            <ul className="mt-3 space-y-2 text-stone-600 list-disc list-inside">
              <li>Automatically analyzes inbound lead submissions</li>
              <li>Scores lead intent and urgency</li>
              <li>Categorizes leads as Hot, Warm, or Cold</li>
              <li>Instantly routes high-value leads to the appropriate team member</li>
              <li>Drafts structured follow-up responses</li>
              <li>Logs performance metrics for response time tracking</li>
            </ul>
            <p className="mt-4 text-stone-600 leading-relaxed">
              The system integrates with existing CRMs and communication tools
              without replacing core infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Architecture
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              Inbound Lead → AI Analysis &amp; Scoring → Priority
              Classification → Automated Routing → Drafted Follow-Up → CRM
              Logging
            </p>
            <p className="mt-3 text-stone-600 leading-relaxed">
              The automation layer sits on top of existing systems, improving
              speed and consistency without adding operational complexity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Outcome
            </h3>
            <ul className="mt-2 space-y-2 text-stone-600 list-disc list-inside">
              <li>Reduced manual triage workload</li>
              <li>Improved response speed for high-value leads</li>
              <li>Increased routing accuracy</li>
              <li>More consistent follow-up</li>
              <li>Clear visibility into lead handling performance</li>
            </ul>
            <p className="mt-4 text-stone-600 leading-relaxed">
              By eliminating response delays and prioritizing high-intent
              inquiries, the system directly improves conversion potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
