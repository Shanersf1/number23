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
        <section className="horology-feature-block" aria-labelledby="snailing-heading">
          <h3 id="snailing-heading">Snailing</h3>
          <p>
            Colima&ccedil;onnage is the correct name for this technique. It has long been used to add refined, high-quality aesthetic to mechanical parts, signalling meticulous finishing. This is often applied to parts that are not immediately visible, indicating craftsmanship that goes beyond simple functionality.
          </p>
          <p>
            The spiral pattern is specifically chosen because it complements the rotational nature of components such as the barrel and ratchet wheel, creating an illusion of motion.
          </p>
        </section>
        <section className="horology-feature-block horology-feature-block-wide" aria-labelledby="poli-heading">
          <h3 id="poli-heading">Poli noir or Black polishing</h3>
          <p>
            This finish is reserved for the very best, only generally seen in high-end serious quality watches. This is due to the skills required to achieve this beautiful and mesmerizing illusion. This is a very labour-intensive, time-consuming technique that is all done by hand. It is genuinely difficult to appreciate how much skill, patience, dedication and sincere passion is involved in this work.
          </p>
          <p>
            This work is achieved using a very specialised set of tooling. It is imperative that the component being polished is set into the tool absolutely, perfectly, 100% flat. The surface is then polished and cleaned repeatedly using diamond cutting paste of ever decreasing grit quantities.
          </p>
          <h4 className="horology-subheading">The first stage</h4>
          <p>
            Pre-polishing or lapping, using approx 3000 grit, which achieves between 6 and 9 micron.
          </p>
          <h4 className="horology-subheading">The second stage</h4>
          <p>
            Intermediate polishing, using approx 8000 grit, 3 micron. This stage levels the surface and begins to produce a uniform shine.
          </p>
          <h4 className="horology-subheading">The third stage</h4>
          <p>
            Final polishing, approx 14,000 grit, 1 micron. This is considered standard &quot;finishing&quot; grade for high-end watchmaking and precision tools. This is achieved using a soft tin plate to find the &quot;Black&quot; effect where light reflects in only one direction. When viewed, the part will appear a perfect shiny silver colour, and when moved slightly, due to the surface being absolutely flat and smooth, the light will not reflect in any other direction and the silver colour you see will instantly appear absolutely black.
          </p>
          <h4 className="horology-subheading">The fourth stage</h4>
          <p>
            I use this to achieve an ultra final polish to further enhance the illusion of the &quot;Black&quot; effect; it would require the use of 50,000 to 100,000 grit, 0.5 to 0.25 micron. This will give an absolute mirror gloss finish.
          </p>
          <p className="horology-emphasis">
            These figures are astonishing when you learn a human hair is between 50 to 100 micron. 0.25 micron is one four-thousandth of a millimetre.
          </p>
        </section>
        <p className="horology-closing">
          My hope is that clients will understand the work that has gone into each watch, the hours spent on a single component, the preparation and care to achieve the perfect finish. All these things take time and ultimately come together when they receive their watch &mdash; the only one there is &mdash; each and every time a finished watch is delivered.
        </p>
      </article>
    </div>
  );
}

export default HorologyPage;
