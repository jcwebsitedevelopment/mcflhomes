'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const AREAS = ['Orlando', 'Kissimmee', 'Davenport', 'Champions Gate'];

const PRICES = [
  '100000', '150000', '200000', '250000', '300000',
  '350000', '400000', '450000', '500000', '600000',
  '750000', '1000000',
];

const formatPrice = (val: string) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(val));

const serviceAreas = [
  {
    name: 'Orlando',
    desc: 'Urban living, culture, and world-class amenities in the heart of Central Florida.',
    image: 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?w=600&q=80',
  },
  {
    name: 'Kissimmee',
    desc: 'Family-friendly communities close to theme parks and major employment corridors.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
  },
  {
    name: 'Davenport',
    desc: 'Affordable new construction and investment-friendly properties west of Orlando.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  },
  {
    name: 'Champions Gate',
    desc: 'Premier golf community with resort-style living and short-term rental potential.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
];

interface Filters {
  area: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  baths: string;
  type: string;
}

const emptyFilters: Filters = { area: '', minPrice: '', maxPrice: '', beds: '', baths: '', type: '' };

export default function ListingsContent({ idxUrl }: { idxUrl: string }) {
  const t = useTranslations('listings');
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [applied, setApplied] = useState<Filters>(emptyFilters);

  const set = (key: keyof Filters, value: string) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const applyFilters = () => setApplied({ ...filters });
  const resetFilters = () => { setFilters(emptyFilters); setApplied(emptyFilters); };

  const buildSrc = () => {
    if (!idxUrl) return '';
    const p = new URLSearchParams();
    if (applied.area) p.set('city', applied.area);
    if (applied.minPrice) p.set('minprice', applied.minPrice);
    if (applied.maxPrice) p.set('maxprice', applied.maxPrice);
    if (applied.beds) p.set('beds_min', applied.beds);
    if (applied.baths) p.set('baths_min', applied.baths);
    if (applied.type) p.set('proptype', applied.type);
    const qs = p.toString();
    return qs ? `${idxUrl}&${qs}` : idxUrl;
  };

  const selectClass =
    'w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white/80 font-body text-xs px-3 py-2.5 outline-none transition-colors appearance-none cursor-pointer';

  return (
    <>
      {/* ── Filter bar ── */}
      <section className="sticky top-20 z-40 bg-carbon/95 backdrop-blur border-b border-gold/10 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 items-end">

            {/* Area */}
            <div className="lg:col-span-1">
              <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-gold/60 mb-1.5">
                {t('filter_area')}
              </label>
              <select value={filters.area} onChange={(e) => set('area', e.target.value)} className={selectClass}>
                <option value="">{t('filter_area_all')}</option>
                {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            {/* Min Price */}
            <div className="lg:col-span-1">
              <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-gold/60 mb-1.5">
                {t('filter_min')}
              </label>
              <select value={filters.minPrice} onChange={(e) => set('minPrice', e.target.value)} className={selectClass}>
                <option value="">{t('filter_any')}</option>
                {PRICES.map((p) => <option key={p} value={p}>{formatPrice(p)}</option>)}
              </select>
            </div>

            {/* Max Price */}
            <div className="lg:col-span-1">
              <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-gold/60 mb-1.5">
                {t('filter_max')}
              </label>
              <select value={filters.maxPrice} onChange={(e) => set('maxPrice', e.target.value)} className={selectClass}>
                <option value="">{t('filter_any')}</option>
                {PRICES.map((p) => <option key={p} value={p}>{formatPrice(p)}</option>)}
              </select>
            </div>

            {/* Beds */}
            <div>
              <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-gold/60 mb-1.5">
                {t('filter_beds')}
              </label>
              <select value={filters.beds} onChange={(e) => set('beds', e.target.value)} className={selectClass}>
                <option value="">{t('filter_any')}</option>
                {['1', '2', '3', '4', '5'].map((n) => <option key={n} value={n}>{n}+</option>)}
              </select>
            </div>

            {/* Baths */}
            <div>
              <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-gold/60 mb-1.5">
                {t('filter_baths')}
              </label>
              <select value={filters.baths} onChange={(e) => set('baths', e.target.value)} className={selectClass}>
                <option value="">{t('filter_any')}</option>
                {['1', '2', '3', '4'].map((n) => <option key={n} value={n}>{n}+</option>)}
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-gold/60 mb-1.5">
                {t('filter_type')}
              </label>
              <select value={filters.type} onChange={(e) => set('type', e.target.value)} className={selectClass}>
                <option value="">{t('filter_type_all')}</option>
                <option value="sfh">{t('filter_type_sfh')}</option>
                <option value="condo">{t('filter_type_condo')}</option>
                <option value="land">{t('filter_type_land')}</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={applyFilters}
                className="flex-1 bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-[10px] tracking-[0.2em] uppercase py-2.5 transition-colors duration-200"
              >
                {t('filter_search')}
              </button>
              <button
                onClick={resetFilters}
                className="px-3 border border-gold/30 hover:border-gold text-gold/60 hover:text-gold font-body text-[10px] tracking-wider uppercase transition-all duration-200"
              >
                ↺
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── IDX area ── */}
      <section className="bg-deep-black">
        {idxUrl ? (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="section-label">{t('idx_live_title')}</span>
                <p className="font-body text-off-white/30 text-xs mt-1">{t('idx_live_desc')}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-body text-green-500/70 text-xs tracking-wider uppercase">Live</span>
              </div>
            </div>
            <div className="border border-gold/10">
              <iframe
                src={buildSrc()}
                width="100%"
                height="800"
                frameBorder="0"
                scrolling="yes"
                title="Stellar MLS Property Search"
                className="block"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            {/* MLS icon */}
            <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="section-label">{t('idx_pending_title')}</span>
            <div className="gold-divider my-4" />
            <p className="font-body text-off-white/40 text-sm leading-relaxed max-w-md mx-auto mb-10">
              {t('idx_pending_desc')}
            </p>
            {/* Steps */}
            <div className="grid sm:grid-cols-3 gap-4 text-left mb-12">
              {[
                { n: '01', text: 'Log into Stellar MLS → Agent Tools → Public Website' },
                { n: '02', text: 'Copy your IDX iframe URL or embed code' },
                { n: '03', text: 'Add NEXT_PUBLIC_IDX_URL to .env.local — done' },
              ].map((s) => (
                <div key={s.n} className="border border-gold/10 p-5">
                  <p className="font-heading text-3xl text-gold/20 font-light mb-2">{s.n}</p>
                  <p className="font-body text-off-white/40 text-xs leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-colors"
            >
              {t('idx_pending_cta')}
            </Link>
          </div>
        )}
      </section>

      {/* ── Service areas ── */}
      <section className="py-24 px-6 bg-carbon">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">{t('areas_title')}</span>
            <p className="font-heading text-off-white/40 text-lg font-light mt-3">{t('areas_subtitle')}</p>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div key={area.name} className="group relative h-64 overflow-hidden cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={area.image}
                  alt={area.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-deep-black/60 group-hover:bg-deep-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-2xl text-off-white font-light">{area.name}</h3>
                  <p className="font-body text-off-white/0 group-hover:text-off-white/60 text-xs leading-relaxed mt-2 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    {area.desc}
                  </p>
                  <div className="w-0 group-hover:w-8 h-px bg-gold mt-2 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
