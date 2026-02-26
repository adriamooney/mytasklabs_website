import Image from "next/image";

export function TheRealProblem() {
  return (
    <section className="py-16 px-6 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold text-neutral-850">
            Slow Response and Manual Processes Cost Revenue
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Most service teams don&apos;t lose business because of marketing.
            They lose it because of slow response and operational friction.
          </p>
          <ul className="mt-6 space-y-2 text-stone-600">
            <li>Leads aren&apos;t prioritized.</li>
            <li>Emails aren&apos;t triaged.</li>
            <li>Follow-ups are inconsistent.</li>
            <li>Internal knowledge is scattered.</li>
          </ul>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Even with CRMs and modern software, manual triage still dominates.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed font-medium">
            That&apos;s where performance drops.
          </p>
        </div>
        <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-md">
          <Image
            src="/images/homepage_img1.png"
            alt="Illustration of operational bottlenecks"
            width={480}
            height={360}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
