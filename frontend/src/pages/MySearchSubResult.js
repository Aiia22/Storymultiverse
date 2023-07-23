import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

//******* Import component(s) *******/
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";

import "../styles/CSS/main.css";
import "../styles/CSS/searchSubPages.css";
import SSPIMG from "../images/searchSubPages.png";

const backgroundImageStyle = {
  backgroundImage: `url(${SSPIMG})`,
};

// Implement the search bar functionality
const MySearchSubResult = ({}) => {
  const router = useLocation();
  const { res, storyType, data } = router.state;
  const route = useNavigate();
  const storyName = res[0].storyName;
  const goToDetail = (id) => {
    if (id) {
      route(`/my-search-sub-result/${id}`, {
        state: { res },
      });
    }
  };
  const returnName = (param) => {
    if (param.author) {
      const author = data.authors.find(
        (e) => e._id.trim() === param.author.trim()
      );
      return author ? author.name : param.author;
    } else if (param.directors) {
      const directors = data.directors.find(
        (e) => e._id.trim() === param.directors.trim()
      );
      return directors ? directors.name : param.directors;
    } else if (param.productionCompanies) {
      const productionCompanies = data.productionCompanies.find(
        (e) => e._id.trim() === param.productionCompanies.trim()
      );
      return productionCompanies
        ? productionCompanies.name
        : param.productionCompanies;
    } else if (param.publishingCompanies) {
      const publishingCompanies = data.publishingCompanies.find(
        (e) => e._id.trim() === param.publishingCompanies.trim()
      );
      return publishingCompanies
        ? publishingCompanies.name
        : param.publishingCompanies;
    } else {
      return param._id;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="searchPage">
        <div className="backgroundImage" style={backgroundImageStyle}></div>
        <div className="resultsList-container">
          <h1>Exploring the Storyverse</h1>
          <h2>
            Story name: {storyName} - Type: {storyType}
          </h2>
          <hr />
          <div id="resultsList">
            {res.length > 0 && (
              <ul className="list">
                {res.map((data) => (
                  <li
                    key={data._id}
                    onClick={() => goToDetail(data._id)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <strong>{data.name}</strong> by {returnName(data)} (
                    {data.genre})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default MySearchSubResult;
