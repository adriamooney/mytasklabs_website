import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-stone-200 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="text-stone-600 text-sm">
          <p className="font-medium text-neutral-850">MyTask Labs, LLC</p>
          <p className="mt-1">Registered in: 8 The Green, Suite B, Dover, DE 19901</p>
          <p>Doing business in Portland, OR</p>
          <p className="mt-2">contact@mytasklabs.com</p>
          <p>503.660.3022</p>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link
            href="/privacy"
            className="text-stone-600 hover:text-neutral-850 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-stone-600 hover:text-neutral-850 transition-colors"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
