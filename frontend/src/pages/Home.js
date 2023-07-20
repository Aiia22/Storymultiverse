import React from "react";
import LandingPageNavBar from "../components/LandingPageNavBar";
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
      </div>
      <div className="backgroundImage" style={backgroundImageStyle}></div>
      <div className="buttons">
        <button className="explore-button">Explore Now</button>
        <button className="login-button">Login</button>
      </div>
      <LandingPageNavBar />
    </div>
  );
}

export default HomePage;



//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
