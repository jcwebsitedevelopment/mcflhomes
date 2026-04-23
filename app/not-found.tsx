import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-carbon flex flex-col items-center justify-center py-32 px-6 text-center">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/50 mb-6">
        Page not found
      </p>

      <h1 className="font-heading text-[8rem] md:text-[12rem] text-gold/10 font-light leading-none select-none mb-2">
        404
      </h1>

      <div className="h-px w-12 bg-gold mx-auto my-8" />

      <p className="font-heading text-2xl md:text-3xl text-off-white font-light mb-4 max-w-md">
        This page doesn&apos;t exist or has been removed
      </p>

      <p className="font-body text-off-white/40 text-sm leading-relaxed max-w-sm mb-12">
        Check the URL or go back home to keep exploring.
      </p>

      <Link
        href="/en"
        className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-sm tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
