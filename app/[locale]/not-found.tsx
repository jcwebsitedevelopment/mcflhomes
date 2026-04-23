import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const locale = await getLocale();
  const isEs = locale === 'es';

  return (
    <section className="flex-1 flex flex-col items-center justify-center py-32 px-6 bg-carbon text-center">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/50 mb-6">
        {isEs ? 'Página no encontrada' : 'Page not found'}
      </p>

      <h1 className="font-heading text-[8rem] md:text-[12rem] text-gold/10 font-light leading-none select-none mb-2">
        404
      </h1>

      <div className="gold-divider my-8" />

      <p className="font-heading text-2xl md:text-3xl text-off-white font-light mb-4 max-w-md">
        {isEs
          ? 'Esta página no existe o fue removida'
          : "This page doesn’t exist or has been removed"}
      </p>

      <p className="font-body text-off-white/40 text-sm leading-relaxed max-w-sm mb-12">
        {isEs
          ? 'Verifica la URL o regresa al inicio para continuar explorando.'
          : 'Check the URL or go back home to keep exploring.'}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-sm tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200"
        >
          {isEs ? 'Volver al Inicio' : 'Back to Home'}
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 border border-gold/30 hover:border-gold text-off-white font-body text-sm tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200"
        >
          {isEs ? 'Contactar a María' : 'Contact Maria'}
        </Link>
      </div>
    </section>
  );
}
