import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

const transactions = [
  {
    id: 1,
    address: '1519 Diamond Loop Dr',
    city: 'Kissimmee, FL 34744',
    price: '$375,000',
    date: 'March 2026',
    role: 'seller' as const,
  },
  {
    id: 2,
    address: '525 Aster Dr',
    city: 'Davenport, FL 33897',
    price: '$340,000',
    date: 'August 2025',
    role: 'buyer' as const,
  },
  {
    id: 3,
    address: '4413 Small Creek Rd',
    city: 'Kissimmee, FL 34744',
    price: '$350,000',
    date: 'December 2024',
    role: 'buyer' as const,
  },
  {
    id: 4,
    address: '4417 Small Creek Rd',
    city: 'Kissimmee, FL 34744',
    price: '$359,990',
    date: 'December 2024',
    role: 'buyer' as const,
  },
];

const stats = [
  { value: '2', labelKey: 'stats_recent' },
  { value: '4', labelKey: 'stats_total' },
  { value: '$340K–$375K', labelKey: 'stats_range' },
  { value: '$356K', labelKey: 'stats_avg' },
];

export default function RecentSales() {
  const t = useTranslations('recent_sales');

  return (
    <section className="py-28 px-6 bg-deep-black">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="section-label">{t('label')}</span>
          <h2 className="font-heading text-4xl text-off-white font-light mt-4">{t('title')}</h2>
          <p className="font-heading text-off-white/40 text-lg font-light mt-3">{t('subtitle')}</p>
          <div className="gold-divider mt-4" />
        </AnimateIn>

        {/* Stats bar */}
        <AnimateIn delay={100} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/10 mb-12">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="bg-carbon p-6 text-center">
              <p className="font-heading text-3xl text-gold font-light">{stat.value}</p>
              <p className="font-body text-off-white/40 text-xs tracking-widest uppercase mt-2">{t(stat.labelKey as Parameters<typeof t>[0])}</p>
            </div>
          ))}
        </AnimateIn>

        {/* Transaction cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {transactions.map((tx, i) => (
            <AnimateIn key={tx.id} delay={i * 100}>
              <div className="bg-carbon border border-gold/10 hover:border-gold/30 transition-all duration-300 p-6 h-full flex flex-col">
                {/* Role badge */}
                <div className="mb-5">
                  <span className={`inline-block font-body text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 ${
                    tx.role === 'seller'
                      ? 'bg-gold text-deep-black'
                      : 'border border-gold/50 text-gold'
                  }`}>
                    {t(tx.role as Parameters<typeof t>[0])}
                  </span>
                </div>

                {/* Price */}
                <p className="font-heading text-2xl text-off-white font-light mb-1">{tx.price}</p>

                {/* Address */}
                <p className="font-body text-off-white/70 text-sm font-medium mb-1">{tx.address}</p>
                <p className="font-body text-off-white/35 text-xs tracking-wider mb-4 flex-1">{tx.city}</p>

                {/* Date */}
                <div className="border-t border-gold/10 pt-4">
                  <p className="font-body text-xs text-off-white/30 tracking-widest uppercase">
                    {t('closed')} · {tx.date}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Realtor.com attribution */}
        <AnimateIn delay={450} className="border border-gold/10 bg-carbon p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="4" fill="#D92228"/>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="serif">R</text>
              </svg>
              <span className="font-body text-sm font-semibold text-[#D92228] tracking-wide">realtor.com</span>
            </div>
            <div className="w-px h-8 bg-gold/15 hidden sm:block" />
            <p className="font-body text-off-white/40 text-xs tracking-wider">{t('zillow_verified')}</p>
          </div>
          <a
            href="https://www.realtor.com/realestateagents/65eea762c13715559291edd0"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 border border-gold/30 hover:border-gold text-gold/70 hover:text-gold font-body text-xs tracking-[0.2em] uppercase font-medium px-5 py-2.5 transition-all duration-200"
          >
            {t('zillow_cta')} →
          </a>
        </AnimateIn>

        {/* Zillow attribution */}
        <AnimateIn delay={550} className="border border-gold/10 bg-carbon p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="4" fill="#006AFF"/>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Z</text>
              </svg>
              <span className="font-body text-sm font-semibold text-[#006AFF] tracking-wide">zillow.com</span>
            </div>
            <div className="w-px h-8 bg-gold/15 hidden sm:block" />
            <p className="font-body text-off-white/40 text-xs tracking-wider">{t('zillow_text')}</p>
          </div>
          <a
            href="https://www.zillow.com/profile/mcardonahomes"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 border border-gold/30 hover:border-gold text-gold/70 hover:text-gold font-body text-xs tracking-[0.2em] uppercase font-medium px-5 py-2.5 transition-all duration-200"
          >
            {t('zillow_btn')} →
          </a>
        </AnimateIn>

      </div>
    </section>
  );
}
