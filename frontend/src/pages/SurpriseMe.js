import React from "react";
// Connecting the NavBar to the pages
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

export default function SurpriseMe() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Unlock the Multiverse</h1>
        <h2>
          Let our AI Choose choose for you, and Discover Limitless Adaptations!
        </h2>
        <SearchBar />
        <SearchResults />
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
