import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('sell', locale);
}

export default function SellPage() {
  const t = useTranslations('pages.sell');
  const services = useTranslations('services');
  const s = useTranslations('sell_steps');

  const steps = [
    { number: '01', title: s('step1_title'), desc: s('step1_desc') },
    { number: '02', title: s('step2_title'), desc: s('step2_desc') },
    { number: '03', title: s('step3_title'), desc: s('step3_desc') },
    { number: '04', title: s('step4_title'), desc: s('step4_desc') },
    { number: '05', title: s('step5_title'), desc: s('step5_desc') },
  ];

  return (
    <>
      <PageHero title={t('hero_title')} subtitle={t('hero_subtitle')} />

      <section className="py-24 px-6 bg-carbon">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">{services('sellers_title')}</span>
            <div className="gold-divider mt-3" />
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex gap-10 p-10 border border-gold/10 hover:border-gold/25 transition-colors ${i % 2 === 0 ? 'bg-deep-black' : 'bg-carbon'}`}
              >
                <div className="shrink-0">
                  <span className="font-heading text-5xl text-gold/20 font-light leading-none">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-off-white font-light mb-3">{step.title}</h3>
                  <p className="font-body text-off-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-sm tracking-[0.15em] uppercase px-12 py-4 transition-colors duration-200"
            >
              {services('sellers_cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
