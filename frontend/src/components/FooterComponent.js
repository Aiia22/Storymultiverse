import React from "react";
import "../styles/CSS/footer.css"; // Import the CSS file for styling

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>
            <a href="/about-us">About Us</a>
          </h3>
        </div>
        <div className="footer-section">
          <h3>
            <a href="/advertise">Advertise with us</a>
          </h3>
        </div>
        <div className="footer-section">
          <h3>
            <a href="/support">Help</a>
          </h3>
        </div>
        <div className="footer-section">
          <h3>
            <a href="/contact">Contact</a>
          </h3>
        </div>
        <div className="footer-icons">
          <h3>
            Connect&nbsp;&nbsp;
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            &nbsp;
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
            &nbsp;
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            &nbsp;
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </h3>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} StoryMultiverse Inc. All rights
          reserved.
        </p>
        <p>
          <a href="/">Privacy Policy</a> | <a href="/">Use of Cookies</a> |{" "}
          <a href="/">Terms of Use</a> | <a href="/">Legal</a> |{" "}
          <a href="/">Site Map</a>
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;
