'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactCTA() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const set = (k: keyof typeof form, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-deep-black border border-gold/20 focus:border-gold text-off-white font-body text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-off-white/20';

  return (
    <section className="py-28 px-6 bg-carbon">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">{t('title')}</span>
          <p className="font-heading text-off-white/50 text-lg font-light mt-3">{t('subtitle')}</p>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="border border-gold/30 p-10 text-center">
                <div className="w-12 h-12 border border-gold flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-heading text-2xl text-off-white font-light">{t('success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder={t('message_placeholder')}
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-body text-red-400/80 text-xs tracking-wider">
                    {t('error')}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-deep-black font-body font-semibold text-sm tracking-[0.2em] uppercase py-4 transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {t('sending')}
                    </>
                  ) : t('send')}
                </button>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-6">
            <div className="h-px bg-gold/10 lg:hidden" />
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/60">{t('or')}</p>

            <a
              href="https://wa.me/16893101026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gold/20 hover:border-gold p-5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 border border-gold/30 group-hover:border-gold flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-off-white text-sm font-medium">{t('whatsapp')}</p>
                <p className="font-body text-gold/50 text-xs">+1 (689) 310-1026</p>
              </div>
            </a>

            <a
              href="mailto:mcardonahomes@gmail.com"
              className="flex items-center gap-4 border border-gold/20 hover:border-gold p-5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 border border-gold/30 group-hover:border-gold flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-off-white text-sm font-medium">Email</p>
                <p className="font-body text-gold/50 text-xs">mcardonahomes@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
