import React from "react";

import LandingPageNavBar from "../components/LandingPageLogo";
import HPIMG from "../images/HP_img.png";
import "../styles/CSS/homePage.css"; // Import the CSS file for styling

function HomePage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${HPIMG})`,
  };

  return (
    <div className="homepage">
      <div className="title-box">
        <h1 className="title">Story Multiverse</h1>
        <h2>Unlock the storyverse</h2>
        <h3>
          Dive into infinity and explore a world where every tale unfolds
          accross books, films, TV series, comics, and more!
        </h3>
      </div>
      <div className="backgroundImage" style={backgroundImageStyle}></div>
      <div className="btn-container">
        <button className="btn">
          <a className="btnLink" href="/my-search">
            EXPLORE
          </a>
        </button>
        <button className="btn">
          {" "}
          <a className="btnLink" href="/login">
            LOGIN
          </a>
        </button>
      </div>
      <LandingPageNavBar />
    </div>
  );
}

export default HomePage;

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
