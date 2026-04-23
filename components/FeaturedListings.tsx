import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

const placeholderListings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
    price: '$485,000',
    address: '1234 Palm Grove Dr',
    city: 'Orlando, FL 32801',
    beds: 4, baths: 3, sqft: '2,450',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    price: '$329,000',
    address: '5678 Lake View Blvd',
    city: 'The Villages, FL 32162',
    beds: 3, baths: 2, sqft: '1,820',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    price: '$625,000',
    address: '910 Sunset Bay Ct',
    city: 'Orlando, FL 32836',
    beds: 5, baths: 4, sqft: '3,200',
  },
];

export default function FeaturedListings() {
  const t = useTranslations('listings');

  return (
    <section className="py-28 px-6 bg-carbon">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-8">
          <span className="section-label">{t('title')}</span>
          <p className="font-heading text-off-white/50 text-lg font-light mt-3">{t('subtitle')}</p>
          <div className="gold-divider mt-4" />
        </AnimateIn>

        <AnimateIn delay={100} className="mb-12">
          <div className="border border-gold/20 bg-deep-black/50 p-6 text-center">
            <p className="font-body text-gold text-xs tracking-[0.2em] uppercase font-medium mb-1">{t('coming_soon')}</p>
            <p className="font-body text-off-white/40 text-xs">{t('placeholder_note')}</p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholderListings.map((listing, i) => (
            <AnimateIn key={listing.id} delay={i * 120}>
              <div className="group bg-deep-black border border-gold/10 hover:border-gold/30 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.address}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-deep-black/20" />
                  <div className="absolute top-4 left-4 bg-gold text-deep-black font-body text-xs font-bold px-3 py-1 tracking-wider">
                    {listing.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-off-white font-light mb-1">{listing.address}</h3>
                  <p className="font-body text-off-white/40 text-xs tracking-wider mb-4">{listing.city}</p>
                  <div className="flex items-center gap-4 border-t border-gold/10 pt-4 mb-5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-gold text-sm font-body font-medium">{listing.beds}</span>
                      <span className="text-off-white/40 text-xs font-body">{t('beds')}</span>
                    </div>
                    <div className="w-px h-4 bg-gold/20" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-gold text-sm font-body font-medium">{listing.baths}</span>
                      <span className="text-off-white/40 text-xs font-body">{t('baths')}</span>
                    </div>
                    <div className="w-px h-4 bg-gold/20" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-gold text-sm font-body font-medium">{listing.sqft}</span>
                      <span className="text-off-white/40 text-xs font-body">{t('sqft')}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block text-center border border-gold/30 hover:border-gold hover:bg-gold hover:text-deep-black text-gold font-body text-xs tracking-[0.15em] uppercase font-medium py-2.5 transition-all duration-200"
                  >
                    {t('view')}
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400} className="text-center mt-12">
          <Link
            href="/listings"
            className="inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-deep-black font-body text-xs tracking-[0.2em] uppercase font-semibold px-10 py-3.5 transition-all duration-200"
          >
            {t('title')} →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
