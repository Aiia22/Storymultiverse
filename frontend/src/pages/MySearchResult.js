import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import MoviesBubble from "../components/MoviesBubble";
import BooksBubble from "../components/BooksBubble";
import TvshowsBubble from "../components/TvShowsBubble";
import GamesBubble from "../components/GamesBubble";

//******* Import style logic *******/
import "../styles/CSS/main.css";
import "../styles/CSS/searchSubPages.css";
import SSPIMG from "../images/searchSubPages.png";

const backgroundImageStyle = {
  backgroundImage: `url(${SSPIMG})`,
};

export default function MySearchResult() {
  const router = useLocation();
  const { res, data } = router.state;
  const [storyName, setStoryName] = useState("");
  useEffect(() => {
    Object.keys(res).forEach((stories) => {
      const arr = res[stories];
      if (arr.length > 0) setStoryName(arr[0].storyName);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="searchPage">
        <div className="backgroundImage" style={backgroundImageStyle}></div>
        <h1>
          Exploring the Storyverse of <span id="storyNameId">{storyName}</span>
        </h1>
        {/* Result bubbles */}
        <div className="resultBubbles">
          {res.books.length > 0 ||
          res.films.length > 0 ||
          res.tvShows.length > 0 ||
          res.games.length > 0 ? (
            <div className="result-container">
              <BooksBubble
                count={res.books.length}
                res={res.books}
                data={data}
              />

              <MoviesBubble
                count={res.films.length}
                res={res.films}
                data={data}
              />
              <TvshowsBubble
                count={res.tvShows.length}
                res={res.tvShows}
                data={data}
              />
              <GamesBubble
                count={res.games.length}
                res={res.games}
                data={data}
              />
            </div>
          ) : (
            <p>No result found.</p>
          )}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
