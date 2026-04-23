'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import AnimateIn from './AnimateIn';
import { posts } from '@/lib/blog';

export default function BlogPreview() {
  const t = useTranslations('blog');
  const locale = useLocale() as 'en' | 'es';
  const preview = posts.slice(0, 3);

  return (
    <section className="py-28 px-6 bg-deep-black">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">{t('title')}</span>
          <p className="font-heading text-off-white/50 text-lg font-light mt-3">{t('subtitle')}</p>
          <div className="gold-divider mt-4" />
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 120}>
              <article className="group bg-carbon border border-gold/10 hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-deep-black/30" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body text-gold/60 text-[10px] tracking-widest uppercase">
                      {post.category[locale]}
                    </span>
                    <span className="text-off-white/20 text-xs">·</span>
                    <span className="font-body text-off-white/30 text-[10px]">
                      {post.dateDisplay[locale]}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-off-white font-light leading-tight mb-3 group-hover:text-gold transition-colors duration-200">
                    {post.title[locale]}
                  </h3>
                  <p className="font-body text-off-white/40 text-xs leading-relaxed mb-6 flex-1">
                    {post.excerpt[locale]}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-gold font-body text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-4 transition-all duration-200"
                  >
                    {t('read_more')} →
                  </Link>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400} className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-deep-black font-body text-xs tracking-[0.2em] uppercase font-semibold px-10 py-3.5 transition-all duration-200"
          >
            {t('view_all')}
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
