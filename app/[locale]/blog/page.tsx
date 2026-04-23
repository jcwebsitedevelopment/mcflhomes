import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero';
import { posts } from '@/lib/blog';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('blog', locale);
}

function BlogGrid({ locale }: { locale: 'en' | 'es' }) {
  const blog = useTranslations('blog');
  const t = useTranslations('pages.blog');

  return (
    <>
      <PageHero title={t('hero_title')} subtitle={t('hero_subtitle')} />
      <section className="py-24 px-6 bg-carbon">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-deep-black border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title[locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-deep-black/30" />
                <div className="absolute top-4 left-4 bg-carbon/80 backdrop-blur-sm px-3 py-1">
                  <span className="font-body text-gold text-xs tracking-widest uppercase">
                    {post.category[locale]}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <p className="font-body text-off-white/30 text-xs tracking-widest">
                    {post.dateDisplay[locale]}
                  </p>
                  <span className="text-off-white/20 text-xs">·</span>
                  <p className="font-body text-off-white/30 text-xs">
                    {post.readTime} {locale === 'es' ? 'min' : 'min read'}
                  </p>
                </div>
                <h2 className="font-heading text-xl text-off-white font-light leading-tight mb-3 group-hover:text-gold transition-colors">
                  {post.title[locale]}
                </h2>
                <p className="font-body text-off-white/40 text-xs leading-relaxed mb-6">
                  {post.excerpt[locale]}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-gold font-body text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-4 transition-all"
                >
                  {blog('read_more')} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default async function BlogPage() {
  const locale = await getLocale() as 'en' | 'es';
  return <BlogGrid locale={locale} />;
}
