import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mcflhomes.com'),
  title: {
    default: 'Maria Cardona | Florida Realtor',
    template: '%s | MCFLHomes',
  },
  description:
    'Expert real estate services for buyers and sellers in Central Florida. Maria Cardona, licensed Florida Realtor — License #SL3405251.',
  robots: { index: true, follow: true },
  verification: {
    google: 'google84c858e24c1451bb',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Maria Cardona | Florida Realtor',
    image: 'https://mcflhomes.com/og-image.jpg',
    url: 'https://mcflhomes.com',
    telephone: '+16893101026',
    email: 'mcardonahomes@gmail.com',
    description: 'Expert real estate services for buyers and sellers in Central Florida. Licensed Florida Realtor — License #SL3405251.',
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
      { '@type': 'City', name: 'Orlando' },
      { '@type': 'City', name: 'Kissimmee' },
      { '@type': 'City', name: 'Clermont' },
      { '@type': 'City', name: 'Davenport' },
      { '@type': 'State', name: 'Florida' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Buying' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Selling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Properties' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Investment Properties' } },
      ],
    },
  };

  return (
    <html lang={locale} className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-deep-black text-off-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
