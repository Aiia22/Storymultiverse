import React from "react";
// Connecting the NavBar to the pages
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

export default function MyList() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>MyList</h1>
        <h2>Dig into you records and share with others!</h2>
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
