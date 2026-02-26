export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Identify Bottlenecks",
      description:
        "We analyze your intake, communication, and routing workflows.",
    },
    {
      number: "2",
      title: "Design Targeted Automation",
      description:
        "We implement AI layers that eliminate repetitive triage and manual steps.",
    },
    {
      number: "3",
      title: "Optimize for Performance",
      description:
        "Systems are tested, refined, and measured to ensure reliability and measurable improvement.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-6 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-850 mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-stone-200 bg-stone-50/50 p-6 flex flex-col"
            >
              <span className="text-sm font-semibold text-stone-500">
                {step.number}.
              </span>
              <h3 className="text-lg font-semibold text-neutral-850 mt-1">
                {step.title}
              </h3>
              <p className="mt-2 text-stone-600 leading-relaxed flex-1">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
