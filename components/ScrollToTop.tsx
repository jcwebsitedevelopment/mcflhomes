'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-50 w-11 h-11 border border-gold/40 hover:border-gold bg-deep-black/90 hover:bg-carbon backdrop-blur-sm flex items-center justify-center transition-all duration-200 group"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold/60 group-hover:text-gold transition-colors">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
