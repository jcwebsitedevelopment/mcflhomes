const BASE_URL = 'https://mcflhomes.com';

export const siteConfig = {
  baseUrl: BASE_URL,
  name: 'MCFLHomes — Maria Cardona',
  ogImage: `${BASE_URL}/og`,
  twitterHandle: undefined as string | undefined,
};

type PageSEO = {
  title: string;
  description: string;
  ogTitle?: string;
};

type LocaleSEO = {
  en: PageSEO;
  es: PageSEO;
};

export const pageSEO: Record<string, LocaleSEO> = {
  home: {
    en: {
      title: 'Maria Cardona | Florida Realtor — Buy & Sell in Central Florida',
      description:
        'Expert real estate services in Orlando, Kissimmee, Davenport & Central Florida. Maria Cardona — trilingual Florida Realtor, License #SL3405251.',
    },
    es: {
      title: 'Maria Cardona | Agente Inmobiliaria en Florida — Compra y Vende',
      description:
        'Servicios inmobiliarios expertos en Orlando, Kissimmee, Davenport y Florida Central. Maria Cardona — agente trilingüe, Licencia #SL3405251.',
    },
  },
  about: {
    en: {
      title: 'About Maria Cardona | Trilingual Florida Realtor',
      description:
        'Meet Maria Cardona — licensed Florida Realtor fluent in English, Spanish & Portuguese with 8 years of experience in Central Florida real estate.',
    },
    es: {
      title: 'Sobre Maria Cardona | Agente Inmobiliaria Trilingüe en Florida',
      description:
        'Conoce a Maria Cardona — agente inmobiliaria con licencia en Florida, trilingüe (inglés, español y portugués) con 8 años de experiencia en Florida Central.',
    },
  },
  buy: {
    en: {
      title: 'Buy a Home in Central Florida | Maria Cardona Realtor',
      description:
        'Ready to buy a home in Orlando, Kissimmee or Davenport? Maria Cardona provides expert buyer representation and personalized home searches across Central Florida.',
    },
    es: {
      title: 'Comprar Casa en Florida Central | Maria Cardona Agente',
      description:
        '¿Listo para comprar una casa en Orlando, Kissimmee o Davenport? Maria Cardona ofrece representación experta de compradores y búsquedas personalizadas en Florida Central.',
    },
  },
  sell: {
    en: {
      title: 'Sell Your Home in Central Florida | Maria Cardona Realtor',
      description:
        'Maximize your home value with strategic pricing, professional marketing and expert negotiation. Maria Cardona — top Florida Realtor in Orlando & Central Florida.',
    },
    es: {
      title: 'Vender Tu Casa en Florida Central | Maria Cardona Agente',
      description:
        'Maximiza el valor de tu hogar con precios estratégicos, marketing profesional y negociación experta. Maria Cardona — agente inmobiliaria en Orlando y Florida Central.',
    },
  },
  listings: {
    en: {
      title: 'Property Listings — Central Florida Homes For Sale | Maria Cardona',
      description:
        'Browse available homes in Orlando, Kissimmee, Davenport and Champions Gate. Full MLS search powered by Stellar MLS.',
    },
    es: {
      title: 'Propiedades en Venta — Florida Central | Maria Cardona',
      description:
        'Explora casas disponibles en Orlando, Kissimmee, Davenport y Champions Gate. Búsqueda completa del MLS con Stellar MLS.',
    },
  },
  blog: {
    en: {
      title: 'Florida Real Estate Blog | Tips for Buyers & Sellers — Maria Cardona',
      description:
        'Expert insights on the Florida housing market, mortgage rates, neighborhood guides and home buying tips. Updated regularly by Maria Cardona, Florida Realtor.',
    },
    es: {
      title: 'Blog Inmobiliario de Florida | Consejos para Compradores y Vendedores',
      description:
        'Análisis del mercado inmobiliario de Florida, tasas hipotecarias, guías de vecindarios y consejos para compradores. Por Maria Cardona, agente inmobiliaria.',
    },
  },
  contact: {
    en: {
      title: "Contact Maria Cardona | Florida Realtor — Let's Connect",
      description:
        'Get in touch with Maria Cardona — trilingual Florida Realtor serving Orlando, Kissimmee and Central Florida. Call, WhatsApp or send a message.',
    },
    es: {
      title: 'Contactar a Maria Cardona | Agente Inmobiliaria en Florida',
      description:
        'Ponte en contacto con Maria Cardona — agente trilingüe en Orlando, Kissimmee y Florida Central. Llama, escribe por WhatsApp o envía un mensaje.',
    },
  },
  calculator: {
    en: {
      title: 'Mortgage Calculator | Estimate Your Monthly Payment — MCFLHomes',
      description:
        'Free mortgage calculator for Florida home buyers. Estimate your monthly payment by home price, down payment, interest rate and loan term.',
    },
    es: {
      title: 'Calculadora Hipotecaria | Estima Tu Pago Mensual — MCFLHomes',
      description:
        'Calculadora hipotecaria gratuita para compradores en Florida. Estima tu pago mensual por precio, pago inicial, tasa de interés y plazo del préstamo.',
    },
  },
  testimonials: {
    en: {
      title: 'Client Testimonials | Maria Cardona Florida Realtor',
      description:
        'Read real reviews from satisfied buyers and sellers across Central Florida who worked with Maria Cardona, trilingual Florida Realtor.',
    },
    es: {
      title: 'Testimonios de Clientes | Maria Cardona Agente Inmobiliaria',
      description:
        'Lee reseñas reales de compradores y vendedores satisfechos en Florida Central que trabajaron con Maria Cardona, agente trilingüe.',
    },
  },
};

export function buildMetadata(
  page: keyof typeof pageSEO,
  locale: string,
  overrides?: Partial<PageSEO>
) {
  const loc = locale === 'es' ? 'es' : 'en';
  const seo = { ...pageSEO[page][loc], ...overrides };
  const canonicalLocale = loc === 'en' ? '' : `/${loc}`;

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: `${siteConfig.baseUrl}${canonicalLocale}`,
      languages: {
        en: `${siteConfig.baseUrl}`,
        es: `${siteConfig.baseUrl}/es`,
      },
    },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.description,
      url: `${siteConfig.baseUrl}${canonicalLocale}`,
      siteName: 'MCFLHomes',
      locale: loc === 'es' ? 'es_US' : 'en_US',
      type: 'website' as const,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: seo.ogTitle ?? seo.title,
      description: seo.description,
      images: [siteConfig.ogImage],
    },
  };
}
