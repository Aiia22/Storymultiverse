import React from "react";

//******* Import component(s) *******/
import ContactUs from "../components/ContactUs";
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import "../styles/CSS/contact.css"; // Import the CSS file for styling

//******* Import style logic *******/
//Here

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Contact page </h1>
        <h2>Dig into your records and share with others!</h2>
      </div>
      <ContactUs />
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
