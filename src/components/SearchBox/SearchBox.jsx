import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleInputChange }) => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Type keyword" onChange={(event) => handleInputChange(event.target.value)} className="search-input" />
        </div>
    )
}

export default SearchBox;