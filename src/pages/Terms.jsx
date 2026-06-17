import './Legal.css'

const sections = [
  {
    h: '1. Independent Website',
    p: 'This website — zudiofranchiseapplyonline.com — is an independent informational website operated independently of Zudio, Trent Limited, and Tata Group. By accessing this website you acknowledge that you understand it is not the official Zudio or Trent Limited website.',
  },
  {
    h: '2. No Official Franchise Approval',
    p: 'This website does not provide official franchise approvals, business associate appointments, or any official representation on behalf of Zudio or Trent Limited. Submitting an enquiry on this website does not constitute any formal franchise application with Trent Limited/Zudio.',
  },
  {
    h: '3. Verify Details Independently',
    p: 'All information on this website, including investment figures, eligibility guidelines, and process descriptions, is based on publicly available third-party sources. Users must independently verify all information directly with Trent Limited/Zudio before making any business or financial decisions.',
  },
  {
    h: '4. No Guarantee of Franchise Allotment',
    p: 'Submitting an enquiry on this website carries absolutely no guarantee of franchise allotment, business associate appointment, or any preferential access to Trent Limited/Zudio programs. All franchise-related decisions rest solely with Trent Limited.',
  },
  {
    h: '5. Do Not Make Payments Without Official Confirmation',
    p: 'You must not make any payments to this website or to any party claiming to act on behalf of Zudio/Trent Limited without first verifying through official Trent Limited communication channels. This website does not collect any payment for franchise applications. Unsolicited requests for payment related to franchise opportunities are a fraud indicator.',
  },
  {
    h: '6. Limitation of Liability',
    p: 'This website and its operators shall not be liable for any losses, financial or otherwise, arising from decisions made based on information available on this website. All information is provided for general informational purposes only.',
  },
  {
    h: '7. Intellectual Property',
    p: 'The name "Zudio" and all associated trademarks belong to Trent Limited / Tata Group. This website uses these names solely for descriptive and informational purposes and does not claim ownership of these trademarks.',
  },
  {
    h: '8. Governing Law',
    p: 'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts.',
  },
]

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <h1 className="legal-title">Terms and Conditions</h1>
        <p className="legal-updated">Last updated: May 2025</p>

        <div className="legal-sections">
          {sections.map(({ h, p }) => (
            <section key={h} className="legal-section">
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
