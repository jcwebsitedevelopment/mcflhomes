'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimateIn from './AnimateIn';

export default function FeaturedListings() {
  const t = useTranslations('listings');

  return (
    <section className="py-28 px-6 bg-carbon">
      <div className="max-w-4xl mx-auto text-center">

        <AnimateIn>
          <span className="section-label">{t('title')}</span>
          <h2 className="font-heading text-4xl md:text-5xl text-off-white font-light mt-4 leading-tight">
            {t('cta_heading')}
          </h2>
          <div className="gold-divider mt-4" />
          <p className="font-body text-off-white/40 text-sm leading-relaxed max-w-lg mx-auto mt-6">
            {t('cta_body')}
          </p>
        </AnimateIn>

        <AnimateIn delay={150} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/listings"
            className="w-full sm:w-auto bg-gold hover:bg-deep-black border border-gold text-deep-black hover:text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase px-10 py-4 transition-all duration-200"
          >
            {t('cta_btn')}
          </Link>
          <a
            href="https://wa.me/16893101026"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-off-white/20 hover:border-gold text-off-white/60 hover:text-gold font-body text-sm tracking-[0.15em] uppercase px-10 py-4 transition-all duration-200"
          >
            {t('cta_whatsapp')}
          </a>
        </AnimateIn>

        <AnimateIn delay={280}>
          <div className="mt-20 grid sm:grid-cols-3 gap-px border border-gold/10">
            {[
              { value: '8+', label: t('stat_years') },
              { value: '$200K–$1M+', label: t('stat_range') },
              { value: '4', label: t('stat_areas') },
            ].map((item) => (
              <div key={item.label} className="bg-deep-black/60 px-8 py-10">
                <p className="font-heading text-3xl text-gold font-light">{item.value}</p>
                <p className="font-body text-off-white/40 text-xs tracking-[0.15em] uppercase mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
