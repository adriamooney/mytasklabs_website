import {
  LuClipboardList,
  LuSparkles,
  LuMailSearch,
  LuFileCog,
  LuLayers,
} from "react-icons/lu";
import { Card } from "./Card";
import { Section } from "./Section";

const services = [
  {
    title: "AI Workflow Audit",
    Icon: LuClipboardList,
    description:
      "A structured review of your intake, communication, and coordination systems. Identifies operational bottlenecks, missed opportunities, and automation potential with a clear implementation roadmap and ROI estimate.",
  },
  {
    title: "Lead Conversion Automation",
    Icon: LuSparkles,
    description:
      "Automated lead scoring, prioritization, routing, and follow-up drafting to improve response speed and conversion rates without adding staff.",
  },
  {
    title: "Email & Communication Triage Systems",
    Icon: LuMailSearch,
    description:
      "AI-powered categorization and summarization of inbound emails and messages to reduce manual review time and surface high-priority items instantly.",
  },
  {
    title: "Intake & Form Processing Automation",
    Icon: LuFileCog,
    description:
      "Automatically analyze form submissions, extract key information, summarize requests, and assign next steps to the appropriate team member.",
  },
  {
    title: "Operational Reporting & Visibility",
    Icon: LuClipboardList,
    description:
      "Automated performance tracking for response time, lead handling, and workflow efficiency to identify operational gaps and improve accountability.",
  },
  {
    title: "CRM Optimization & Automation Layering",
    Icon: LuLayers,
    description:
      "Enhance existing CRMs with AI-driven prioritization, routing logic, and automated follow-up workflows without replacing current systems.",
  },
];

type ServicesProps = { tone?: "light" | "dark" };

export function Services({ tone = "dark" }: ServicesProps) {
  const isDark = tone === "dark";
  return (
    <Section id="services" tone={tone}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Solutions
      </p>
      <h2
        className={`mt-3 text-2xl sm:text-3xl font-semibold tracking-tight ${
          isDark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        What we deliver
      </h2>
      <p
        className={`mt-3 text-sm leading-relaxed max-w-2xl ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        From workflow audits to fully automated intake and lead handling—we help
        you remove friction where it hurts most.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ title, description, Icon }) => (
          <Card key={title} variant={isDark ? "lightOnDark" : "light"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-500">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
