import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import RecentSales from '@/components/RecentSales';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('about', locale);
}

export default function AboutPage() {
  const t = useTranslations('pages.about');
  const about = useTranslations('about');
  const ap = useTranslations('about_page');

  return (
    <>
      <PageHero title={t('hero_title')} subtitle={t('hero_subtitle')} />

      <section className="py-24 px-6 bg-carbon">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="/maria-about.jpeg"
                alt="Maria Cardona"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-gold/20" />
          </div>

          {/* Content */}
          <div className="py-8">
            <span className="section-label">{about('label')}</span>
            <h2 className="font-heading text-4xl text-off-white font-light mt-4 mb-2">{about('title')}</h2>
            <div className="h-px w-16 bg-gold mt-4 mb-8" />

            <div className="space-y-5 font-body text-off-white/60 text-sm leading-relaxed font-light">
              <p>{ap('bio1')}</p>
              <p>{ap('bio2')}</p>
              <p>{ap('bio3')}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gold/10 pt-10">
              {[
                { value: '8', label: ap('stat1') },
                { value: '4', label: ap('stat2') },
                { value: '$356K', label: ap('stat3') },
                { value: '3', label: ap('stat4') },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl text-gold font-light">{stat.value}</p>
                  <p className="font-body text-off-white/40 text-xs tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-off-white/30 text-xs tracking-widest uppercase mt-8">
              {about('license')}
            </p>
          </div>
        </div>
      </section>

      <RecentSales />
    </>
  );
}
