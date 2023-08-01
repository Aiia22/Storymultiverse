import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

// Import style files
import "../styles/CSS/main.css";
import "../styles/CSS/searchSubPages.css";
import SSPIMG from "../images/searchSubPages.png";

const backgroundImageStyle = {
  backgroundImage: `url(${SSPIMG})`,
};

const MySelectedResult = () => {
  const location = useLocation();
  const { storyType, response, selectedData } = location.state;
  const navigate = useNavigate();

  // Return name of author / company /director - (use trim() method to remove space)
  const returnItemName = (id, apiData) => {
    const item = apiData.find((item) => item._id.trim() === id.trim());
    return item ? item.name : id;
  };

  // Render all info about film type  item
  const renderFilmDetails = (filmData) => {
    return (
      <div>
        <h2>{filmData.name}</h2>
        <p>Genre: {filmData.genre}</p>
        <p>Release Date: {filmData.releaseDate}</p>
        <p>Description: {filmData.description}</p>
        <p>Film Length: {filmData.filmLenght} minutes</p>
        <p>
          Directors: {returnItemName(filmData.directors, response.directors)}
        </p>
        <p>Cast: {filmData.cast}</p>
        <p>
          Production Companies:{" "}
          {returnItemName(
            filmData.productionCompanies,
            response.productionCompanies
          )}
        </p>
      </div>
    );
  };

  // Render all info about tv show type  item
  const renderTVShowDetails = (tvShowData) => {
    return (
      <div>
        <h2>{tvShowData.name}</h2>
        <p>Genre: {tvShowData.genre}</p>
        <p>Release Date: {tvShowData.releaseDate}</p>
        <p>Description: {tvShowData.description}</p>
        <p>Show Length: {tvShowData.showLenght} minutes</p>
        <p>
          Directors: {returnItemName(tvShowData.directors, response.directors)}
        </p>
        <p>Cast: {tvShowData.cast}</p>
        <p>
          Production Companies:{" "}
          {returnItemName(
            tvShowData.productionCompanies,
            response.productionCompanies
          )}
        </p>
      </div>
    );
  };

  // Render all info about game type  item
  const renderGameDetails = (gameData) => {
    return (
      <div>
        <h2>{gameData.name}</h2>
        <p>Genre: {gameData.genre}</p>
        <p>Release Date: {gameData.releaseDate}</p>
        <p>Description: {gameData.description}</p>
        <p>Game Length: {gameData.gameLenght} minutes</p>
        <p>Game Series: {gameData.gameSeries ? "Yes" : "No"}</p>
      </div>
    );
  };

  // Render all info about book type  item
  const renderBookDetails = (bookData) => {
    return (
      <div>
        <h2>{bookData.name}</h2>
        <p>Genre: {bookData.genre}</p>
        <p>Book Published Date: {bookData.bookPublishedDate}</p>
        <p>Description: {bookData.description}</p>
        <p>Reading Length: {bookData.readingLenght} pages</p>
        <p>Book Series: {bookData.bookSeries ? "Yes" : "No"}</p>
        <p>Author: {returnItemName(bookData.author, response.authors)}</p>
        <p>
          Publishing Companies:{" "}
          {returnItemName(
            bookData.publishingCompanies,
            response.publishingCompanies
          )}
        </p>
      </div>
    );
  };

  // Render info about selected type item
  let selectedItemDetails;
  switch (storyType) {
    case "Films":
      selectedItemDetails = renderFilmDetails(selectedData);
      break;
    case "TV Shows":
      selectedItemDetails = renderTVShowDetails(selectedData);
      break;
    case "Games":
      selectedItemDetails = renderGameDetails(selectedData);
      break;
    case "Books":
      selectedItemDetails = renderBookDetails(selectedData);
      break;
    default:
      selectedItemDetails = (
        <p>Sorry, there is no information available for this item.</p>
      );
  }

  return (
    <div>
      <Navbar />
      <div className="searchPage">
        <div className="backgroundImage" style={backgroundImageStyle}></div>
        <div className="resultsList-container">
          <h1>Exploring the Storyverse of</h1>
          <hr />
          {selectedItemDetails}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default MySelectedResult;
