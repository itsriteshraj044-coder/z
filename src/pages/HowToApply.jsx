import './HowToApply.css'

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
  <svg className="step-warn-icon" {...strokeIcon}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="protect-icon" {...strokeIcon}>
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

const steps = [
  {
    num: '01',
    title: 'Research Zudio and Trent Limited',
    desc: "Start by understanding Zudio's business model, brand positioning, and expansion plans. Visit Trent Limited's official website to understand their business associate program and any official requirements they have published.",
    warning: null,
  },
  {
    num: '02',
    title: 'Prepare Your Business Profile',
    desc: 'Prepare a clear business profile including: your background and business experience, financial capacity and proof of funds, proposed store location details, premises ownership or lease agreement details, local market analysis.',
    warning: null,
  },
  {
    num: '03',
    title: 'Check Location and Investment Readiness',
    desc: 'Ensure your proposed property meets general retail standards: footfall, accessibility, parking, visibility. Also verify that your financial capacity aligns with estimated investment requirements.',
    warning: null,
  },
  {
    num: '04',
    title: 'Contact Official Trent/Zudio Business Associate Enquiry Channel',
    desc: 'Submit your enquiry directly to Trent Limited through their official website. Use only the contact details published on their official website. Do not contact through unofficial intermediaries.',
    warning: 'Only contact Trent Limited through their official website (trentltd.com). Verify all email addresses are from an official Trent Limited domain before sharing documents.',
  },
  {
    num: '05',
    title: 'Avoid Paying Unknown Agents or Unofficial Websites',
    desc: 'Be extremely cautious of individuals or websites claiming they can fast-track your Zudio franchise application for a fee. Trent Limited/Zudio does not authorize third-party agents to collect application fees or processing charges.',
    warning: 'Never pay anyone to "secure" a Zudio franchise. This is a major red flag for fraud.',
  },
  {
    num: '06',
    title: 'Verify All Emails, Documents, and Payment Requests',
    desc: "Before sharing any sensitive business or personal documents, verify: the sender's email domain matches official Trent Limited channels, any agreement documents are on official letterheads, payment requests come through verifiable official banking channels.",
    warning: null,
  },
]

export default function HowToApply() {
  return (
    <div className="apply-page">
      {/* Hero */}
      <section className="apply-hero">
        <div className="container">
          <h1 className="apply-title">How to Apply for Zudio Franchise</h1>
          <p className="apply-subtitle">A safe step-by-step guide to approaching Zudio franchise / business associate enquiry</p>
        </div>
      </section>

      {/* Body */}
      <section className="apply-body">
        <div className="apply-inner">
          <div className="steps-list">
            {steps.map(({ num, title, desc, warning }) => (
              <div key={num} className="apply-step">
                <div className="step-num-box">{num}</div>
                <div className="step-content">
                  <h3 className="step-heading">{title}</h3>
                  <p className="step-text">{desc}</p>
                  {warning && (
                    <div className="step-warning">
                      <AlertTriangleIcon />
                      <p>{warning}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Protect Yourself */}
          <div className="protect-box">
            <ShieldIcon />
            <h2 className="protect-title">Protect Yourself</h2>
            <p className="protect-text">
              Always approach franchise enquiries with caution. Never share financial information or make payments without verification. Legitimate franchise programs do not charge application fees to applicants before evaluation.
            </p>
            <a
              href="https://www.trentltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="protect-btn"
            >
              Visit Official Trent Limited Website <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
