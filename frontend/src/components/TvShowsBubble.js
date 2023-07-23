import React from "react";
import { useNavigate } from "react-router-dom";

//******* Import style logic *******/
import "../styles/CSS/searchSubPages.css";
import tvIcon from "../images/tvIcon.png";

const TvShowsBubble = ({ count, res, data }) => {
  const router = useNavigate();

  const goToDetail = () => {
    if (Object.keys(res).length > 0) {
      router("/my-search-detail", {
        state: { res: res, data: data, storyType: "TV Show" },
      });
    }
  };
  return (
    count > 0 && (
      <button onClick={goToDetail} className="result-bubble">
        <div className="result-Icon">
          <img src={tvIcon} alt="tvIcon" id="tvIcon" />
        </div>
        <div className="result-count">{count}</div>
      </button>
    )
  );
};

export default TvShowsBubble;

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
//<div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
