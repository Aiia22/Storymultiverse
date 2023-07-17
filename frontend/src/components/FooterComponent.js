import React from "react";
import "../styles/CSS/footer.css"; // Import the CSS file for styling

 
function FooterComponent() {
  return (
<footer className="footer">
<div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
</footer>
  );
}

 

export default FooterComponent;