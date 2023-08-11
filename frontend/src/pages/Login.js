import React from "react";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import UserLogin from "../components/UserLogin";

//******* Import style logic *******/
import "../styles/CSS/main.css";

export default function Login() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <h1>Unlock the Multiverse</h1>
        <h2>sign-in or sign-up & embark on the Storymultiverse adventure!</h2>
        <UserLogin />
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
