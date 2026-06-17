import './Legal.css'

const collected = [
  'Full name',
  'Email address',
  'Phone number',
  'State and city',
  'Investment budget range',
  'Preferred store location',
  'Message / enquiry content',
  'Form submission date and time',
  'Form source (home form or popup form)',
]

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: May 2025</p>

        <div className="legal-sections">
          <section className="legal-section">
            <h2>1. Data We Collect</h2>
            <p>When you submit an enquiry form on this website, we collect the following information:</p>
            <ul className="legal-list">
              {collected.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Data</h2>
            <p>The data collected through our enquiry forms is used solely for responding to your enquiry and providing general information about Zudio franchise opportunities. We do not use your data for marketing purposes unless you have explicitly consented.</p>
          </section>

          <section className="legal-section">
            <h2>3. Data Sharing</h2>
            <p>We do not sell, trade, or share your personal data with third parties. Your enquiry data is stored securely in our database and accessible only to authorized website administrators.</p>
          </section>

          <section className="legal-section">
            <h2>4. Data Retention</h2>
            <p>We retain your enquiry data for a reasonable period to allow for follow-up communication. You may request deletion of your data by contacting us through the enquiry form.</p>
          </section>

          <section className="legal-section">
            <h2>5. Cookies</h2>
            <p>This website uses session storage to manage popup display preferences within a browser session. No persistent tracking cookies are used.</p>
          </section>

          <section className="legal-section">
            <h2>6. Independent Website Notice</h2>
            <p>This website is operated independently and is not affiliated with Zudio, Trent Limited, or Tata Group. Any data you submit is handled by the operators of this independent website only.</p>
          </section>

          <section className="legal-section">
            <h2>7. Contact</h2>
            <p>For any data privacy enquiries, please use the contact form on our website.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
