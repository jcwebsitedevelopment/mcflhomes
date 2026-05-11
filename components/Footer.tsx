import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const links = [
    { href: '/buy', label: nav('buy') },
    { href: '/sell', label: nav('sell') },
    { href: '/listings', label: nav('listings') },
    { href: '/about', label: nav('about') },
    { href: '/blog', label: nav('blog') },
    { href: '/contact', label: nav('contact') },
    { href: '/mortgage-calculator', label: t('calculator') },
  ];

  return (
    <footer className="bg-carbon border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/logo.webp"
                alt="Maria Cardona Realtor"
                width={280}
                height={112}
                className="h-24 w-auto object-contain"
                unoptimized
              />
              <div className="w-px h-12 bg-gold/20" />
              <Image
                src="/lpt-realty-logo.webp"
                alt="LPT Realty"
                width={100}
                height={100}
                className="h-24 w-auto object-contain"
                unoptimized
              />
            </div>
            <p className="font-body text-off-white/40 text-xs leading-relaxed max-w-xs mb-6">
              {t('tagline')}
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mcflhomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gold/20 hover:border-gold flex items-center justify-center text-gold/50 hover:text-gold transition-all"
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/maria.cardona.818178"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gold/20 hover:border-gold flex items-center justify-center text-gold/50 hover:text-gold transition-all"
                aria-label="Facebook"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://wa.me/16893101026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gold/20 hover:border-gold flex items-center justify-center text-gold/50 hover:text-gold transition-all"
                aria-label="WhatsApp"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="section-label mb-6">{t('links_title')}</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-off-white/40 hover:text-gold text-xs tracking-wider transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">{t('contact_title')}</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+16893101026" className="font-body text-off-white/40 hover:text-gold text-xs tracking-wider transition-colors">
                  +1 (689) 310-1026
                </a>
              </li>
              <li>
                <a href="mailto:mcardonahomes@gmail.com" className="font-body text-off-white/40 hover:text-gold text-xs tracking-wider transition-colors">
                  mcardonahomes@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <p className="font-body text-off-white/30 text-xs leading-relaxed">
                  {t('region')}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-8 space-y-5">
          {/* Equal Housing + License */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            {/* Equal Housing Logo — HUD standard */}
            <div className="flex items-center gap-3 shrink-0">
              <svg width="38" height="38" viewBox="0 0 100 110" fill="none" className="text-off-white/40">
                <polygon points="50,5 5,48 18,48 18,105 82,105 82,48 95,48" stroke="currentColor" strokeWidth="5" fill="none" strokeLinejoin="round"/>
                <circle cx="50" cy="58" r="9" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path d="M34 98c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
              <div>
                <p className="font-body text-off-white/40 text-[10px] tracking-widest uppercase leading-tight font-semibold">Equal Housing</p>
                <p className="font-body text-off-white/40 text-[10px] tracking-widest uppercase leading-tight font-semibold">Opportunity</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-body text-off-white/25 text-xs tracking-wider">
                {t('license')}
              </p>
              <p className="font-body text-off-white/20 text-[10px] leading-relaxed max-w-xl">
                We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
              </p>
            </div>
          </div>

          {/* Legal links + copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="font-body text-off-white/25 hover:text-gold text-xs tracking-wider transition-colors">
                {t('privacy')}
              </Link>
              <span className="text-off-white/15">·</span>
              <Link href="/terms" className="font-body text-off-white/25 hover:text-gold text-xs tracking-wider transition-colors">
                {t('terms')}
              </Link>
            </div>
            <p className="font-body text-off-white/25 text-xs tracking-wider">
              © {new Date().getFullYear()} Maria Cardona. {t('rights')}
              {' '}·{' '}
              <a href="https://jcwebdevelopment.com" target="_blank" rel="noopener" className="text-off-white/20 hover:text-off-white/40 transition-colors no-underline">Website by JC Web Development</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
