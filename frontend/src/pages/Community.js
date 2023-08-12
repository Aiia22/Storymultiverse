import React from "react";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import "../styles/CSS/comingSoon.css";

export default function Community() {
  return (
    <>
      <>
        <Navbar />
        <div>
          <h1>Community page</h1> <br />
          <h2>
            A Community that brought together though the enjoy of shared
            interest
          </h2>{" "}
          <br />
          <h2>
            {" "}
            Join the best community that will bring you the best memories{" "}
          </h2>
        </div>
        <br />
        <br />
        <br />
        <div id="mbTxt">
          <h3> COMING SOON </h3>
          <h4> TO A </h4>
          <h3> VERSE NEAR YOU </h3>

          <p>
            Keep an eye on this space, as our updates will be out of this world{" "}
            <br />
            If you can not wait, please checkout our socail media pages <br />
            or contact our support team for more information. <br />
            Their details can be found on our support page
          </p>
        </div>
      </>
      <FooterComponent />
    </>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
