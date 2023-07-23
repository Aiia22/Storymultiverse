import React from "react";

//******* Import style logic *******/
import seachIcon from "../images/magnifier.png";
import "../styles/CSS/searchMainPage.css";

const SearchBar = ({ searchInput, searchInputOnChange, postData }) => {
  // Implement the search bar functionality
  return (
    <div id="searchComponent">
      <div className="icon-container"></div>
      <img src={seachIcon} alt="seachIcon" id="magnifierIcon" />
      <form onSubmit={postData}>
        <input
          required
          type="text"
          className="search-input"
          placeholder="Enter a name..."
          value={searchInput}
          onChange={searchInputOnChange}
        />
        <button type="submit" className="search-button">
          Search the Storyverse
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
