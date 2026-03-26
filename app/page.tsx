import Image from "next/image";
import T from "../components/t";

const services = [
  { title: "home.s1", text: "home.s1d" },
  { title: "home.s2", text: "home.s2d" },
  { title: "home.s3", text: "home.s3d" },
  { title: "home.s4", text: "home.s4d" },
  { title: "home.s5", text: "home.s5d" },
];

const strengths = ["home.v1", "home.v2", "home.v3"];

const garageVideos = [
  { src: "/video1.mov", title: "Video 1" },
  { src: "/video2.mov", title: "Video 2" },
  { src: "/bosch-fini.mp4", title: "Bosch-Fini" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-panel reveal-up">
            <p className="eyebrow"><T k="home.eyebrow" /></p>
            <h1><T k="home.title" /></h1>
            <p className="hero-copy"><T k="home.subtitle" /></p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/rendez-vous">
                <T k="home.book" />
              </a>
              <a className="btn btn-secondary" href="https://wa.me/21629337242">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card reveal-up">
            <h2><T k="home.bardahlTitle" /></h2>
            <p><T k="home.bardahlText" /></p>
            <div className="grid page-grid" style={{ marginTop: "1rem" }}>
              <div className="span-6 card service-card">
                <p style={{ marginBottom: "0.75rem", fontWeight: 700, fontSize: "1.12rem", lineHeight: 1.55 }}>
                  Les principales fonctionnalités de la machine Bardahl :
                </p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>1️⃣ Nettoyage du filtre à particules (FAP / DPF)</p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>2️⃣ Nettoyage du système d’injection</p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>3️⃣ Décrassage du moteur</p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>4️⃣ Nettoyage du turbo et admission d’air</p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>5️⃣ Diagnostic et contrôle avant/après</p>
                <p style={{ margin: "0 0 0.85rem", fontSize: "1.03rem", lineHeight: 1.55 }}>6️⃣ Nettoyage sans démontage</p>
                <Image
                  src="/bardahl-1.jpeg"
                  alt="Bardahl certification 1"
                  width={1200}
                  height={900}
                  style={{ width: "100%", height: "auto", borderRadius: 10 }}
                />
              </div>
              <div className="span-6 card service-card">
                <Image
                  src="/bardahl-2.jpeg"
                  alt="Bardahl certification 2"
                  width={1200}
                  height={900}
                  style={{ width: "100%", height: "auto", borderRadius: 10 }}
                />
                <p style={{ margin: "0.85rem 0 0.5rem", fontWeight: 700, fontSize: "1.12rem", lineHeight: 1.55 }}>
                  ✅ Résultat pour le client :
                </p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>• Moins de fumée noire</p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>• Moteur plus puissant</p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "1.03rem", lineHeight: 1.55 }}>• Consommation réduite</p>
                <p style={{ margin: "0", fontSize: "1.03rem", lineHeight: 1.55 }}>• Moins de pollution</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card reveal-up tachy-card">
            <div className="tachy-banner">
              <Image
                src="/tachy.webp"
                alt="Service Tachygraphie"
                width={1200}
                height={800}
                className="tachy-image"
              />
              <div className="tachy-overlay">
                <h2>Service Tachygraphie</h2>
                <p>
                  Le service tachygraphie assure le contrôle, l’analyse et la gestion des données du tachygraphe afin de garantir le respect de la réglementation sur les temps de conduite et de repos des conducteurs.
                </p>
                <p>
                  Il permet d’améliorer la sécurité routière, d’éviter les infractions et d’assurer un suivi fiable des activités des véhicules de transport. 🚚📊
                </p>                <ul className="tachy-list">
                  <li>✅ Réparation, montage tachygraphe et mise à jour</li>
                  <li>✅ Plombage du tachygraphe conformément aux normes en vigueur</li>
                  <li>✅ Dossier métrologique certifié par l'Agence Nationale de Métrologie</li>
                  <li>✅ Contrôle et analyse des données du tachygraphe</li>
                  <li>✅ Suivi et archivage des activités des conducteurs et des véhicules</li>
                </ul>
                <p className="tachy-conclusion">
                  Un service essentiel pour assurer la conformité réglementaire, la sécurité et la fiabilité de votre flotte de transport. ✅🚛📈
                </p>              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card reveal-up tachy-card">
            <div className="tachy-banner">
              <Image
                src="/control.webp"
                alt="Chaîne de contrôle"
                width={1200}
                height={800}
                className="tachy-image"
              />
              <div className="tachy-overlay">
                <h2>Chaîne de contrôle</h2>
                <p>
                  Chaîne de contrôle : vérification complète du véhicule avant la visite technique afin d’assurer sécurité, conformité et réussite au contrôle technique.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card reveal-up">
            <h2 style={{ marginBottom: "1.5rem" }}>Modèles de Tachygraphes Disponibles</h2>
            <div className="grid page-grid">
              <div className="span-4 card service-card" style={{ textAlign: "center" }}>
                <Image
                  src="/mtco1324.webp"
                  alt="MTCO 13.24"
                  width={300}
                  height={250}
                  style={{ width: "100%", height: "auto", borderRadius: 10, marginBottom: "1rem" }}
                />
                <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>MTCO 13.24</p>
              </div>
              <div className="span-4 card service-card" style={{ textAlign: "center" }}>
                <Image
                  src="/mtco2400.png"
                  alt="MTCO 2400"
                  width={300}
                  height={250}
                  style={{ width: "100%", height: "auto", borderRadius: 10, marginBottom: "1rem" }}
                />
                <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>MTCO 2400</p>
              </div>
              <div className="span-4 card service-card" style={{ textAlign: "center" }}>
                <Image
                  src="/mtco8400.png"
                  alt="MTCO 8400"
                  width={300}
                  height={250}
                  style={{ width: "100%", height: "auto", borderRadius: 10, marginBottom: "1rem" }}
                />
                <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>MTCO 8400</p>
              </div>
              <div className="span-4 card service-card" style={{ textAlign: "center" }}>
                <Image
                  src="/mtco1318.jpeg"
                  alt="MTCO 1318"
                  width={300}
                  height={250}
                  style={{ width: "100%", height: "auto", borderRadius: 10, marginBottom: "1rem" }}
                />
                <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>MTCO 1318</p>
              </div>
              <div className="span-4 card service-card" style={{ textAlign: "center" }}>
                <Image
                  src="/veederroot.jpeg"
                  alt="Veeder Root"
                  width={300}
                  height={250}
                  style={{ width: "100%", height: "auto", borderRadius: 10, marginBottom: "1rem" }}
                />
                <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>Veeder Root</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card reveal-up">
            <h2><T k="home.videosTitle" /></h2>
            <p><T k="home.videosText" /></p>
            <p className="swipe-hint"><T k="home.videosHint" /></p>
            <div className="video-carousel" style={{ marginTop: "1rem" }}>
              {garageVideos.map((video) => (
                <div key={video.src} className="video-slide">
                  <video
                    src={video.src}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="video-slide-media"
                  />
                  <p className="video-slide-title">{video.title}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal-up">
            <h2><T k="home.servicesTitle" /></h2>
            <p><T k="home.servicesSubtitle" /></p>
          </div>
          <div className="grid service-grid">
            {services.map((service) => (
              <article key={service.title} className="card span-4 service-card">
                <h3><T k={service.title} /></h3>
                <p><T k={service.text} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <article className="card reveal-up">
            <h2><T k="home.whyTitle" /></h2>
            <ul className="strength-list">
              {strengths.map((item) => (
                <li key={item}><T k={item} /></li>
              ))}
            </ul>
          </article>
          <article className="card reveal-up delay-2">
            <h2><T k="home.needTitle" /></h2>
            <p><T k="home.needText" /></p>
            <div className="cta-row">
              <a className="btn btn-primary" href="tel:+21673321333">
                <T k="home.contactGarage" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
