import React from 'react';

const SearchResultsTitle = (props) => {
    return (
        <h1 className='search-results-title'>{props.resultsNumber} Résultats pour : "{props.request}"</h1>
    );
};

export default SearchResultsTitle;