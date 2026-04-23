'use client';

import { useEffect, useRef, useState } from 'react';

type Animation = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: Animation;
}

const initial: Record<Animation, string> = {
  'fade-up':    'opacity-0 translate-y-10',
  'fade-in':    'opacity-0',
  'fade-left':  'opacity-0 -translate-x-10',
  'fade-right': 'opacity-0 translate-x-10',
};

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-x-0 translate-y-0' : initial[animation]
      }`}
    >
      {children}
    </div>
  );
}
