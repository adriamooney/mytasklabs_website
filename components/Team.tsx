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

export function Team() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-850">Team</h2>
        <p className="mt-4 text-stone-600 leading-relaxed max-w-2xl">
          The work at MyTask Labs sits at the intersection of operations,
          intelligent automation, and practical implementation. 
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

