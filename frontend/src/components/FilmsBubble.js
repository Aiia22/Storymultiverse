import React from "react";
import { useNavigate } from "react-router-dom";

//******* Import style logic *******/
import "../styles/CSS/searchSubPages.css";
import movieIcon from "../images/movieIcon.png";

const FilmsBubble = ({ count, res, data }) => {
  const router = useNavigate();

  const goToDetail = () => {
    if (Object.keys(res).length > 0) {
      router("/my-search-detail", {
        state: { res: res, data: data, storyType: "Films" },
      });
    }
  };
  return (
    count > 0 && (
      <button onClick={goToDetail} className="result-bubble">
        <div className="result-Icon">
          <img src={movieIcon} alt="movieIcon" id="movieIcon" />
        </div>
        <div className="result-count">{count}</div>
      </button>
    )
  );
};

export default FilmsBubble;
