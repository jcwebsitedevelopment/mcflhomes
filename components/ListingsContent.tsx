'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

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
    image: 'https://images.unsplash.com/photo-1601051297657-39a9b2ce2cdc?w=600&q=80',
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

type Status = 'idle' | 'sending' | 'success' | 'error';

interface SearchForm {
  name: string;
  email: string;
  phone: string;
  area: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  baths: string;
  type: string;
  notes: string;
}

const emptyForm: SearchForm = {
  name: '', email: '', phone: '', area: '', minPrice: '',
  maxPrice: '', beds: '', baths: '', type: '', notes: '',
};

export default function ListingsContent({ idxUrl }: { idxUrl: string }) {
  const t = useTranslations('listings');
  const tc = useTranslations('contact');
  const [form, setForm] = useState<SearchForm>(emptyForm);
  const [status, setStatus] = useState<Status>('idle');

  const set = (k: keyof SearchForm, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const message = [
      `PROPERTY SEARCH REQUEST`,
      ``,
      `Area: ${form.area || 'Any'}`,
      `Budget: ${form.minPrice ? formatPrice(form.minPrice) : 'Any'} – ${form.maxPrice ? formatPrice(form.maxPrice) : 'Any'}`,
      `Bedrooms: ${form.beds || 'Any'}+`,
      `Bathrooms: ${form.baths || 'Any'}+`,
      `Property Type: ${form.type || 'Any'}`,
      form.notes ? `\nAdditional notes:\n${form.notes}` : '',
    ].filter(Boolean).join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white font-body text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-off-white/20';

  const selectClass =
    'w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white/80 font-body text-sm px-4 py-3.5 outline-none transition-colors appearance-none cursor-pointer';

  return (
    <>
      {/* ── Property Search Form ── */}
      <section className="py-24 px-6 bg-deep-black">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <span className="section-label">{t('search_title')}</span>
            <h2 className="font-heading text-4xl text-off-white font-light mt-4">
              {t('form_title')}
            </h2>
            <div className="gold-divider mt-4" />
            <p className="font-body text-off-white/40 text-sm leading-relaxed max-w-lg mx-auto mt-6">
              {t('form_subtitle')}
            </p>
          </div>

          {status === 'success' ? (
            <div className="border border-gold/30 p-16 text-center">
              <div className="w-12 h-12 border border-gold flex items-center justify-center mx-auto mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-heading text-2xl text-off-white font-light">{t('form_success')}</p>
              <p className="font-body text-off-white/40 text-sm mt-3">{t('form_success_sub')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Contact info */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{tc('name')} *</label>
                  <input type="text" required value={form.name} onChange={(e) => set('name', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{tc('email')} *</label>
                  <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{tc('phone')}</label>
                  <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputClass} />
                </div>
              </div>

              {/* Search criteria */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{t('filter_area')}</label>
                  <select value={form.area} onChange={(e) => set('area', e.target.value)} className={selectClass}>
                    <option value="">{t('filter_area_all')}</option>
                    {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{t('filter_min')}</label>
                  <select value={form.minPrice} onChange={(e) => set('minPrice', e.target.value)} className={selectClass}>
                    <option value="">{t('filter_any')}</option>
                    {PRICES.map((p) => <option key={p} value={p}>{formatPrice(p)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{t('filter_max')}</label>
                  <select value={form.maxPrice} onChange={(e) => set('maxPrice', e.target.value)} className={selectClass}>
                    <option value="">{t('filter_any')}</option>
                    {PRICES.map((p) => <option key={p} value={p}>{formatPrice(p)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{t('filter_beds')}</label>
                  <select value={form.beds} onChange={(e) => set('beds', e.target.value)} className={selectClass}>
                    <option value="">{t('filter_any')}</option>
                    {['1', '2', '3', '4', '5'].map((n) => <option key={n} value={n}>{n}+</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{t('filter_baths')}</label>
                  <select value={form.baths} onChange={(e) => set('baths', e.target.value)} className={selectClass}>
                    <option value="">{t('filter_any')}</option>
                    {['1', '2', '3', '4'].map((n) => <option key={n} value={n}>{n}+</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{t('filter_type')}</label>
                  <select value={form.type} onChange={(e) => set('type', e.target.value)} className={selectClass}>
                    <option value="">{t('filter_type_all')}</option>
                    <option value="sfh">{t('filter_type_sfh')}</option>
                    <option value="condo">{t('filter_type_condo')}</option>
                    <option value="land">{t('filter_type_land')}</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">{t('form_notes')}</label>
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={(e) => set('notes', e.target.value)}
                  placeholder={t('form_notes_placeholder')}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="font-body text-red-400/80 text-xs tracking-wider">{tc('error')}</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gold hover:bg-deep-black border border-gold text-deep-black hover:text-gold disabled:opacity-60 disabled:cursor-not-allowed font-body font-semibold text-sm tracking-[0.2em] uppercase py-4 transition-all duration-200"
              >
                {status === 'sending' ? tc('sending') : t('form_submit')}
              </button>
            </form>
          )}
        </div>
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
