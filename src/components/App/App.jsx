import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import SearchBox  from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

function App () {
    const [isTyping, setTyping] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setTyping(!inputText);
        if (inputText)
            setSuggestedNames(name(inputText))
        else
            setSuggestedNames([]);

        // {inputText ? setSuggestedNames(name(inputText)) : setSuggestedNames([])};
    }

    return <div>
        <Header isTyping={isTyping} />
        <SearchBox handleInputChange={handleInputChange} />
        <ResultsContainer suggestedNames={suggestedNames} />
    </div>;
}

export default App;