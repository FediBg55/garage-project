import T from "../../components/t";

const mapsEmbed =
  "https://www.google.com/maps?q=36.8065,10.1815&z=14&output=embed";

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
              <strong><T k="contact.address" />:</strong> A renseigner, Tunis
            </p>
            <p>
              <strong><T k="contact.phone" />:</strong>{" "}
              <a href="tel:+21600000000">+216 00 000 000</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/21600000000">+216 00 000 000</a>
            </p>
            <p>
              <strong>Email:</strong> contact@garage-jawhara.tn
            </p>
          </div>
          <h2><T k="contact.hours" /></h2>
          <p>Lundi - Vendredi: 08:00 - 18:00</p>
          <p>Samedi: 08:00 - 13:00</p>
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
        </article>
      </div>
    </section>
  );
}
