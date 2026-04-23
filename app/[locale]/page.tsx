import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutSnippet from '@/components/AboutSnippet';
import FeaturedListings from '@/components/FeaturedListings';
import MortgageCalculator from '@/components/MortgageCalculator';
import Testimonials from '@/components/Testimonials';
import RecentSales from '@/components/RecentSales';
import BlogPreview from '@/components/BlogPreview';
import ContactCTA from '@/components/ContactCTA';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata('home', locale);
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSnippet />
      <FeaturedListings />
      <MortgageCalculator />
      <Testimonials />
      <RecentSales />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
