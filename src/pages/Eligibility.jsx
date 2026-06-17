import { Link } from 'react-router-dom'
import './Eligibility.css'


const strokeIcon = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const AlertTriangleIcon = () => (
  <svg className="elig-disclaimer-icon" {...strokeIcon}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="elig-check" {...strokeIcon}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
)

const items = [
  { title: 'Retail Business Interest & Experience', desc: 'Genuine interest and ideally prior experience in retail or fashion business. Understanding of retail operations, inventory management, and customer service is valued.' },
  { title: 'Suitable Commercial Location', desc: 'Access to a sizeable commercial property in a location with good footfall. High-street or mall locations are typically preferred. Property should meet the space requirements of a value fashion format store.' },
  { title: 'Financial Capacity', desc: 'Ability to fund the estimated investment without financial strain. Being able to sustain operations through the initial period before achieving profitability is important.' },
  { title: 'Local Market Understanding', desc: 'Knowledge of local consumer preferences, competition, and the potential market for value fashion in your target area. This helps in making accurate demand projections.' },
  { title: 'Ability to Follow Brand Standards', desc: 'Commitment to maintaining brand identity, store presentation standards, and operational guidelines as may be specified by Trent Limited if officially approved as a business associate.' },
  { title: 'Good Business Standing', desc: 'Clean business and legal background. Financial records that can demonstrate capacity for investment and repayment if any credit is involved.' },
]

export default function Eligibility() {
  return (
    <div className="elig-page">
      {/* Hero */}
      <section className="elig-hero">
        <div className="container">
          <h1 className="elig-title">Zudio Franchise Eligibility</h1>
          <p className="elig-subtitle">General business readiness points for prospective Zudio franchise enquirers</p>
        </div>
      </section>

      {/* Body */}
      <section className="elig-body">
        <div className="elig-inner">
          {/* Disclaimer */}
          <div className="elig-disclaimer">
            <AlertTriangleIcon />
            <p>
              The following eligibility points are general business readiness guidelines based on publicly available information. Official eligibility criteria are determined solely by Trent Limited/Zudio and should be confirmed with them directly.
            </p>
          </div>

          {/* Eligibility list */}
          <div className="elig-cards">
            {items.map(({ title, desc }) => (
              <div key={title} className="elig-card">
                <CheckCircleIcon />
                <div>
                  <h3 className="elig-card-title">{title}</h3>
                  <p className="elig-card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="elig-cta">
            <h2 className="elig-cta-title">Ready to Submit an Enquiry?</h2>
            <p className="elig-cta-text">
              Submit your general enquiry through this independent information website, or contact Trent Limited directly through official channels.
            </p>
            <div className="elig-cta-buttons">
              <Link to="/contact" className="elig-btn-dark">Submit Enquiry Here</Link>
              <a
                href="https://www.trentltd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="elig-btn-outline"
              >
                Official Trent Limited Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
