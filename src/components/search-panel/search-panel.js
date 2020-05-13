import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onFilter }) => {
    return (
        <input type="text"
               className="form-control search-input" placeholder="Type to search..."
               onChange={ (e) => onFilter(e.target.value) }
        />
    )
}

export default SearchPanel
