import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.facebook.com/profile.php?id=100074499750694"
        className="facebook"
        rel="noreferrer"
        target="_blank"
      >
        <i className="bi bi-facebook"></i>
      </a>
      <a
        href="https://www.instagram.com/markfitnessaz/"
        className="instagram"
        rel="noreferrer"
        target="_blank"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mark-clark-software-development/"
        className="linkedin"
        rel="noreferrer"
        target="_blank"
      >
        <i className="bi bi-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
