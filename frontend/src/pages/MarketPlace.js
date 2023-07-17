import React from "react";
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

export default function MarketPlace() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>MarketPlace</h1>
        <h2>Here is your Market place, buy your favorite Adaptations!</h2>
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
