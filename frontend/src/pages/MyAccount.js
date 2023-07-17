import React from "react";
// Connecting the NavBar to the pages
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

export default function MyAccount() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>My account</h1>
        <h2>Here is your account and setting !</h2>
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
