'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.45}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleWords = t('title').split(' ');

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-15%', height: '130%' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/Orlando_Home_Walkthrough_Video_Generated.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Breathing overlay */}
      <div className="absolute inset-0 bg-deep-black animate-breathe" />
      {/* Gradient overlay — static */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/20 via-transparent to-deep-black/85 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Logo */}
        <div
          className="animate-fade-in-up flex justify-center mb-8"
          style={{ animationDelay: '100ms' }}
        >
          <Image
            src="/logo.png"
            alt="Maria Cardona Realtor"
            width={260}
            height={104}
            className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl"
            priority
            unoptimized
          />
        </div>

        {/* Title — word reveal */}
        <h1 className="font-heading text-5xl md:text-7xl font-light text-off-white leading-tight mb-6">
          {titleWords.map((word, i) => (
            <span key={i} className="word-reveal mr-3 md:mr-4">
              <span style={{ animationDelay: `${300 + i * 90}ms` }}>
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up font-body text-off-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ animationDelay: `${300 + titleWords.length * 90 + 200}ms` }}
        >
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: `${300 + titleWords.length * 90 + 400}ms` }}
        >
          <Link
            href="/listings"
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-colors duration-200"
          >
            {t('cta_search')}
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto border border-off-white/40 hover:border-gold text-off-white hover:text-gold font-body font-medium text-sm tracking-[0.15em] uppercase px-10 py-4 transition-all duration-200"
          >
            {t('cta_valuation')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in-up absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ animationDelay: `${300 + titleWords.length * 90 + 700}ms` }}
      >
        <div className="w-px h-10 bg-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>
    </section>
  );
}
