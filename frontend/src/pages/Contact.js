import React from "react";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

//******* Import style logic *******/
//Here

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Contact page </h1>
        <h2>Dig into you records and share with others!</h2>
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
