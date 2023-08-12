import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ********  Import  components *****/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

//******* Import style logic *******/
import "../styles/CSS/main.css";
import "../styles/CSS/searchMainPage.css";
import SPIMG from "../images/searchMainPage.png";

// **** import axios *************/  ==> for DB data retrieval
import apiData from "../data/storyData.json"; // ==> using local data until DB fixed

const backgroundImageStyle = {
  backgroundImage: `url(${SPIMG})`,
};
function returnResults(input, apiResData) {
  const result = input.toLowerCase().replace(/\s+/g, "");
  const dataResult = {};

  Object.keys(apiResData[0]).forEach((storyType) => {
    dataResult[storyType] = apiResData[0][storyType].filter((data) => {
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

  //********* logic that use Database data *********************/
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

  //********* logic that use the json *********************/
  useEffect(() => {
    setData(apiData);
  }, []);

  const handleSearchRequest = (event) => {
    event.preventDefault();
    const res = returnResults(searchInput, data);

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
