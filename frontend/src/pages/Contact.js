import React from "react";

//******* Import component(s) *******/
import ContactUs from "../components/ContactUs";
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

//******* Import style logic *******/
import "../styles/CSS/contact.css";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Contact page </h1>
      </div>
      <ContactUs />
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
