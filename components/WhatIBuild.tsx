import Image from "next/image";

export function WhatIBuild() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-md order-2 lg:order-1">
          <Image
            src="/images/homepage_img2.jpeg"
            alt="Structured automation systems"
            width={480}
            height={360}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
        <div className="min-w-0 flex-1 order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-neutral-850">
            Structured Automation Systems
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            I design and implement AI-powered systems that improve response
            speed and reduce manual decision-making.
          </p>
          <p className="mt-2 text-stone-600">Examples:</p>
          <ul className="mt-3 space-y-2 text-stone-600 list-disc list-inside">
            <li>Automatically score and prioritize inbound leads</li>
            <li>Instantly route high-value opportunities</li>
            <li>Summarize and categorize incoming emails</li>
            <li>Draft follow-up responses</li>
            <li>Surface action items automatically</li>
          </ul>
          <p className="mt-6 text-stone-600 leading-relaxed">
            These systems sit on top of your existing tools. No rip-and-replace
            required.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed">
            The goal is simple: Increase speed. Increase consistency. Increase
            conversion.
          </p>
        </div>
      </div>
    </section>
  );
}
