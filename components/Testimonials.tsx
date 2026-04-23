import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

const testimonials = [
  {
    id: 1,
    name: 'Carlos & Ana Rodríguez',
    location: 'Orlando, FL',
    stars: 5,
    text: '"Maria made our home-buying experience seamless. Her knowledge of the Orlando market is exceptional, and she was with us every step of the way."',
  },
  {
    id: 2,
    name: 'Jennifer Thompson',
    location: 'The Villages, FL',
    stars: 5,
    text: `"We sold our home in just 12 days at above asking price. Maria's marketing strategy and negotiation skills are second to none."`,
  },
  {
    id: 3,
    name: 'Miguel Fernández',
    location: 'Orlando, FL',
    stars: 5,
    text: '"Como comprador por primera vez, necesitaba una guía experta. María fue paciente, honesta y siempre disponible. ¡100% recomendada!"',
  },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-28 px-6 bg-carbon">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">{t('title')}</span>
          <p className="font-heading text-off-white/50 text-lg font-light mt-3">{t('subtitle')}</p>
          <div className="gold-divider mt-4" />
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 120}>
              <div className="bg-deep-black border border-gold/10 p-8 relative h-full">
                <div className="font-heading text-7xl text-gold/10 leading-none absolute top-4 left-6 select-none">"</div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.stars }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-off-white/60 text-sm leading-relaxed font-light mb-6 relative z-10">{item.text}</p>
                <div className="border-t border-gold/10 pt-5">
                  <p className="font-body text-off-white text-sm font-medium">{item.name}</p>
                  <p className="font-body text-gold/60 text-xs tracking-wider mt-0.5">{item.location}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
