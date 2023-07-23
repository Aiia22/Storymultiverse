import React from "react";

// Implement the search bar functionality
const SearchResults = ({ filteredResult, searchInput }) => {
  return (
    <div>
      <div className="resultItem">
        <h3>Result Type</h3>
        <p>result title </p>
        {filteredResult.length > 0 && searchInput.length > 0 ? (
          <div>
            <h2>We found something : </h2>
            <ul>
              {filteredResult.map((data) => (
                <li key={data._id}>
                  <strong>{data.name}</strong> by{" "}
                  {data.author ? data.author : data.directors} ({data.genre})
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No result found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
