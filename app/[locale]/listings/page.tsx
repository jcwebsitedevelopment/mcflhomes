import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import ListingsContent from '@/components/ListingsContent';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('listings', locale);
}

export default function ListingsPage() {
  const t = useTranslations('pages.listings');
  const idxUrl = process.env.NEXT_PUBLIC_IDX_URL ?? '';

  return (
    <>
      <PageHero title={t('hero_title')} subtitle={t('hero_subtitle')} />
      <ListingsContent idxUrl={idxUrl} />
    </>
  );
}
