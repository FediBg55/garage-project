import Link from "next/link";
import Image from "next/image";
import T from "../../components/t";

const heavyServices = [
  "services.heavy.tachograph",
  "services.heavy.diagnostic",
  "services.heavy.electrical",
  "services.heavy.alignment",
  "services.heavy.ac",
  "services.heavy.nitrogen",
  "services.heavy.plates",
  "services.heavy.parts",
];

const lightServices = [
  "services.light.diagnostic",
  "services.light.alignment",
  "services.light.ac",
  "services.light.bodywork",
  "services.light.quick",
  "services.light.plates",
  "services.light.nitrogen",
  "services.light.parts",
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
          <div style={{ marginTop: "1.5rem" }}>
            <Image
              src="/bosch-automotive.png"
              alt="Bosch Automotive"
              width={280}
              height={140}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
        <div className="grid page-grid">
          {/* Heavy Trucks & Buses */}
          <article className="card span-6 service-card">
            <h2 className="service-category-title">🚛 <T k="services.heavyTitle" /></h2>
            <ul className="bullet-list">
              {heavyServices.map((key) => (
                <li key={key}><T k={key} /></li>
              ))}
            </ul>
            <Link href="/rendez-vous" className="btn btn-primary">
              <T k="services.cta" />
            </Link>
          </article>

          {/* Light Vehicles & Utilities */}
          <article className="card span-6 service-card">
            <h2 className="service-category-title">🚗 <T k="services.lightTitle" /></h2>
            <ul className="bullet-list">
              {lightServices.map((key) => (
                <li key={key}><T k={key} /></li>
              ))}
            </ul>
            <Link href="/rendez-vous" className="btn btn-primary">
              <T k="services.cta" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
