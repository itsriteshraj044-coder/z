import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M9.5 21v-6h5v6" />
  </svg>
)

const EnquiryIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
)

const CostIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M17 6.5c0-1.93-2.24-3.5-5-3.5s-5 1.57-5 3.5S9.24 10 12 10s5 1.57 5 3.5S14.76 17 12 17s-5-1.57-5-3.5" />
  </svg>
)

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <NavLink to="/" end className={({ isActive }) => `bottom-nav-home ${isActive ? 'active' : ''}`}>
        <span className="bottom-nav-home-circle">
          <HomeIcon />
        </span>
        <span className="bottom-nav-label">Home</span>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <EnquiryIcon />
        <span className="bottom-nav-label">Enquiry</span>
      </NavLink>

      <NavLink to="/franchise-cost" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <CostIcon />
        <span className="bottom-nav-label">Cost</span>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <ContactIcon />
        <span className="bottom-nav-label">Contact</span>
      </NavLink>
    </nav>
  )
}
