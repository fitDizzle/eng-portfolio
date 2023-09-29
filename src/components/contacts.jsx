import React, { useState } from "react";
import { handleContactMessageDelivery } from "../api";

const Contacts = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState({});
  // const [success, setSuccess] = useState(false);

  const formData = {
    email: formState.email,
    name: formState.name,
    subject: formState.subject,
    message: formState.message,
  };

  const onHandleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleContactMessageDelivery(formData);

    if (result.code === 401) {
      setMessage({ message: "unable to send message" });
    } else {
      setMessage({ message: "Your message has been sent. Thank you!" });
    }

    setTimeout(() => {
      setFormState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setMessage({});
    }, 1500);
  };

  const renderResponseResult = () => {
    if (message)
      return <div className="response-error-message">{message.message}</div>;
    // if (success) {
    //   return <div className="response-sent-message">{message}</div>;
    // }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>My Remote Location</h3>
              <p>Phoenix, Arizona</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="https://github.com/fitDizzle" className="github">
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/mark-clark-software-engineer/"
                  className="linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://www.instagram.com/markfitnessaz/?hl=en"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>mark@idevforweb.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>+1 480 579 8865</p>
            </div>
          </div>
        </div>

        <form className="php-email-form mt-4">
          <div className="row">
            <div className="col-md-12 form-group mb-3 mt-md-0">
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => onHandleChange(e)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 form-group">
              <input
                id="phone"
                type="text"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number 000-000-0000"
                value={formState.phone}
                onChange={(e) => onHandleChange(e)}
                required={false}
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => onHandleChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              id="subject"
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              value={formState.subject}
              onChange={(e) => onHandleChange(e)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              value={formState.message}
              onChange={(e) => onHandleChange(e)}
              required
            ></textarea>
          </div>
          {renderResponseResult()}
          <div className="text-center">
            <button
              className="contact mt-3"
              type="submit"
              onClick={(e) => handleSubmit(e, formData)}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
