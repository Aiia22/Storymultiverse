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

const MySearchSubResult = () => {
  const location = useLocation();
  const { res, storyType, data } = location.state;
  const navigate = useNavigate();
  const storyName = res[0].storyName;

  const goToDetail = (id) => {
    if (id) {
      navigate(`/my-selected-item/${id}`, {
        state: {
          storyType: storyType,
          response: data,
          selectedData: res.find((data) => data._id === id),
        },
      });
    }
  };

  const returnName = (param) => {
    const objData = data[0];
    if (param.author) {
      const author = objData.authors.find(
        (e) => e._id.trim() === param.author.trim()
      );
      return author ? author.name : param.author;
    } else if (param.directors) {
      const directors = objData.directors.find(
        (e) => e._id.trim() === param.directors.trim()
      );
      return directors ? directors.name : param.directors;
    } else if (param.productionCompanies) {
      const productionCompanies = objData.productionCompanies.find(
        (e) => e._id.trim() === param.productionCompanies.trim()
      );
      return productionCompanies
        ? productionCompanies.name
        : param.productionCompanies;
    } else if (param.publishingCompanies) {
      const publishingCompanies = objData.publishingCompanies.find(
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
