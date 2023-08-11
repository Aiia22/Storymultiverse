import React from "react";
import map from "../images/map.png";

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Contact Information */}
      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:support.storyMV@gmail.com">
            support.storyMV@gmail.com
          </a>
        </p>
        <p>
          Connect with us on{" "}
          <a href="https://www.facebook.com/StoryMultiverse">Facebook</a> and{" "}
          <a href="https://www.twitter.com/StoryMultiverse">Twitter</a>
        </p>
        <p>Address: National College of Ireland, Mayor Street Lower</p>
        <p>International Financial Services Centre</p>
        <p>Dublin 1</p>
        <p>
          Telephone: <a href="tel: +353(0)1449 8500">+353(0)1449 8500</a>
        </p>
      </div>

      {/* Map Image */}
      <div className="map-image">
        <img src={map} alt="Map" />
      </div>

      {/* Data Privacy Policy */}
      <div className="privacy-policy">
        <h2>Data Privacy Policy</h2>
        <p>
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and safeguard your personal information when you use our
          services. We are committed to protecting your data and ensuring that
          your information is handled responsibly and in accordance with
          applicable data protection laws.
        </p>

        <h2>What Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          contact details, and other relevant data when you interact with our
          platform. This information is collected for the purpose of providing
          you with a seamless experience and improving our services.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and enhance our services,
          communicate with you, process transactions, and personalize your
          experience. We do not share your information with third parties for
          marketing purposes without your consent.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement robust security measures to protect your data from
          unauthorized access, disclosure, alteration, or destruction. Our goal
          is to maintain the confidentiality and integrity of your information.
        </p>

        <h2>Your Choices</h2>
        <p>
          You have the right to review, update, or delete your personal
          information. You can also opt-out of receiving communications from us.
          Please contact us if you have any questions or requests regarding your
          data.
        </p>

        <h2>Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We encourage you to review
          this policy periodically for the latest information.
        </p>

        <p>
          If you have any concerns or inquiries about our data privacy
          practices, please contact us at privacy@storymultiverse.com.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
