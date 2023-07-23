import React from "react";
import { Link } from "react-router-dom"; // Make sure to import the Link component from react-router-dom
import communityIcon from "../images/discussion.png";
import homeIcon from "../images/home.png";
import supportIcon from "../images/life-buoy.png";
import loginIcon from "../images/login.png";
import searchIcon from "../images/magnifier.png";
import myListIcon from "../images/to-do-list.png";
import "../styles/CSS/homePage.css";

export default function Navbar() {
  return (
    <div className="logo-container">
      <Link to="/">
        <p className="logoPartner">LogoPartner</p>
      </Link>
      <Link to="/my-search">
        <p className="logoPartner">LogoPartner</p>
      </Link>
      <Link to="/my-list">
        <p className="logoPartner">LogoPartner</p>
      </Link>
      <Link to="/community">
        <p className="logoPartner">LogoPartner</p>
      </Link>
      <Link to="/Support">
        <p className="logoPartner">LogoPartner</p>
      </Link>
      <Link to="/my-account">
        <p className="logoPartner">LogoPartner</p>
      </Link>
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
