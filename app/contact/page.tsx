import T from "../../components/t";

const mapsEmbed =
  "https://www.google.com/maps?q=Zone+Industrielle+Sidi+Abdelhamid+4061+Sousse+Tunisia&z=15&output=embed";

const mapsLocationLink =
  "https://maps.app.goo.gl/8o8sgJVF4aigEE1x6?g_st=iwb";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Ste Garage Jawhara: adresse, telephone, WhatsApp, horaires et carte Google Maps.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container two-col">
        <article className="card reveal-up">
          <h1><T k="contact.title" /></h1>
          <p><T k="contact.subtitle" /></p>
          <div className="contact-list">
            <p>
              <strong><T k="contact.address" />:</strong> Zone Industrielle Sidi Abdelhamid - 4061 Sousse
            </p>
            <p>
              <strong><T k="contact.phone" />:</strong>{" "}
              <a href="tel:+21673321333">73 321 333</a> / <a href="tel:+21673321330">73 321 330</a> / <a href="tel:+21629337242">29 337 242</a> / <a href="tel:+21629308989">29 308 989</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/21629337242">+216 29 337 242</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:sgja.zind1@gmail.com">sgja.zind1@gmail.com</a>
            </p>
          </div>
          <h2><T k="contact.hours" /></h2>
          <p>Lundi - Vendredi: 08:00 - 17:00</p>
          <p>Samedi: 08:00 - 14:00</p>
          <p>Dimanche: Ferme</p>
        </article>

        <article className="card reveal-up delay-2">
          <h2><T k="contact.location" /></h2>
          <iframe
            src={mapsEmbed}
            width="100%"
            height="340"
            style={{ border: 0, borderRadius: 10 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte Google Maps"
          />
          <p style={{ marginTop: 12 }}>
            <a href={mapsLocationLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary dark">
              Ouvrir sur Google Maps
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}
