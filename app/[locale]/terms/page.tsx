import { useLocale } from 'next-intl';
import PageHero from '@/components/PageHero';

export default function TermsPage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <>
      <PageHero
        title={isEs ? 'Términos de Uso' : 'Terms of Use'}
        subtitle={isEs ? 'Última actualización: abril 2025' : 'Last updated: April 2025'}
      />

      <section className="py-20 px-6 bg-carbon">
        <div className="max-w-3xl mx-auto">
          {isEs ? (
            <div className="space-y-10 font-body text-off-white/60 text-sm leading-relaxed">
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">1. Aceptación de los términos</h2>
                <p>Al acceder y utilizar el sitio web mcflhomes.com, aceptas cumplir con estos Términos de Uso. Si no estás de acuerdo con alguno de estos términos, por favor no utilices este sitio.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">2. Información del sitio</h2>
                <p>Este sitio web es operado por Maria Cardona, agente inmobiliaria con licencia en el estado de Florida (Licencia #SL3405251), afiliada a LPT Realty. El contenido de este sitio tiene fines informativos y no constituye asesoramiento legal o financiero.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">3. Información sobre propiedades</h2>
                <p>La información sobre propiedades publicada en este sitio se proporciona "tal cual" y puede no estar actualizada en tiempo real. Los precios, disponibilidad y características de las propiedades están sujetos a cambios sin previo aviso. Se recomienda verificar toda la información directamente con Maria Cardona.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">4. Calculadora hipotecaria</h2>
                <p>Los resultados de la calculadora hipotecaria son estimaciones y tienen fines informativos únicamente. No representan una oferta de financiamiento ni garantizan condiciones específicas de préstamo. Consulta siempre con un prestamista calificado para obtener información precisa.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">5. Propiedad intelectual</h2>
                <p>Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y diseño, es propiedad de Maria Cardona o de sus respectivos propietarios. Queda prohibida su reproducción sin autorización expresa.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">6. Limitación de responsabilidad</h2>
                <p>Maria Cardona y mcflhomes.com no serán responsables de ningún daño directo, indirecto o consecuente que resulte del uso o la imposibilidad de uso de este sitio web o de la información en él contenida.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">7. Ley aplicable</h2>
                <p>Estos Términos de Uso se rigen por las leyes del Estado de Florida, Estados Unidos. Cualquier disputa se resolverá en los tribunales competentes del Estado de Florida.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">8. Contacto</h2>
                <p>Para preguntas sobre estos términos:</p>
                <div className="mt-3 space-y-1">
                  <p>Maria Cardona — Florida Realtor</p>
                  <p>Licencia #SL3405251 · LPT Realty</p>
                  <p><a href="mailto:mcardonahomes@gmail.com" className="text-gold hover:text-gold-light">mcardonahomes@gmail.com</a></p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10 font-body text-off-white/60 text-sm leading-relaxed">
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using the website mcflhomes.com, you agree to comply with these Terms of Use. If you do not agree with any of these terms, please do not use this site.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">2. Site Information</h2>
                <p>This website is operated by Maria Cardona, a licensed real estate agent in the State of Florida (License #SL3405251), affiliated with LPT Realty. The content of this site is for informational purposes only and does not constitute legal or financial advice.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">3. Property Information</h2>
                <p>Property information published on this site is provided "as is" and may not be updated in real time. Prices, availability, and property features are subject to change without notice. It is recommended to verify all information directly with Maria Cardona.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">4. Mortgage Calculator</h2>
                <p>Mortgage calculator results are estimates for informational purposes only. They do not represent a financing offer or guarantee specific loan terms. Always consult with a qualified lender for accurate information.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">5. Intellectual Property</h2>
                <p>All content on this website, including texts, images, logos, and design, is the property of Maria Cardona or their respective owners. Reproduction without express authorization is prohibited.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">6. Limitation of Liability</h2>
                <p>Maria Cardona and mcflhomes.com shall not be liable for any direct, indirect, or consequential damages resulting from the use or inability to use this website or the information contained therein.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">7. Governing Law</h2>
                <p>These Terms of Use are governed by the laws of the State of Florida, United States. Any disputes shall be resolved in the competent courts of the State of Florida.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">8. Contact</h2>
                <p>For questions about these terms:</p>
                <div className="mt-3 space-y-1">
                  <p>Maria Cardona — Florida Realtor</p>
                  <p>License #SL3405251 · LPT Realty</p>
                  <p><a href="mailto:mcardonahomes@gmail.com" className="text-gold hover:text-gold-light">mcardonahomes@gmail.com</a></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
