import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    // In the future, you can integrate with a backend service
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact me</h1>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <p>Thank you for your interest in getting in touch!</p>
              <p>
                I value open communication and welcome any inquiries, feedback,
                or collaboration opportunities. Please don't hesitate to get in
                touch with me by filling out the contact form.
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <span className="social-icon">💼</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="social-link email"
              >
                <span className="social-icon">✉️</span>
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
