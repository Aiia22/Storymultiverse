import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>

            {/* Contact Information */}
            <div className="contact-info">
                <p>Email: <a href="mailto:contact@storymultiverse.com">contact@storymultiverse.com</a></p>
                <p>Connect with us on <a href="https://www.facebook.com/StoryMultiverse">Facebook</a> and <a href="https://www.twitter.com/StoryMultiverse">Twitter</a></p>
            </div>

            {/* Map Image */}
            <div className="map-image">
                {/* Placeholder for the map image */}
                <img src="path_to_your_map_image.jpg" alt="Map" />
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <form action="contact_process.php" method="POST">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required />

                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
