import React from "react";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

//******* Import style *******/
import "../styles/CSS/comingSoon.css";

export default function MyList() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>My Saved List</h1> <br />
        <h2>Dig into you records and share with others!</h2>
      </div>
      <br />
      <br />
      <br />
      <div id="mbTxt">
        <h3> COMING SOON </h3>
        <p>
          Keep an eye on this space, as our updates will be out of this world{" "}
          <br />
          If you can not wait, please checkout our socail media pages <br />
          or contact our support team for more information. <br />
          Their details can be found on our support page
        </p>
      </div>

      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
