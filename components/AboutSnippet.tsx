import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function AboutSnippet() {
  const t = useTranslations('about');

  return (
    <section className="py-28 px-6 bg-deep-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <AnimateIn animation="fade-left" className="lg:col-span-2">
            <div className="relative">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/maria-headshot.jpeg"
                  alt="Maria Cardona - Florida Realtor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold/20" />
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-right" delay={150} className="lg:col-span-3">
            <div>
              <span className="section-label">{t('label')}</span>
              <h2 className="font-heading text-4xl md:text-5xl text-off-white font-light mt-4 mb-2 leading-tight">
                {t('title')}
              </h2>
              <div className="h-px w-16 bg-gold mt-4 mb-8" />
              <p className="font-body text-off-white/60 text-sm leading-relaxed font-light mb-4">{t('body')}</p>
              <p className="font-body text-off-white/40 text-xs tracking-widest uppercase mb-10">{t('license')}</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-4 border border-gold text-gold hover:bg-gold hover:text-deep-black font-body text-xs tracking-[0.2em] uppercase font-semibold px-8 py-3.5 transition-all duration-200"
              >
                {t('cta')}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
