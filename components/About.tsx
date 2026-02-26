import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">
        <div className="flex-shrink-0">
          <Image
            src="/images/professional-photo-2.jpeg"
            alt="Professional headshot"
            width={224}
            height={224}
            className="rounded-full object-cover w-56 h-56"
          />
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold text-neutral-850">About</h2>
          {/* <p className="mt-4 text-stone-600 leading-relaxed">
            My work sits at the intersection of operations and intelligent
            automation.
          </p> */}
          <p className="mt-4 text-stone-600 leading-relaxed">
            I&apos;ve spent years leading implementation projects and optimizing
            business systems for growing teams. Through that experience, I saw a
            consistent pattern: most organizations don&apos;t lack software —
            they lack structured workflows.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Today, I design AI-powered automation systems that sit on top of
            existing tools to eliminate repetitive work, prioritize high-value
            tasks, and improve operational performance.
          </p>
          {/* <p className="mt-4 text-stone-600 leading-relaxed">
            I focus on practical systems that deliver measurable impact — not
            hype-driven experimentation.
          </p> */}
        </div>
      </div>
    </section>
  );
}
