import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
    
    const suggestedNamesCard = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });

    return <div className="results-container">
        {suggestedNamesCard}
    </div>;
}

export default ResultsContainer;