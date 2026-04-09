import './HorologyPage.css';

function HorologyPage() {
  return (
    <div className="horology-page">
      <section className="horology-hero">
        <h1>Horology</h1>
        <p className="horology-tagline">Movement finishing &amp; craft</p>
      </section>
      <article className="horology-content">
        <p>
          The exquisite finishing in bespoke watch movements is very special as it represents the ultimate convergence of functional engineering, traditional artistry and extreme human effort, elevating a mechanical device into a work of art.
        </p>
        <p>
          The movement is indeed the heart of the watch. So many of these mechanical marvels are never seen, hidden behind the watch case back. With my watches I want the client to have the opportunity to view their entire watch, especially the movement. An open exhibition case back is always an option I encourage.
        </p>
        <p>
          Unlike mass-produced watches where machines handle decoration, bespoke finishing is largely done by hand, using incredible techniques that produce incomparable light reflection, intricate textures and unique imperfections.
        </p>
        <p>
          This makes my watches a rarity, because hand-finishing is labour-intensive and cannot be scaled; it&apos;s reserved for independent makers with small production numbers, high-end watches, making these a true luxury.
        </p>
        <h2 className="horology-section-title">Decorative features</h2>
        <p className="horology-lead">
          These are some of the decorative features you can find in my watches.
        </p>
        <section className="horology-feature-block" aria-labelledby="cotes-heading">
          <h3 id="cotes-heading">C&ocirc;tes de Gen&egrave;ve</h3>
          <p>
            These are striped patterns with a subtle wave formation. This technique dates back to the 19th century and was mastered by Swiss and French watchmakers. Some horology historians believe this pattern was not only pleasing to the eye, but also had a functional purpose. It was to trap dust as it passed over the small cuts; this would prevent it going any further into the watch movements.
          </p>
        </section>
      </article>
    </div>
  );
}

export default HorologyPage;
