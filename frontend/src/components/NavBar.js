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
                            <a href=" /"><img src={homeIcon} alt="homeIcon" /></a>
                        </Link>
                    </li>
                     <li>
                        <Link to="/my-search"> 
                             <a href=" /my-search"><img src={searchIcon} alt="searchIcon" /></a>
                        </Link>
                    </li>
                     <li>
                        <Link to="/my-list">
                            <a href=" /my-list"><img src={myListIcon} alt="myListIcon" /></a>
                        </Link>
                     </li>
                    <li>
                        <Link to="/community">
                         <a href=" /community"><img src={communityIcon} alt="communityIcon" /></a>
                        </Link>
                     </li>
                     <li>
                        <Link to="/Support">
                         <a href=" /Support"><img src={supportIcon} alt="supportIcon" /></a>
                        </Link>
                    </li>
                    <li></li>
                    <li></li>
                    <li>
                        <Link to="/my-account">
                        <a href=" /my-account"><img src={loginIcon} alt="loginIcon" /></a>
                        </Link>
                     </li>
                </ul>
            </nav>
        );
};

 

export default Navbar;