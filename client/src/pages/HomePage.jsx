import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <ImageCarousel />
      <section className="hero-intro">
        <div className="hero-content">
          <h1>Crafted to Perfection</h1>
          <p className="hero-subtitle">
            One-of-a-kind timepieces, made to order by hand, 
            using the finest materials and components from Switzerland and Japan all to ISO:9001 Standards.
          </p>
          <Link to="/enquire" className="hero-cta">
            Begin Your Commission
          </Link>
        </div>
      </section>
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">◇</div>
            <h3>One of One</h3>
            <p>Every piece is unique. No two watches are ever the same.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">◆</div>
            <h3>Finest Materials</h3>
            <p>Sourced from the world's most prestigious suppliers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">●</div>
            <h3>Hand-Finished Movements</h3>
            <p>We can fit skeleton movements and all movements are hand-finished to the highest standard.</p>
          </div>
        </div>
      </section>
      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <div className="offerings-grid">
          <div className="offering-card">
            <h3>Wedding Watches</h3>
            <p>Celebrate your most beautiful day with a bespoke timepiece.</p>
          </div>
          <div className="offering-card">
            <h3>Special Birthdays</h3>
            <p>Commemorate a milestone (18th, 21st, 40th, etc.) with a unique watch.</p>
          </div>
          <div className="offering-card">
            <h3>Bespoke Display Pieces</h3>
            <p>Unique display cases for couples, featuring a pocket watch and a ladies watch.</p>
          </div>
        </div>
        <div className="more-services">
          <Link to="/services" className="services-link">
            Discover More Services
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
