// src/components/Contact.jsx
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Using EmailJS REST API directly with the new template
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_w4prhd7',
          template_id: 'template_g6ueb5q',
          user_id: 'yOoSoN-S16tn7OWSO',
          template_params: {
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'New Contact Form Submission',
            message: formData.message,
          }
        })
      });

      const responseText = await response.text();
      console.log('✅ Response status:', response.status);
      console.log('✅ Response text:', responseText);

      if (response.status === 200) {
        setSubmitStatus('success');
        
        // Save email to localStorage
        try {
          const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
          if (!subscribers.some(s => s.email === formData.email)) {
            subscribers.push({
              email: formData.email,
              name: formData.name,
              date: new Date().toISOString()
            });
            localStorage.setItem('subscribers', JSON.stringify(subscribers));
          }
        } catch (e) {
          console.log('Could not save email to localStorage');
        }

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = `/thank-you.html?email=${encodeURIComponent(formData.email)}&name=${encodeURIComponent(formData.name)}`;
        }, 1500);
      } else {
        throw new Error(responseText || 'Failed to send email');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Unable to send your message. Please try again later or email me directly at ssenkubugeabbey055@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page" id="contact">
      <div className="contact-section">
        <div className="contact-container">
          {/* Left Column - Contact Info */}
          <div className="contact-copy">
            <h2>Let's <span style={{ color: '#6C63FF' }}>Connect</span></h2>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ssenkubugeabbey055@gmail.com">
                    ssenkubugeabbey055@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+256705149399">+256 705 149 399</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4>Location</h4>
                  <span>Mbarara, Uganda</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                href="#site-whatsapp-chat"
                onClick={(event) => {
                  event.preventDefault();
                  document.querySelector('.whatsapp-button')?.click();
                }}
                aria-label="Chat with Abbey on WhatsApp"
                className="whatsapp-social-link"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://github.com/musumbasa" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://musumba.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-hashnode"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="form-success">
                <i className="fa-solid fa-circle-check"></i>
                <span>Thank you! Redirecting...</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-success" style={{ background: '#FEE', color: '#C0392B' }}>
                <i className="fa-solid fa-circle-exclamation" style={{ color: '#E74C3C' }}></i>
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
              style={{
                background: isSubmitting ? '#8E8BDF' : '#6C63FF',
                color: 'white',
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
