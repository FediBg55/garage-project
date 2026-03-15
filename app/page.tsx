import Image from "next/image";
import T from "../components/t";
import IntroVideoOverlay from "../components/intro-video-overlay";

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
      <IntroVideoOverlay />
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
