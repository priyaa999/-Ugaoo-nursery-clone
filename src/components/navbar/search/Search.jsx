import React from "react";
import "./search.css";

function Search() {
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search for plants, seeds and planters..."
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24 "
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="m10 2a8 8 0 0 1 6.32 12.9l4.39 4.38-1.42 1.42-4.38-4.39A8 8 0 1 1 11 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Search;
