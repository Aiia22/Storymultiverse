import React from "react";
// Connecting components to the pages
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

import "../styles/CSS/main.css";

export default function MySearch() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Unlock the Multiverse</h1>
        <h2>
          Enter a Story, Choose a Type, and Discover Limitless Adaptations!
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
