import React from "react";
// Connecting the NavBar to the pages
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

export default function Support() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Support page</h1>
        <h2>Here is your support plateform, we are here to help you!</h2>
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
