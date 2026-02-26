export function CaseStudyKnowledge() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-stone-500 uppercase tracking-wide">
          Case Study
        </p>
        <h2 className="text-2xl font-semibold text-neutral-850 mt-1 mb-10">
          AI Internal Knowledge Assistant
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Challenge
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              Operations-heavy teams often rely on scattered documentation and
              manual knowledge sharing. Employees interrupt one another for
              information, search through long documents, or rely on
              inconsistent tribal knowledge.
            </p>
            <p className="mt-2 text-stone-600 leading-relaxed">
              This creates friction, slows onboarding, and reduces operational
              speed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Solution
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              Designed and implemented an AI-powered internal knowledge
              assistant that:
            </p>
            <ul className="mt-3 space-y-2 text-stone-600 list-disc list-inside">
              <li>Converts company documentation into searchable AI embeddings</li>
              <li>Retrieves the most relevant information using semantic similarity ranking</li>
              <li>Generates accurate, source-referenced answers inside Slack</li>
              <li>Logs queries to monitor usage and knowledge gaps</li>
            </ul>
            <p className="mt-4 text-stone-600 leading-relaxed">
              The system integrates with existing communication tools and
              requires no change to core workflows.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Architecture
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              Slack → AI Processing Endpoint → Knowledge Base Retrieval →
              Similarity Ranking → Source-Grounded Response → Slack Delivery
            </p>
            <p className="mt-3 text-stone-600 leading-relaxed">
              The assistant uses structured chunking, vector embeddings, and
              relevance ranking to ensure responses are grounded in internal
              documentation rather than generic AI output.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-850">
              The Outcome
            </h3>
            <ul className="mt-2 space-y-2 text-stone-600 list-disc list-inside">
              <li>Reduced time spent searching documentation</li>
              <li>Improved response consistency</li>
              <li>Decreased internal interruptions</li>
              <li>Created scalable institutional knowledge access</li>
            </ul>
            <p className="mt-4 text-stone-600 leading-relaxed">
              The result is faster decision-making and reduced operational
              friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
