import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Connecting components to the pages
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

import "../styles/CSS/main.css";
import "../styles/CSS/searchMainPage.css";
import SPIMG from "../images/searchMainPage.png";
import apiData from "../data/data.json";

const backgroundImageStyle = {
  backgroundImage: `url(${SPIMG})`,
};
function returnResults(input, apiResData) {
  const result = input.toLowerCase().replace(/\s+/g, "");
  const dataResult = {};

  Object.keys(apiResData).forEach((storyType) => {
    dataResult[storyType] = apiResData[storyType].filter((data) => {
      return data.name.toLowerCase().replace(/\s+/g, "").includes(result);
    });
  });

  return dataResult ? dataResult : {};
}

export default function MySearch() {
  const router = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);

  /*    useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("apiurl/api/data"); // API endpoint
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []); */
  useEffect(() => {
    setData(apiData);
  }, []);

  const handleSearchRequest = (event) => {
    event.preventDefault();
    const res = returnResults(searchInput, data);

    //ISSUE HERE ! the setter need to be call twice to work
    setFilteredResult(res);

    if (Object.keys(res).length > 0) {
      router(`/my-search-result`, {
        state: { res: res, data: data },
      });
    }
  };
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="searchPage">
        <h1>Unlock the Multiverse</h1>
        <h2>
          Enter a Story, Choose a Type, and Discover Limitless Adaptations!
        </h2>
        <div className="backgroundImage" style={backgroundImageStyle}></div>
        <div id="searchComponentContainer">
          <SearchBar
            searchInput={searchInput}
            searchInputOnChange={handleSearchInputChange}
            postData={handleSearchRequest}
          />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
