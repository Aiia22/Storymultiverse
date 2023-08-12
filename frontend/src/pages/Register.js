import React from "react";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import UserRegister from "../components/UserRegister";

export default function Register() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Register page</h1>
        <h2>Create an account in a single step !</h2>
        <UserRegister />
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
