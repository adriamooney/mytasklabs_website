const tools = ["OpenAI", "Zapier", "Make", "Salesforce", "HubSpot"];

export function StackLogos() {
  return (
    <section className="px-6 pb-10">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          Works with your stack
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-md border border-stone-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

