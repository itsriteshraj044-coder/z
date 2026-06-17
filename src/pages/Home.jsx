import { Link } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import FAQ from '../components/FAQ'
import './Home.css'

const faqData = [
  {
    q: 'How can I apply for a Zudio Franchise?',
    a: 'You can apply for a Zudio franchise by filling out the enquiry form on this website. Provide your details including name, contact information, preferred state, city, and investment budget. Our team will review your application and get back to you with complete details about the franchise opportunity.',
  },
  {
    q: 'Is this the official Zudio franchise website?',
    a: 'This is a trusted franchise enquiry platform providing information about Zudio franchise opportunities. Zudio is an official brand of Trent Limited (Tata Group). We help entrepreneurs get complete and accurate information about franchise requirements and the application process.',
  },
  {
    q: 'What is the minimum Zudio franchise cost to setup?',
    a: 'The minimum investment for a Zudio franchise typically starts from ₹50 Lakhs to ₹1 Crore, which includes franchise fee, store setup, inventory, and working capital. The exact cost varies depending on the store size and location. Contact us for a detailed cost breakdown for your city.',
  },
  {
    q: 'How can I verify a Zudio Franchise opportunity?',
    a: 'To verify a Zudio franchise opportunity, you should directly contact Trent Limited (the parent company of Zudio) through their official channels. Our platform helps you gather preliminary information and connect with the right teams to verify authentic franchise opportunities.',
  },
  {
    q: 'How does Zudio guarantee franchise success?',
    a: 'Zudio, backed by the Tata Group, provides comprehensive business support including store design, inventory management, staff training, marketing, and operational guidance. With 500+ stores across India and a proven business model, franchisees benefit from strong brand recognition and a proven retail formula.',
  },
  {
    q: 'What details are required for a franchise enquiry?',
    a: 'For a franchise enquiry, you will need to provide your full name, email address, contact number, preferred state and city, investment budget range, and any specific questions or requirements. Additionally, details about your business experience and available commercial space will help us guide you better.',
  },
]

const costCards = [
  { label: 'Franchise Fee', range: '₹10-50 Lakhs', desc: 'One-time franchise fee including brand license and franchise agreement.' },
  { label: 'Store Setup', range: '₹30-50 Lakhs', desc: 'Interior design, fixtures, lighting, signage, and store infrastructure costs.' },
  { label: 'Store Inventory', range: '₹10-20 Lakhs', desc: 'Initial stock of Zudio fashion products including clothing and accessories.' },
  { label: 'Working Capital', range: '₹10-20 Lakhs', desc: 'Operational expenses for the first 3-6 months of store operations.' },
]

const RupeeIcon = () => (
  <svg className="cost-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="m6 13 8.5 8" />
    <path d="M6 13h3" />
    <path d="M9 13c6.667 0 6.667-10 0-10" />
  </svg>
)

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

