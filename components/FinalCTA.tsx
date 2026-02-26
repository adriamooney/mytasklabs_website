import Link from "next/link";

type FinalCTAProps = {
  calendlyUrl: string;
};

export function FinalCTA({ calendlyUrl }: FinalCTAProps) {
  return (
    <section id="contact" className="py-20 px-6 bg-neutral-850 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-stone-200 leading-relaxed">
          If your team handles high volumes of leads, emails, or coordination,
          you likely have untapped performance gains.
        </p>
        <p className="mt-2 text-lg font-medium text-white">
          Let&apos;s identify them.
        </p>
        <Link
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-white text-neutral-850 font-medium rounded-lg hover:bg-stone-100 transition-colors"
        >
          Book a Strategy Call →
        </Link>
      </div>
    </section>
  );
}
