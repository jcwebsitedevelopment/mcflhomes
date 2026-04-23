import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('contact', locale);
}

export default function ContactPage() {
  const t = useTranslations('pages.contact');

  return (
    <>
      <PageHero title={t('hero_title')} subtitle={t('hero_subtitle')} />
      <ContactCTA />
    </>
  );
}
