import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('testimonials', locale);
}

const testimonials = [
  { id: 1, name: 'Carlos & Ana Rodríguez', location: 'Orlando, FL', stars: 5, text: '"Maria made our home-buying experience seamless. Her knowledge of the Orlando market is exceptional, and she was with us every step of the way. We could not have asked for a better realtor."' },
  { id: 2, name: 'Jennifer Thompson', location: 'The Villages, FL', stars: 5, text: '"We sold our home in just 12 days at above asking price. Maria\'s marketing strategy and negotiation skills are second to none. She turned what could have been a stressful process into an exciting one."' },
  { id: 3, name: 'Miguel Fernández', location: 'Orlando, FL', stars: 5, text: '"Como comprador por primera vez, necesitaba una guía experta. María fue paciente, honesta y siempre disponible. Encontré mi hogar perfecto gracias a ella. ¡100% recomendada!"' },
  { id: 4, name: 'Patricia & John Williams', location: 'Kissimmee, FL', stars: 5, text: '"Maria went above and beyond to help us find our retirement home in Central Florida. She was thorough, responsive, and genuinely cared about finding us the perfect fit."' },
  { id: 5, name: 'Luis Morales', location: 'Orlando, FL', stars: 5, text: '"María nos ayudó a vender nuestra casa y comprar una nueva al mismo tiempo. Coordinó todo perfectamente. Su profesionalismo y dedicación son incomparables."' },
  { id: 6, name: 'Sarah & David Chen', location: 'Lake Mary, FL', stars: 5, text: '"From our first meeting to closing, Maria was an absolute professional. She knew the market inside out and made sure we got the best possible deal on our new home."' },
];

export default function TestimonialsPage() {
  const t = useTranslations('pages.testimonials');
  const testimonialT = useTranslations('testimonials');
  const contact = useTranslations('contact');

  return (
    <>
      <PageHero title={t('hero_title')} subtitle={t('hero_subtitle')} />

      <section className="py-24 px-6 bg-carbon">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-deep-black border border-gold/10 p-8 relative">
                <div className="font-heading text-7xl text-gold/10 leading-none absolute top-4 left-6 select-none">"</div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-off-white/60 text-sm leading-relaxed font-light mb-6 relative z-10">{item.text}</p>
                <div className="border-t border-gold/10 pt-5">
                  <p className="font-body text-off-white text-sm font-medium">{item.name}</p>
                  <p className="font-body text-gold/50 text-xs tracking-wider mt-0.5">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center border border-gold/20 p-12">
            <p className="section-label mb-4">{testimonialT('title')}</p>
            <p className="font-heading text-3xl text-off-white font-light mb-8">
              {testimonialT('cta_title')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-colors"
            >
              {contact('title')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
