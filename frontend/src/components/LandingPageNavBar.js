import React from "react";
import { Link } from "react-router-dom"; // Make sure to import the Link component from react-router-dom
import communityIcon from "../images/discussion.png";
import homeIcon from "../images/home.png";
import supportIcon from "../images/life-buoy.png";
import loginIcon from "../images/login.png";
import searchIcon from "../images/magnifier.png";
import myListIcon from "../images/to-do-list.png";
import "../styles/CSS/landingPageNavBar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="icon-container">
        <Link to="/">
          <img src={homeIcon} alt="homeIcon" id="navBarIcon" />
        </Link>
        <Link to="/my-search">
          <img src={searchIcon} alt="searchIcon" id="navBarIcon" />
        </Link>
        <Link to="/my-list">
          <img src={myListIcon} alt="myListIcon" id="navBarIcon" />
        </Link>
        <Link to="/community">
          <img src={communityIcon} alt="communityIcon" id="navBarIcon" />
        </Link>
        <Link to="/Support">
          <img src={supportIcon} alt="supportIcon" id="navBarIcon" />
        </Link>
        <Link to="/my-account">
          <img src={loginIcon} alt="loginIcon" id="navBarIcon2" />
        </Link>
      </div>
    </div>
  );
}
