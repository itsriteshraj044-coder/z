import EnquiryForm from '../components/EnquiryForm'
import './FranchiseCost.css'


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
  <svg className="cost-disclaimer-icon" {...strokeIcon}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="breakdown-svg" {...strokeIcon}>
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
)

const DollarSignIcon = () => (
  <svg className="breakdown-svg" {...strokeIcon}>
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const PackageIcon = () => (
  <svg className="breakdown-svg" {...strokeIcon}>
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="breakdown-svg" {...strokeIcon}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const breakdown = [
  { Icon: BuildingIcon, label: 'Store Setup & Fitout', range: '₹30L – ₹80L', note: 'Depends on store size, location, and interior design standards' },
  { Icon: DollarSignIcon, label: 'Security Deposit / Lease', range: '₹10L – ₹40L', note: 'Varies significantly by city tier and property location' },
  { Icon: PackageIcon, label: 'Initial Inventory', range: '₹20L – ₹60L', note: 'Opening stock investment to fill the store' },
  { Icon: TrendingUpIcon, label: 'Working Capital', range: '₹10L – ₹30L', note: 'For operational expenses in the initial months' },
]

const factors = [
  { title: 'Store Size', desc: 'Zudio stores typically range from 3,000 to 15,000+ sq ft. Larger formats require proportionally higher investment.' },
  { title: 'City Tier', desc: 'Metro cities like Mumbai, Delhi, Bengaluru have significantly higher real estate costs compared to smaller cities.' },
  { title: 'Property Ownership', desc: 'Owning the property vs. leasing it changes the capital requirement significantly.' },
  { title: 'Renovation & Fitout', desc: "Meeting Zudio's brand standards for interior design, lighting, and display adds to setup cost." },
  { title: 'Location Premium', desc: 'High-street or mall locations command higher rentals and deposits.' },
]

export default function FranchiseCost() {
  return (
    <div className="cost-page">
      {/* Hero */}
      <section className="cost-hero">
        <div className="container">
          <h1 className="cost-title">Zudio Franchise Cost in India</h1>
          <p className="cost-subtitle">General investment information based on publicly available third-party sources</p>
        </div>
      </section>

      {/* Body */}
      <section className="cost-body">
        <div className="cost-inner">
          {/* Disclaimer */}
          <div className="cost-disclaimer">
            <AlertTriangleIcon />
            <p>
              <strong>Important Disclaimer:</strong> Investment figures available online may vary and should be verified directly with Trent Limited/Zudio before making any decision. The figures below are general estimates gathered from third-party public sources and do not represent official Zudio/Trent Limited numbers.
            </p>
          </div>

          {/* Estimated Total Investment Range */}
          <div className="cost-block">
            <h2 className="cost-h2">Estimated Total Investment Range</h2>
            <div className="cost-total-box">
              <p className="cost-total-label">Estimated Total Investment (Third-party Sources)</p>
              <p className="cost-total-value">₹70L – ₹2.1Cr+</p>
              <p className="cost-total-label">Depending on store size, city, and property type</p>
            </div>
            <p className="cost-note">
              These figures are based on information circulating in public domain and franchise industry publications. Actual investment requirements can vary considerably. A large-format store in a metro city would naturally require a much higher investment than a smaller setup in a tier-3 city.
            </p>
          </div>

          {/* Estimated Cost Breakdown */}
          <div className="cost-block">
            <h2 className="cost-h2">Estimated Cost Breakdown</h2>
            <div className="breakdown-grid">
              {breakdown.map(({ Icon, label, range, note }) => (
                <div key={label} className="breakdown-card">
                  <div className="breakdown-head">
                    <div className="breakdown-icon"><Icon /></div>
                    <div>
                      <h3 className="breakdown-label">{label}</h3>
                      <div className="breakdown-range">{range}</div>
                    </div>
                  </div>
                  <p className="breakdown-note">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Factors */}
          <div className="cost-block">
            <h2 className="cost-h2">Key Factors That Affect Investment</h2>
            <div className="factors-list">
              {factors.map(({ title, desc }) => (
                <div key={title} className="factor-card">
                  <span className="factor-dot" />
                  <div>
                    <h3 className="factor-title">{title}</h3>
                    <p className="factor-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry */}
          <div className="cost-enquiry">
            <h2 className="cost-enquiry-title">Interested? Submit a General Enquiry</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}
