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
    google: '_y1zRJpej0ho-xRETHN1pQE_1usYgnqLTQJF_wjY-mw',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-deep-black text-off-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
