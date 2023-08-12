//******* Import component(s) *******/
import React from "react";
import AboutUsComponent from "../components/AboutUSComponent";
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

//******* Import style logic *******/
import "../styles/CSS/aboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutUsComponent />
      <div className="container"></div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
