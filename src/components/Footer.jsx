import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo.jpg" alt="Zudio Logo" className="footer-logo-img" />
          </div>
          <p className="footer-desc">
            Your trusted source for Zudio franchise information, investment details, and business enquiry guidance across India.
          </p>
          <p className="footer-domain">Domain: zudiofranchiseapplyonline.com</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">PAGES</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/franchise-cost">Franchise Cost</Link></li>
            <li><Link to="/how-to-apply">How to Apply</Link></li>
            <li><Link to="/eligibility">Eligibility</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">LEGAL</h4>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} zudiofranchiseapplyonline.com — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
