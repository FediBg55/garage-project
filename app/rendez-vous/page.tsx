import AppointmentForm from "../../components/AppointmentForm";
import T from "../../components/t";

export const metadata = {
  title: "Prise de rendez-vous",
  description:
    "Reservez votre visite technique ou service automobile en ligne. Reponse rapide par telephone ou WhatsApp.",
};

export default function RendezVousPage() {
  return (
    <section className="section">
      <div className="container two-col">
        <article className="card reveal-up">
          <h1><T k="booking.title" /></h1>
          <p><T k="booking.subtitle" /></p>
          <AppointmentForm />
        </article>

        <aside className="card reveal-up delay-2">
          <h2><T k="booking.infoTitle" /></h2>
          <ul className="bullet-list">
            <li><T k="booking.i1" /></li>
            <li><T k="booking.i2" /></li>
            <li><T k="booking.i3" /></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
