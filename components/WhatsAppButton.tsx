'use client';

import { useLocale } from 'next-intl';

export default function WhatsAppButton() {
  const locale = useLocale();
  const label = locale === 'es' ? 'Escríbeme por WhatsApp' : 'Chat on WhatsApp';

  return (
    <a
      href="https://wa.me/16893101026"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-carbon border border-gold/20 text-off-white font-body text-xs tracking-wider px-3 py-2 whitespace-nowrap pointer-events-none">
        {label}
      </span>

      {/* Button */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center shadow-lg shadow-black/40 transition-colors duration-200">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.858L.057 23.028a.75.75 0 00.916.916l5.17-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.504-5.25-1.385l-.372-.214-3.865 1.1 1.1-3.865-.214-.372A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </div>
    </a>
  );
}
