import AnimateIn from './AnimateIn';

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 px-6 bg-deep-black border-b border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gold" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gold" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <AnimateIn animation="fade-up">
          {label && <span className="section-label">{label}</span>}
          <h1 className="font-heading text-5xl md:text-6xl text-off-white font-light mt-4 mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-off-white/50 text-base font-light max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="gold-divider mt-6" />
        </AnimateIn>
      </div>
    </section>
  );
}
