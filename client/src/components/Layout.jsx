import { Link } from 'react-router-dom';
import './Layout.css';


function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">
          <div className="logo-text">
            <span className="logo-name">Number 23</span>
            <span className="logo-name">John R Doughty</span>
            <span className="logo-tagline">Bespoke Timepieces</span>
          </div>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/horology" className="nav-link">Horology</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/enquire" className="nav-link nav-link-cta">Make an Enquiry</Link>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>&#169; {new Date().getFullYear()} Number 23 by John R Doughty. Crafted with precision.</p>
        <p>Tel: 07870296819 / no23bespokewatches@gmail.com</p>
        <p>
          Designed and built by{' '}
          <a href="https://webcodecraft.co.uk" className="footer-link" target="_blank" rel="noopener noreferrer">
            WebCodeCraft
          </a>
          : info@webcodecraft.com
        </p>
        <nav className="footer-nav">
          <Link to="/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
          &nbsp;|&nbsp;
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          &nbsp;|&nbsp;
          <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
