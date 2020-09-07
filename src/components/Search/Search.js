import React from 'react';
import './Search.css';

const Search = ({ formOnSubmit }) => {
    return (
        <form onSubmit={formOnSubmit}>
            <input
                type="text"
                placeholder='Search...'
                name="name"
            />
            <input className="btn btn-secondary btn-sm" type="submit" value='Submit' />
        </form>
    )
}

export default Search;
