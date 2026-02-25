import T from "../../components/t";

export const metadata = {
  title: "A propos",
  description:
    "Decouvrez Ste Garage Jawhara, garage et centre technique prive axe sur serieux, rapidite et securite.",
};

export default function AProposPage() {
  return (
    <section className="section">
      <div className="container">
        <article className="card reveal-up">
          <h1><T k="about.title" /></h1>
          <p><T k="about.p1" /></p>

          <h2><T k="about.values" /></h2>
          <ul className="bullet-list">
            <li><T k="about.v1" /></li>
            <li><T k="about.v2" /></li>
            <li><T k="about.v3" /></li>
          </ul>

          <h2><T k="about.commit" /></h2>
          <p><T k="about.p2" /></p>
        </article>
      </div>
    </section>
  );
}