const StarIcon = () => (
  <svg className="breadcrumb-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const TrendingUpIcon = ({ className = 'stat-icon' }) => (
  <svg className={className} {...strokeIcon}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="stat-icon" {...strokeIcon}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const AwardIcon = () => (
  <svg className="stat-icon" {...strokeIcon}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)

const Building2Icon = () => (
  <svg className="stat-icon" {...strokeIcon}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="btn-arrow" {...strokeIcon}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const heroStats = [
  { Icon: MapPinIcon, value: '500+', label: 'Stores in India' },
  { Icon: TrendingUpIcon, value: '150+', label: 'Cities Covered' },
  { Icon: AwardIcon, value: '2016', label: 'Since' },
  { Icon: Building2Icon, value: 'Tata', label: 'Parent Company' },
]

const whyCards = [
  { icon: '👗', title: 'Affordable Fashion for All', desc: 'Zudio offers trendy clothing at prices starting from ₹100, making it accessible to a wide customer base across all income segments with high volume sales and high returns.' },
  { icon: '🏢', title: 'Tata Group Brand Trust', desc: 'Backed by India\'s most trusted conglomerate, Tata Group. Zudio inherits decades of trust, making franchise business more reliable with strong customer loyalty nationwide.' },
  { icon: '📈', title: 'Fastest Growing Retail Brand', desc: 'With 500+ stores in India, Zudio is one of India\'s fastest expanding retail brands — new stores opening every month in tier 1, 2, and 3 cities across the country.' },
  { icon: '💹', title: 'High Profit Margins', desc: 'Zudio franchise earns healthy profit margins of 15-25% on high-volume fashion sales, ensuring consistent and sustainable returns on your investment with proper management.' },
  { icon: '🎯', title: 'Complete Business Support', desc: 'From store design to inventory management, POS systems to marketing — Zudio provides complete technical and operational support to all franchise partners throughout operations.' },
  { icon: '🗺️', title: 'Zudio is Active Expansion', desc: 'Zudio is actively expanding in Maharashtra, UP, Karnataka, Tamil Nadu, Rajasthan, MP and all other states — opportunities available for entrepreneurs in every region of India.' },
]

const steps = [
  { num: '01', title: 'Fill Enquiry Form', desc: 'Submit your Zudio Franchise enquiry form with your personal details and business details on your franchise information and investment capacity.' },
  { num: '02', title: 'Review & Verification', desc: 'Our team reviews your application, assesses your eligibility, schedules a call, and discusses your requirements and business preferences.' },
  { num: '03', title: 'Discussion & Details', desc: 'Get detailed information about investment requirements, documentation, and business operations. Discuss all aspects with the franchise team directly.' },
  { num: '04', title: 'Start Your Store', desc: 'Complete the formalities, set up your Zudio store with full support from the team, and begin your successful retail business journey.' },
]

const eligibilityItems = [
  { title: 'Investment Capacity', desc: 'Minimum investment capacity of ₹50 Lakhs to ₹1 Crore required for setting up a Zudio franchise store in your city.' },
  { title: 'Commercial Space', desc: 'Access to a commercial retail space of minimum 3,000–5,000 sq ft in a prime location with high foot traffic.' },
  { title: 'Business Experience', desc: 'Prior experience in retail, fashion, or business management is preferred but not always mandatory for eligible candidates.' },
  { title: 'Location', desc: 'Your chosen location should be in a tier 1, 2, or 3 city with good connectivity and visibility in a commercial area.' },
  { title: 'Commitment', desc: 'Full-time dedication and long-term commitment to running the franchise business professionally following Zudio brand standards.' },
]

const states = [
  'Maharashtra','Gujarat','Tamil Nadu','Karnataka','Delhi','Uttar Pradesh',
  'Madhya Pradesh','Delhi NCR','Rajasthan','Punjab','West Bengal','Telangana',
  'Andhra Pradesh','Kerala','Bihar','Odisha','Chhattisgarh','Jharkhand',
  'Assam','Uttarakhand',
]

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="breadcrumb"><StarIcon />Trusted Franchise Enquiry Platform</p>
              <h1 className="hero-title">Zudio Franchise Apply Online India 2025</h1>
              <p className="hero-desc">
                Apply for <strong>Zudio franchise online</strong> and explore India's fastest-growing value fashion retail opportunity. Get complete details on <strong>Zudio franchise cost in India</strong>, eligibility, investment requirements, and business opportunity.
              </p>
              <p className="hero-subdesc">
                Submit your <strong>Zudio franchise enquiry form</strong> today and take the first step towards owning a <strong>Zudio store business opportunity</strong> in your city.
              </p>
              <div className="hero-buttons">
                <a href="#enquiry-form" className="btn-primary">Apply Now — Franchise Enquiry</a>
                <Link to="/franchise-cost" className="btn-outline">View Franchise Cost <ArrowRightIcon /></Link>
              </div>

              <div className="stats-bar">
                {heroStats.map(({ Icon, value, label }) => (
                  <div key={label} className="stat-item">
                    <Icon />
                    <span className="stat-num">{value}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/hero.jpg" alt="Zudio franchise apply online India - store business opportunity" className="hero-img" />
              <div className="hero-badge">
                <span className="badge-check"><TrendingUpIcon className="badge-trend" /></span>
                <div>
                  <div className="badge-label">High Growth</div>
                  <div className="badge-sub">Fastest expanding retail brand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Franchise Cost ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Zudio Franchise Cost in India — Investment Details</h2>
          <p className="section-subtitle">
            Understanding the complete <strong>Zudio franchise cost in India</strong> including setup charges, inventory investment, and working capital requirements for 2025.
          </p>
          <div className="cost-grid">
            {costCards.map(card => (
              <div key={card.label} className="cost-card">
                <RupeeIcon />
                <h3 className="cost-label">{card.label}</h3>
                <div className="cost-range">{card.range}</div>
                <p className="cost-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="cost-link-wrap">
            <Link to="/franchise-cost" className="text-link">View Complete Zudio Franchise Cost Breakdown ↓</Link>
          </div>
        </div>
      </section>

      {/* ── Business Opportunity ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="opp-grid">
            <div className="opp-content">
              <h2 className="opp-title">Zudio Store Business<br />Opportunity in India</h2>
              <p className="opp-desc">
                Zudio, operated by Trent Limited (a Tata Group company), is India's leading value fashion retail brand with stores across 150+ cities. As the leading value fashion brand with rapid expansion across all Indian states, Zudio has become one of the most profitable franchise opportunities in the Indian retail sector.
              </p>
              <ul className="opp-list">
                <li>✅ Value fashion retail leader</li>
                <li>✅ 500+ stores across India</li>
                <li>✅ High customer footfall</li>
                <li>✅ Technology-driven operations</li>
                <li>✅ Backed by Tata Group</li>
                <li>✅ Tier 2 & 3 city expansion</li>
                <li>✅ Proven business model</li>
                <li>✅ Strong brand recognition</li>
              </ul>
            </div>
            <div className="opp-image-wrap">
              <img src="/images/opportunity.jpg" alt="Zudio store business opportunity in India" className="opp-img" />
              <div className="opp-stats">
                <div className="opp-stat">
                  <span className="opp-stat-num">15-25%</span>
                  <span className="opp-stat-label">Profit Margin</span>
                </div>
                <div className="opp-stat">
                  <span className="opp-stat-num">2-3 Yr</span>
                  <span className="opp-stat-label">ROI Period</span>
                </div>
                <div className="opp-stat">
                  <span className="opp-stat-num">3000+</span>
                  <span className="opp-stat-label">SKU Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Apply Steps ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How to Apply for Zudio Franchise Online</h2>
          <p className="section-subtitle">
            Follow these simple steps to <strong>apply for Zudio franchise online</strong> and start your retail business journey in India.
          </p>
          <div className="steps-grid">
            {steps.map(step => (
              <div key={step.num} className="step-card">
                <div className="step-num">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="steps-cta">
            <Link to="/how-to-apply" className="btn-primary">Read Full Application Guide ↓</Link>
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section className="section section-alt" id="enquiry-form">
        <div className="container">
          <h2 className="section-title">Zudio Franchise Enquiry Form — Apply Online</h2>
          <p className="section-subtitle">
            Fill in the details below to <strong>apply for Zudio Franchise online</strong>. Our team will contact you with complete and accurate franchise information.
          </p>
          <EnquiryForm />
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Zudio Franchise in India?</h2>
          <p className="section-subtitle">
            Thousands of entrepreneurs are choosing <strong>Zudio Franchise</strong> as their most preferred retail business opportunity in India.
          </p>
          <div className="why-grid">
            {whyCards.map(card => (
              <div key={card.title} className="why-card">
                <h3 className="why-title">{card.title}</h3>
                <p className="why-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="elig-grid">
            <div className="elig-content">
              <h2 className="elig-title">Zudio Franchise Eligibility Requirements</h2>
              <p className="elig-intro">
                Before you <strong>apply for Zudio Franchise online</strong>, make sure you meet these eligibility criteria. These requirements are designed to ensure successful store operations.
              </p>
              <ul className="elig-list">
                {eligibilityItems.map(item => (
                  <li key={item.title} className="elig-item">
                    <span className="elig-check">✓</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/eligibility" className="text-link" style={{ marginTop: '16px', display: 'inline-block' }}>
                View Complete Eligibility Details ↓
              </Link>
            </div>
            <div className="elig-image">
              <img src="/images/eligibility.jpg" alt="Zudio franchise eligibility requirements" className="elig-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── States ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Zudio Franchise Available Across India</h2>
          <p className="section-subtitle">
            <strong>Zudio Franchise apply online</strong> is available for entrepreneurs in all major Indian states. Select your state and submit your Zudio franchise enquiry today.
          </p>
          <div className="states-grid">
            {states.map(state => (
              <span key={state} className="state-tag">{state}</span>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/contact" className="btn-primary">Submit Franchise Enquiry for Your City</Link>
          </div>
        </div>
      </section>

      {/* ── Guide ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="guide-wrap">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Zudio Franchise Apply Online — Complete Guide 2025</h2>
            <div className="guide-content">
              <p>
                <strong>Zudio Franchise online</strong> — Are you looking in the right place? Zudio, operated by Trent Limited (a Tata Group company), is India's leading value fashion retailer with stores across 500+ cities. The brand is known for its affordable and trendy clothing for men, women, and children, making it one of the most profitable franchise opportunities in the Indian retail sector.
              </p>
              <p>
                The <strong>Zudio franchise cost in India</strong> varies based on your city, store size, and location type. For tier 1 cities like Mumbai, Delhi, and Bangalore, the total investment can range from ₹75 Lakhs to ₹1.5 Crore. For tier 2 and tier 3 cities, the investment may range from ₹50 Lakhs to ₹1 Crore.
              </p>
              <p>
                To <strong>apply for Zudio franchise online</strong>, fill out the <strong>Zudio franchise enquiry form</strong> with your details including name, contact information, preferred city, investment budget, and business experience. Our team will review your application and respond with complete details about the next steps.
              </p>
              <p>
                Whether you are searching for "<strong>Zudio Franchise online apply</strong>," "<strong>Zudio franchise apply online India 2025</strong>," or "how to get Zudio franchise" — this platform provides all the information you need. Start your journey with India's most trusted fashion brand today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about Zudio Franchise — get clear and accurate franchise information.
          </p>
          <FAQ items={faqData} />
        </div>
      </section>
    </div>
  )
}
