import { Link } from 'react-router-dom'
import './About.css'


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

const InfoIcon = () => (
  <svg className="about-pill-icon" {...strokeIcon}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="do-icon" {...strokeIcon}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="ext-icon" {...strokeIcon}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
)

const doList = [
  'Provide general Zudio franchise information',
  'Explain estimated investment ranges from public sources',
  'Guide visitors on how to safely approach franchise enquiries',
  'Warn visitors about fraudulent franchise schemes',
  'Direct visitors to official Trent Limited channels',
]

const notList = [
  'We are NOT the official Zudio franchise portal',
  'We are NOT affiliated with Trent Limited or Tata Group',
  'We do NOT guarantee franchise allocation or approval',
  'We do NOT have direct authority to allot Zudio franchises',
  'We are NOT endorsed by Zudio, Trent Limited, or Tata Group',
]

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="about-pill"><InfoIcon />About This Website</span>
          <h1 className="about-title">About Zudio Franchise Info</h1>
        </div>
      </section>

      {/* Body */}
      <section className="about-body">
        <div className="about-inner">
          <div className="about-block">
            <h2>Who We Are</h2>
            <p>
              This website — zudiofranchiseapplyonline.com — is an independent informational portal. It is created to provide general, publicly available information about Zudio franchise and business associate opportunities in India. We help visitors understand how to approach an enquiry, what to expect in terms of investment, eligibility criteria, and how to reach official Trent Limited channels safely.
            </p>
          </div>

          <div className="about-block">
            <h2>What We Do</h2>
            <p>
              We curate publicly available information about the Zudio brand, its business model, and its expansion in India. We provide an enquiry form to connect interested parties with this informational service. We do not provide official franchise approvals, guarantees, or direct connections to Trent Limited/Zudio.
            </p>
            <ul className="do-list">
              {doList.map(item => (
                <li key={item}><ShieldIcon />{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-block">
            <h2>What We Are NOT</h2>
            <div className="not-box">
              {notList.map(item => (
                <p key={item}><span className="not-dot" />{item}</p>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h2>Official Trent Limited Contact</h2>
            <p>
              For official franchise or business associate enquiries, please contact Trent Limited directly through their official website and authorized communication channels. Do not make payments or share sensitive documents without verifying the authenticity of communications from Trent Limited.
            </p>
            <a
              href="https://www.trentltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="trent-btn"
            >
              Visit Trent Limited Official Website <ExternalLinkIcon />
            </a>
          </div>

          <div className="about-cta">
            <Link to="/contact" className="enquiry-btn">Submit an Enquiry on This Site</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
