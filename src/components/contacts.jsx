import React, { useState } from "react";

const Contacts = () => {
  let [email, SetEmail] = useState("");
  let [name, SetName] = useState("");
  let [subject, SetSubject] = useState("");
  let [message, SetMessage] = useState("");

  const formData = {
    email,
    name,
    subject,
    message,
  };

  const onHandleChange = (e) => {
    console.log(e.target.name, e.target.value);
    [e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  href="https://www.linkedin.com/in/mark-clark-software-development/"
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

        <form
          action="../forms/contact.php"
          method="post"
          className="php-email-form mt-4"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                onChange={(e) => onHandleChange(e)}
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={(e) => onHandleChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
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
              onChange={(e) => onHandleChange(e)}
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit" onSubmit={(e) => handleSubmit(e, formData)}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
