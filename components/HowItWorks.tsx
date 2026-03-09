import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { PiFlowArrowDuotone } from "react-icons/pi";
import { LuGauge } from "react-icons/lu";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Identify Bottlenecks",
      description:
        "We analyze your intake, communication, and routing workflows.",
      Icon: HiOutlineMagnifyingGlass,
    },
    {
      number: "2",
      title: "Design Targeted Automation",
      description:
        "We implement AI layers that eliminate repetitive triage and manual steps.",
      Icon: PiFlowArrowDuotone,
    },
    {
      number: "3",
      title: "Optimize for Performance",
      description:
        "Systems are tested, refined, and measured to ensure reliability and measurable improvement.",
      Icon: LuGauge,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 px-6 bg-white border-y border-stone-200"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-850 mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="rounded-xl border border-stone-200 bg-brand-tealSoft/60 p-6 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-stone-500">
                  {number}.
                </span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-850 mt-1">
                {title}
              </h3>
              <p className="mt-2 text-stone-600 leading-relaxed flex-1">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
