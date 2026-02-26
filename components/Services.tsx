const services = [
  {
    title: "AI Workflow Audit",
    description:
      "A structured review of your intake, communication, and coordination systems. Identifies operational bottlenecks, missed opportunities, and automation potential with a clear implementation roadmap and ROI estimate.",
  },
  {
    title: "Lead Conversion Automation",
    description:
      "Automated lead scoring, prioritization, routing, and follow-up drafting to improve response speed and conversion rates without adding staff.",
  },
  {
    title: "Email & Communication Triage Systems",
    description:
      "AI-powered categorization and summarization of inbound emails and messages to reduce manual review time and surface high-priority items instantly.",
  },
  {
    title: "Intake & Form Processing Automation",
    description:
      "Automatically analyze form submissions, extract key information, summarize requests, and assign next steps to the appropriate team member.",
  },
  {
    title: "Operational Reporting & Visibility",
    description:
      "Automated performance tracking for response time, lead handling, and workflow efficiency to identify operational gaps and improve accountability.",
  },
  {
    title: "CRM Optimization & Automation Layering",
    description:
      "Enhance existing CRMs with AI-driven prioritization, routing logic, and automated follow-up workflows without replacing current systems.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-850 mb-10">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-850">
                {service.title}
              </h3>
              <p className="mt-2 text-stone-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
