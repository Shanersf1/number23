import { useState } from 'react';
import './EnquiryPage.css';

function EnquiryPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    watchDescription: '',
    requiresAdvice: false,
    occasion: '',
    occasionDetails: '',
    eventDate: '',
    recipient: '',
    preferredTimeline: '',
    preferredMaterials: '',
    preferredStyle: '',
    specialRequirements: '',
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const payload = {
        ...formData,
        eventDate: formData.eventDate || undefined,
      };
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to submit');

      setStatus({ type: 'success', message: 'Your enquiry has been received. We will be in touch soon.' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        watchDescription: '',
        requiresAdvice: false,
        occasion: '',
        occasionDetails: '',
        eventDate: '',
        recipient: '',
        preferredTimeline: '',
        preferredMaterials: '',
        preferredStyle: '',
        specialRequirements: '',
      });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enquiry-page">
      <section className="enquiry-hero">
        <h1>Make an Enquiry</h1>
        <p>Tell us about the timepiece you have in mind</p>
      </section>

      <div className="enquiry-intro">
        <p>
          The watches I build are truly unique, built with a combination of the highest quality Swiss and Japanese parts. They will all fall into the category of the recognised ISO:2015 Standard. This acts as a foundation that keeps quality consistent throughout the manufacturing process. This is especially important for making fine, precision timepieces that demand complete tracking of materials used and very stringent controls over measurements requiring specialist tools to check dimensions to within plus or minus 0.025mm accuracy. Each watch is crafted to meet your requirements and exceed your expectations. Only then will it be released—so please ensure you allow adequate time for this. An estimate will be given when your build details are finalised.
        </p>
        <p>
          Once the consultation is complete and your choices are established, a 50% deposit is required to secure your commission.
        </p>
        <p>
          Please note that all contact is handled via email or WhatsApp (Found in the footer) to ensure clear communication and allow for times when I am unavailable for phone calls.
        </p>
      </div>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Contact Details</h2>
          <div className="form-row">
            <label>
              First Name <span className="required">*</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name <span className="required">*</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email <span className="required">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone <span className="required">*</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>

        <div className="form-section">
          <h2>Your Watch</h2>
          <label className="full-width">
            Describe the watch you have in mind, or the style you're drawn to
            <span className="required">*</span>
            <textarea
              name="watchDescription"
              value={formData.watchDescription}
              onChange={handleChange}
              rows={4}
              placeholder="e.g. A slim dress watch with a blue dial..."
              required
            />
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="requiresAdvice"
              checked={formData.requiresAdvice}
              onChange={handleChange}
            />
            I would appreciate expert advice on choosing or designing a watch
          </label>
        </div>

        <div className="form-section">
          <h2>Occasion & Purpose</h2>
          <label>
            What is this watch for? <span className="required">*</span>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Please select...</option>
              <option value="event">A special event (e.g. wedding, anniversary)</option>
              <option value="gift">A gift</option>
              <option value="personal">Personal collection</option>
              <option value="investment">Investment / heirloom</option>
              <option value="other">Other</option>
            </select>
          </label>
          {formData.occasion === 'event' && (
            <>
              <label>
                Event Details
                <input
                  type="text"
                  name="occasionDetails"
                  value={formData.occasionDetails}
                  onChange={handleChange}
                  placeholder="e.g. 25th wedding anniversary"
                />
              </label>
              <label>
                Event Date
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </label>
            </>
          )}
          {formData.occasion === 'gift' && (
            <label>
              Who is the recipient?
              <input
                type="text"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                placeholder="e.g. spouse, business partner"
              />
            </label>
          )}
        </div>

        <div className="form-section">
          <h2>Timeline</h2>
          <div className="form-row">
            <p>With each build the budget will be agreed during the consultation period.</p>
            <label>
              Preferred Timeline
              <select
                name="preferredTimeline"
                value={formData.preferredTimeline}
                onChange={handleChange}
              >
                <option value="">Please select...</option>
                <option value="urgent">Urgent (within 3 months)</option>
                <option value="3-6-months">3–6 months</option>
                <option value="6-12-months">6–12 months</option>
                <option value="flexible">Flexible</option>
                <option value="no-rush">No rush</option>
              </select>
            </label>
          </div>
        </div>

        <div className="form-section">
          <h2>Additional Preferences</h2>
          <div className="form-row">
            <label>
              Preferred Materials
              <input
                type="text"
                name="preferredMaterials"
                value={formData.preferredMaterials}
                onChange={handleChange}
                placeholder="e.g. materials or finishes you prefer"
              />
            </label>
            <label>
              Preferred Style
              <input
                type="text"
                name="preferredStyle"
                value={formData.preferredStyle}
                onChange={handleChange}
                placeholder="e.g. classic, sporty, art deco"
              />
            </label>
          </div>
          <label className="full-width">
            Special Requirements or Inscriptions
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows={3}
              placeholder="Any engravings, personalisation, or other requests..."
            />
          </label>
        </div>

        {status.message && (
          <div className={`form-status ${status.type}`}>
            {status.message}
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit Enquiry'}
        </button>
      </form>
    </div>
  );
}

export default EnquiryPage;
