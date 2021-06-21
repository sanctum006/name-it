import React from 'react';
import "./NameCard.css"

const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggestedName }) => {
    return (
        <a href={`${nameCheapURL}${suggestedName}`} className="result-name-link">
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;