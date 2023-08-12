import React from "react";
import { useNavigate } from "react-router-dom";

//******* Import style logic *******/
import "../styles/CSS/searchSubPages.css";
import gameIcon from "../images/gameIcon.png";

const GamesBubble = ({ count, res, data }) => {
  const router = useNavigate();

  const goToDetail = () => {
    if (res.length > 0) {
      router("/my-search-detail", {
        state: { res: res, data: data, storyType: "Games" },
      });
    }
  };
  return (
    count > 0 && (
      <button onClick={goToDetail} className="result-bubble">
        <div className="result-Icon">
          <img src={gameIcon} alt="gameIcon" id="gameIcon" />
        </div>
        <div className="result-count">{count}</div>
      </button>
    )
  );
};

export default GamesBubble;

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
//<div> Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware"> Good Ware </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
