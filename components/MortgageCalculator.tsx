'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function calcPayment(price: string, down: string, rate: string, term: string): number | null {
  const p = parseFloat(price);
  const d = parseFloat(down);
  const r = parseFloat(rate);
  const t = parseFloat(term);
  if (!p || isNaN(d) || !r || !t) return null;

  const principal = p * (1 - d / 100);
  const monthlyRate = r / 100 / 12;
  const months = t * 12;

  if (monthlyRate === 0) return Math.round(principal / months);

  const payment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return Math.round(payment);
}

export default function MortgageCalculator() {
  const t = useTranslations('calculator');

  const [price, setPrice] = useState('350000');
  const [down, setDown] = useState('20');
  const [rate, setRate] = useState('7.0');
  const [term, setTerm] = useState('30');

  const result = calcPayment(price, down, rate, term);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="py-28 px-6 bg-deep-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('title')}</span>
          <p className="font-heading text-off-white/50 text-lg font-light mt-3">{t('subtitle')}</p>
          <div className="gold-divider mt-4" />
        </div>

        <div className="border border-gold/20 bg-carbon p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Home Price */}
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-gold mb-3">
                {t('price')}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-body text-sm">$</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white font-body text-sm pl-8 pr-4 py-3.5 outline-none transition-colors"
                  placeholder="350000"
                />
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-gold mb-3">
                {t('down')} (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={down}
                  onChange={(e) => setDown(e.target.value)}
                  className="w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white font-body text-sm px-4 py-3.5 pr-8 outline-none transition-colors"
                  placeholder="20"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gold font-body text-sm">%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-gold mb-3">
                {t('rate')} (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white font-body text-sm px-4 py-3.5 pr-8 outline-none transition-colors"
                  placeholder="7.0"
                  step="0.1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gold font-body text-sm">%</span>
              </div>
            </div>

            {/* Term */}
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-gold mb-3">
                {t('term')}
              </label>
              <select
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white font-body text-sm px-4 py-3.5 outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="10">10 {t('term_years')}</option>
                <option value="15">15 {t('term_years')}</option>
                <option value="20">20 {t('term_years')}</option>
                <option value="30">30 {t('term_years')}</option>
              </select>
            </div>
          </div>

          {/* Result — always visible, updates live */}
          <div className="border border-gold/30 p-8 text-center">
            <p className="section-label mb-4">{t('result')}</p>
            <p className="font-heading text-5xl text-gold font-light transition-all duration-300">
              {result !== null ? formatCurrency(result) : '—'}
            </p>
            <p className="font-body text-off-white/30 text-xs mt-4">{t('disclaimer')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
