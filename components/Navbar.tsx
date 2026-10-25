'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/buy', label: t('buy') },
    { href: '/sell', label: t('sell') },
    { href: '/listings', label: t('listings') },
    { href: '/about', label: t('about') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  const toggleLocale = () => {
    const next = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: next });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-black/95 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.webp"
              alt="Maria Cardona Realtor"
              width={180}
              height={72}
              className="h-20 w-auto object-contain"
              priority
              unoptimized
            />
            <div className="w-px h-10 bg-gold/20" />
            <Image
              src="/blueprint-realty-logo.webp"
              alt="Blueprint Realty"
              width={80}
              height={80}
              className="h-20 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs tracking-[0.15em] uppercase font-body font-medium transition-colors duration-200 group ${
                    active ? 'text-gold' : 'text-off-white/70 hover:text-gold'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-200 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="text-xs tracking-[0.2em] uppercase font-body font-medium border border-gold/30 hover:border-gold text-gold/70 hover:text-gold px-3 py-1.5 transition-all duration-200"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 bg-gold hover:bg-deep-black border border-gold text-deep-black hover:text-gold text-xs tracking-[0.15em] uppercase font-body font-semibold px-5 py-2.5 transition-all duration-200"
            >
              {t('search')}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-off-white transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-px bg-off-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-off-white transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-carbon border-t border-gold/10">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-body font-medium transition-colors ${
                    active ? 'text-gold' : 'text-off-white/80 hover:text-gold'
                  }`}
                >
                  {active && <span className="w-3 h-px bg-gold shrink-0" />}
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center bg-gold text-deep-black text-xs tracking-[0.15em] uppercase font-body font-semibold px-5 py-3"
            >
              {t('search')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
