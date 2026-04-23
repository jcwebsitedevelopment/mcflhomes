import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getLocale } from 'next-intl/server';
import { posts, getPost, getRelated } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale() as 'en' | 'es';
  const post = getPost(slug);
  if (!post) return {};
  const title = `${post.title[locale]} | Maria Cardona`;
  const description = post.excerpt[locale];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Maria Cardona'],
      images: [{ url: `https://mcflhomes.com${post.image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://mcflhomes.com${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale() as 'en' | 'es';
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelated(slug);

  const readLabel = locale === 'es' ? 'min de lectura' : 'min read';
  const backLabel = locale === 'es' ? '← Volver al Blog' : '← Back to Blog';
  const relatedLabel = locale === 'es' ? 'Artículos Relacionados' : 'Related Articles';
  const readMoreLabel = locale === 'es' ? 'Leer Más' : 'Read More';
  const ctaTitle = locale === 'es' ? '¿Listo para dar el siguiente paso?' : 'Ready to take the next step?';
  const ctaBody = locale === 'es'
    ? 'Contáctame hoy y conversemos sobre tus metas inmobiliarias en Florida Central.'
    : 'Contact me today and let\'s talk about your real estate goals in Central Florida.';
  const ctaBtn = locale === 'es' ? 'Hablemos' : 'Get in Touch';

  return (
    <article>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title[locale]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl mx-auto px-6 pb-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold font-body text-xs tracking-[0.15em] uppercase mb-6 transition-colors"
          >
            {backLabel}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold text-deep-black font-body text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1">
              {post.category[locale]}
            </span>
            <span className="font-body text-off-white/40 text-xs tracking-wider">
              {post.dateDisplay[locale]}
            </span>
            <span className="font-body text-off-white/30 text-xs">·</span>
            <span className="font-body text-off-white/40 text-xs tracking-wider">
              {post.readTime} {readLabel}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl text-off-white font-light leading-tight">
            {post.title[locale]}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-carbon py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Lead */}
          <p className="font-body text-off-white/60 text-base leading-relaxed mb-10 pb-10 border-b border-gold/10">
            {post.excerpt[locale]}
          </p>

          {/* Article body */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content[locale] }}
          />

          {/* Author card */}
          <div className="mt-14 pt-10 border-t border-gold/10 flex items-center gap-5">
            <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-gold/20">
              <Image
                src="/maria-headshot.jpeg"
                alt="Maria Cardona"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div>
              <p className="font-body text-off-white text-sm font-medium">Maria Cardona</p>
              <p className="font-body text-gold/60 text-xs tracking-wider mt-0.5">
                Florida Realtor · LPT Realty · Lic. #SL3405251
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-deep-black py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="gold-divider mb-6" />
          <h2 className="font-heading text-3xl text-off-white font-light mb-4">{ctaTitle}</h2>
          <p className="font-body text-off-white/50 text-sm leading-relaxed mb-8">{ctaBody}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-deep-black font-body font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-colors"
          >
            {ctaBtn}
          </Link>
        </div>
      </div>

      {/* Related posts */}
      <div className="bg-carbon py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-8 text-center">{relatedLabel}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group bg-deep-black border border-gold/10 hover:border-gold/30 transition-all duration-300 block"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-deep-black/30" />
                </div>
                <div className="p-5">
                  <span className="font-body text-gold text-[10px] tracking-widest uppercase">
                    {r.category[locale]}
                  </span>
                  <h3 className="font-heading text-lg text-off-white font-light leading-tight mt-2 group-hover:text-gold transition-colors">
                    {r.title[locale]}
                  </h3>
                  <p className="font-body text-gold/60 text-xs tracking-wider mt-3 group-hover:gap-2 transition-all">
                    {readMoreLabel} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
