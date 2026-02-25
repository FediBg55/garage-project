import Link from "next/link";
import T from "../../components/t";

const services = [
  {
    title: "home.s1",
    description: "home.s1d",
    benefits: ["home.v1", "home.v2", "home.v3"],
  },
  {
    title: "home.s2",
    description: "home.s2d",
    benefits: ["home.v1", "home.v2", "home.v3"],
  },
  {
    title: "home.s3",
    description: "home.s3d",
    benefits: ["home.v1", "home.v2", "home.v3"],
  },
  {
    title: "home.s4",
    description: "home.s4d",
    benefits: ["home.v1", "home.v2", "home.v3"],
  },
  {
    title: "home.s5",
    description: "home.s5d",
    benefits: ["home.v1", "home.v2", "home.v3"],
  },
];

export const metadata = {
  title: "Nos services",
  description:
    "Centre de visite technique, tachygraphe, diagnostic auto, parallelisme et service rapide.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal-up">
          <h1><T k="services.title" /></h1>
          <p><T k="services.subtitle" /></p>
        </div>
        <div className="grid page-grid">
          {services.map((service) => (
            <article key={service.title} className="card span-6 service-card">
              <h2><T k={service.title} /></h2>
              <p><T k={service.description} /></p>
              <ul className="bullet-list">
                {service.benefits.map((item) => (
                  <li key={item}><T k={item} /></li>
                ))}
              </ul>
              <Link href="/rendez-vous" className="btn btn-primary">
                <T k="services.cta" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
