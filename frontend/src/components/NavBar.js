import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import homeIcon from "../images/home.png";
import searchIcon from "../images/magnifier.png";
import myListIcon from "../images/to-do-list.png";
import communityIcon from "../images/discussion.png";
import supportIcon from "../images/life-buoy.png";
import loginIcon from "../images/login.png";

import "../styles/CSS/navBar.css";

const Navbar = () => {
  return (
    <nav id="navBar">
      <ul>
        <li>
          <Link to="/">
            <a href=" /">
              <img src={homeIcon} alt="homeIcon" id="navBarIcon" />
            </a>
          </Link>
        </li>
        <li>
          <Link to="/my-search">
            <a href=" /my-search">
              <img src={searchIcon} alt="searchIcon" id="navBarIcon" />
            </a>
          </Link>
        </li>
        <li>
          <Link to="/my-list">
            <a href=" /my-list">
              <img src={myListIcon} alt="myListIcon" id="navBarIcon" />
            </a>
          </Link>
        </li>
        <li>
          <Link to="/community">
            <a href=" /community">
              <img src={communityIcon} alt="communityIcon" id="navBarIcon" />
            </a>
          </Link>
        </li>
        <li>
          <Link to="/Support">
            <a href=" /Support">
              <img src={supportIcon} alt="supportIcon" id="navBarIcon" />
            </a>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <a href=" /login">
              <img src={loginIcon} alt="loginIcon" id="navBarIcon2" />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
