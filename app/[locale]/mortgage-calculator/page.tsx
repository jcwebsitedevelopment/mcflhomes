import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import MortgageCalculator from '@/components/MortgageCalculator';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('calculator', locale);
}

export default function CalculatorPage() {
  const t = useTranslations('pages.calculator');

  return (
    <>
      <PageHero title={t('hero_title')} subtitle={t('hero_subtitle')} />
      <MortgageCalculator />
    </>
  );
}
