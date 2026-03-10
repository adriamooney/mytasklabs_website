import { Section } from "./Section";
import { TeamMember } from "./TeamMember";

const teamMembers = [
  {
    name: "Adria Mooney",
    role: "Founder, MyTask Labs",
    imageSrc: "/images/adria.jpeg",
    imageAlt: "Adria Mooney",
    profileUrl: "https://www.linkedin.com/in/adriamooney/",
    paragraphs: [
      "Adria leads the strategy and implementation work at MyTask Labs to untangle complex workflows and remove bottlenecks.",
    ],
  },
  {
    name: "Chen Chen",
    role: "AI Systems Engineer",
    imageSrc: "/images/chenchen.jpeg",
    imageAlt: "Chen Chen",
    profileUrl: "https://www.linkedin.com/in/chchennn/",
    paragraphs: [
      "Chen specializes in designing robust AI pipelines that are reliable in production, not just impressive in demos.",
    ],
  },
  {
    name: "James DiPadua",
    role: "Operations & Workflow Architect",
    imageSrc: "/images/jms.jpeg",
    imageAlt: "James DiPadua",
    profileUrl: "https://www.linkedin.com/in/dientrepreneur/",
    paragraphs: [
      "James works with teams to translate messy real-world processes into clear, structured workflows.",
    ],
  },
];

type TeamProps = { tone?: "light" | "dark" };

export function Team({ tone = "dark" }: TeamProps) {
  return (
    <Section id="about" tone={tone}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        The Studio
      </p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
        The team behind the systems
      </h2>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl">
        MyTask Labs is a small, senior team at the intersection of operations,
        intelligent automation, and implementation. We design systems that
        ship—and stay reliable in production.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </Section>
  );
}

