import { useLocale } from 'next-intl';
import PageHero from '@/components/PageHero';

export default function PrivacyPage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <>
      <PageHero
        title={isEs ? 'Política de Privacidad' : 'Privacy Policy'}
        subtitle={isEs ? 'Última actualización: abril 2025' : 'Last updated: April 2025'}
      />

      <section className="py-20 px-6 bg-carbon">
        <div className="max-w-3xl mx-auto prose-custom">
          {isEs ? (
            <div className="space-y-10 font-body text-off-white/60 text-sm leading-relaxed">
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">1. Información que recopilamos</h2>
                <p>Cuando utilizas el formulario de contacto de este sitio web, recopilamos información personal que nos proporcionas voluntariamente, incluyendo tu nombre, dirección de correo electrónico, número de teléfono y el mensaje que nos envías. No recopilamos información sin tu consentimiento.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">2. Cómo usamos tu información</h2>
                <p>La información que recopilamos se utiliza exclusivamente para:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>Responder a tus consultas sobre servicios inmobiliarios</li>
                  <li>Proporcionarte información sobre propiedades que puedan interesarte</li>
                  <li>Comunicarnos contigo en relación con tu búsqueda o venta de propiedades</li>
                </ul>
                <p className="mt-3">No vendemos, alquilamos ni compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea requerido por ley.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">3. Cookies</h2>
                <p>Este sitio web puede utilizar cookies técnicas necesarias para su correcto funcionamiento. No utilizamos cookies de seguimiento o publicidad de terceros.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">4. Seguridad de datos</h2>
                <p>Implementamos medidas de seguridad razonables para proteger tu información personal. Sin embargo, ninguna transmisión de datos por Internet es completamente segura.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">5. Tus derechos</h2>
                <p>Tienes derecho a solicitar acceso, corrección o eliminación de tu información personal. Para ejercer estos derechos, contáctanos en <a href="mailto:mcardonahomes@gmail.com" className="text-gold hover:text-gold-light">mcardonahomes@gmail.com</a>.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">6. Cambios a esta política</h2>
                <p>Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">7. Contacto</h2>
                <p>Si tienes preguntas sobre esta Política de Privacidad, contáctanos:</p>
                <div className="mt-3 space-y-1">
                  <p>Maria Cardona — Florida Realtor</p>
                  <p>Licencia #SL3405251 · LPT Realty</p>
                  <p><a href="mailto:mcardonahomes@gmail.com" className="text-gold hover:text-gold-light">mcardonahomes@gmail.com</a></p>
                  <p>+1 (689) 310-1026</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10 font-body text-off-white/60 text-sm leading-relaxed">
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">1. Information We Collect</h2>
                <p>When you use the contact form on this website, we collect personal information you voluntarily provide, including your name, email address, phone number, and message. We do not collect information without your consent.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">2. How We Use Your Information</h2>
                <p>The information we collect is used exclusively to:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>Respond to your real estate inquiries</li>
                  <li>Provide you with information about properties that may interest you</li>
                  <li>Communicate with you regarding your property search or sale</li>
                </ul>
                <p className="mt-3">We do not sell, rent, or share your personal information with third parties without your consent, except as required by law.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">3. Cookies</h2>
                <p>This website may use technical cookies necessary for its proper functioning. We do not use third-party tracking or advertising cookies.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">4. Data Security</h2>
                <p>We implement reasonable security measures to protect your personal information. However, no data transmission over the Internet is completely secure.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">5. Your Rights</h2>
                <p>You have the right to request access, correction, or deletion of your personal information. To exercise these rights, contact us at <a href="mailto:mcardonahomes@gmail.com" className="text-gold hover:text-gold-light">mcardonahomes@gmail.com</a>.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">6. Changes to This Policy</h2>
                <p>We may update this Privacy Policy occasionally. We will notify you of significant changes by posting the new policy on this page.</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-off-white font-light mb-4">7. Contact</h2>
                <p>If you have questions about this Privacy Policy, contact us:</p>
                <div className="mt-3 space-y-1">
                  <p>Maria Cardona — Florida Realtor</p>
                  <p>License #SL3405251 · LPT Realty</p>
                  <p><a href="mailto:mcardonahomes@gmail.com" className="text-gold hover:text-gold-light">mcardonahomes@gmail.com</a></p>
                  <p>+1 (689) 310-1026</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
