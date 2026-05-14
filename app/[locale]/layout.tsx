import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Maria Cardona — Florida Realtor',
  url: 'https://mcflhomes.com',
  logo: 'https://mcflhomes.com/logo.png',
  image: 'https://mcflhomes.com/og-default.png',
  description:
    'Trilingual Florida Realtor fluent in English, Spanish, and Portuguese. 8 years of experience serving buyers, sellers, and investors across Orlando, Kissimmee, Davenport, and Central Florida.',
  telephone: '+16893101026',
  email: 'mcardonahomes@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.5383,
    longitude: -81.3792,
  },
  areaServed: [
    { '@type': 'City', name: 'Orlando', containedIn: 'Florida' },
    { '@type': 'City', name: 'Kissimmee', containedIn: 'Florida' },
    { '@type': 'City', name: 'Davenport', containedIn: 'Florida' },
    { '@type': 'City', name: 'Champions Gate', containedIn: 'Florida' },
  ],
  knowsLanguage: ['en', 'es', 'pt'],
  hasCredential: 'Florida Real Estate License #SL3405251',
  memberOf: {
    '@type': 'Organization',
    name: 'LPT Realty',
  },
  sameAs: [
    'https://www.realtor.com/realestateagents/65eea762c13715559291edd0',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas does Maria Cardona serve in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maria Cardona serves buyers and sellers across Central Florida including Orlando, Kissimmee, Davenport, Champions Gate, Clermont, and surrounding areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages does Maria Cardona speak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maria Cardona is a trilingual Realtor fluent in English, Spanish, and Portuguese, making her the ideal agent for international and Hispanic buyers and sellers in Florida.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Maria Cardona Realtor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Maria Cardona by phone or WhatsApp at (689) 310-1026, by email at mcardonahomes@gmail.com, or through the contact form at mcflhomes.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Maria Cardona a licensed Florida Realtor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Maria Cardona holds Florida Real Estate License #SL3405251 and is affiliated with LPT Realty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Maria Cardona help with buying and selling homes in Orlando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Maria Cardona assists both buyers and sellers in the Orlando metropolitan area and throughout Central Florida, with over 8 years of real estate experience.',
      },
    },
  ],
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </NextIntlClientProvider>
  );
}
