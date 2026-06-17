import EnquiryForm from '../components/EnquiryForm'
import './Contact.css'


export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">Submit a franchise enquiry or reach out for general information</p>
        </div>
      </section>

      {/* Body */}
      <section className="contact-body" id="contact-form">
        <div className="contact-inner">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-col">
              <h2 className="contact-h2">Submit Your Enquiry</h2>
              <div className="contact-form-card">
                <EnquiryForm />
              </div>
            </div>

            {/* Details */}
            <div className="contact-details-col">
              <h2 className="contact-h2">Contact Details</h2>
              <div className="contact-details">
                <div className="contact-note-box">
                  <p>For any queries about this informational website, please use the contact form.</p>
                </div>

                <div className="contact-official-box">
                  <h3>For Official Zudio/Trent Enquiries</h3>
                  <p>Always contact Trent Limited through their official website for any franchise-related decisions.</p>
                  <a
                    href="https://www.trentltd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-trent-btn"
                  >
                    Visit trentltd.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
