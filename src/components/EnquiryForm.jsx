import { useState } from 'react'
import './EnquiryForm.css'

const STATES = [
  'Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Gujarat',
  'Haryana','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra',
  'Odisha','Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh',
  'Uttarakhand','West Bengal',
]

const BUDGETS = [
  '₹50 Lakhs - ₹1 Crore',
  '₹1 Crore - ₹2 Crore',
  '₹2 Crore - ₹5 Crore',
  'Above ₹5 Crore',
]

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', state: '', city: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', state: '', city: '', budget: '', message: '' })
  }

  return (
    <form className="enq-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name <span className="req">*</span></label>
          <input
            id="name" name="name" type="text" placeholder="Your full name"
            value={form.name} onChange={handleChange} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID <span className="req">*</span></label>
          <input
            id="email" name="email" type="email" placeholder="your@email.com"
            value={form.email} onChange={handleChange} required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Contact Number <span className="req">*</span></label>
          <input
            id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
            value={form.phone} onChange={handleChange} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State <span className="req">*</span></label>
          <select id="state" name="state" value={form.state} onChange={handleChange} required>
            <option value="">Select State</option>
            {STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            id="city" name="city" type="text" placeholder="Your city"
            value={form.city} onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Investment Budget</label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
            <option value="">Select range</option>
            {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group full">
        <label htmlFor="message">Message</label>
        <textarea
          id="message" name="message" rows={4}
          placeholder="Tell us your questions or details..."
          value={form.message} onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-submit">Submit Enquiry</button>

      {submitted && (
        <div className="form-success">
          ✓ Thank you! Your enquiry has been submitted. We'll get back to you shortly.
        </div>
      )}

      <div className="form-secure">
        <span className="secure-icon">✓</span>
        <div>
          <strong>Your information is secure</strong>
          <p>We respect your privacy. Your data is encrypted and will only be used for franchise enquiry purposes.</p>
        </div>
      </div>
    </form>
  )
}
