import React from "react";
import LandingPageNavbar from "../components/LandingPageNavBar";
export default function Home() {
  
  return (
    <><><div>
      <h1>StoryMultiverse</h1>

    </div><div className="landing-page">
        <div className="background-image"></div>
        <div className="content">
          <p className="introduction">
            Welcome to the StorymultiverseApp, where you can
            explore different forms of adaptations inspired by your favorite stories.
          </p>
          <div className="buttons">
            <button className="explore-button">Explore Now</button>
            <button className="login-button">Login</button>
          </div>
        </div>
      </div></><LandingPageNavbar /></>
);
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
