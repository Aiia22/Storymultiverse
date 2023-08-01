import React from "react";
import { useNavigate } from "react-router-dom";

//******* Import style logic *******/
import "../styles/CSS/searchSubPages.css";
import bookIcon from "../images/bookIcon.png";

const BookBubble = ({ count, res, data }) => {
  const router = useNavigate();

  const goToDetail = () => {
    if (Object.keys(res).length > 0) {
      router("/my-search-detail", {
        state: { res: res, data: data, storyType: "Books" },
      });
    }
  };
  return (
    count > 0 && (
      <button onClick={goToDetail} className="result-bubble">
        <div className="result-Icon">
          <img src={bookIcon} alt="bookIcon" id="bookIcon" />
        </div>
        <div className="result-count">{count}</div>
      </button>
    )
  );
};

export default BookBubble;
