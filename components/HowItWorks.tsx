import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { PiFlowArrowDuotone } from "react-icons/pi";
import { LuGauge } from "react-icons/lu";
import { Card } from "./Card";
import { Section } from "./Section";

type HowItWorksProps = { tone?: "light" | "dark" };

export function HowItWorks({ tone = "dark" }: HowItWorksProps) {
  const steps = [
    {
      id: "1",
      title: "Identify Bottlenecks",
      description:
        "We analyze your intake, communication, and routing workflows.",
      Icon: HiOutlineMagnifyingGlass,
    },
    {
      id: "2",
      title: "Design Targeted Automation",
      description:
        "We implement AI layers that eliminate repetitive triage and manual steps.",
      Icon: PiFlowArrowDuotone,
    },
    {
      id: "3",
      title: "Optimize for Performance",
      description:
        "Systems are tested, refined, and measured to ensure reliability and measurable improvement.",
      Icon: LuGauge,
    },
  ];

  const isDark = tone === "dark";
  return (
    <Section id="how-it-works" tone={tone}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Process
      </p>
      <h2
        className={`mt-3 text-2xl sm:text-3xl font-semibold tracking-tight ${
          isDark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        How we remove friction
      </h2>
      <p
        className={`mt-3 text-sm leading-relaxed max-w-2xl ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        A simple, three-step engagement model that maps your current operations,
        layers in AI where it matters most, and then hardens the system for
        real-world volume.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(({ id, title, description, Icon }) => (
          <Card key={id} variant="dark" className="items-center text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/15 text-indigo-300">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-3 text-sm font-semibold tracking-tight text-slate-50">
              {title}
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed flex-1">
              {description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
