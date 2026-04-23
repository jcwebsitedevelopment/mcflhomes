import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimateIn from './AnimateIn';

export default function Services() {
  const t = useTranslations('services');

  return (
    <section className="py-28 px-6 bg-carbon">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">{t('title')}</span>
          <div className="gold-divider mt-3" />
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-0.5">
          <AnimateIn animation="fade-left" delay={100}>
            <div className="group relative bg-deep-black p-12 border border-gold/10 hover:border-gold/30 transition-all duration-300 h-full">
              <div className="mb-8">
                <div className="w-12 h-12 border border-gold/40 group-hover:border-gold flex items-center justify-center mb-6 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-heading text-3xl text-off-white font-light mb-4">{t('buyers_title')}</h3>
                <p className="font-body text-off-white/60 text-sm leading-relaxed font-light">{t('buyers_desc')}</p>
              </div>
              <Link href="/buy" className="inline-flex items-center gap-3 text-gold font-body text-xs tracking-[0.2em] uppercase font-medium group-hover:gap-5 transition-all duration-300">
                {t('buyers_cta')} <span>→</span>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-right" delay={200}>
            <div className="group relative bg-deep-black p-12 border border-gold/10 hover:border-gold/30 transition-all duration-300 h-full">
              <div className="mb-8">
                <div className="w-12 h-12 border border-gold/40 group-hover:border-gold flex items-center justify-center mb-6 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-heading text-3xl text-off-white font-light mb-4">{t('sellers_title')}</h3>
                <p className="font-body text-off-white/60 text-sm leading-relaxed font-light">{t('sellers_desc')}</p>
              </div>
              <Link href="/sell" className="inline-flex items-center gap-3 text-gold font-body text-xs tracking-[0.2em] uppercase font-medium group-hover:gap-5 transition-all duration-300">
                {t('sellers_cta')} <span>→</span>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
