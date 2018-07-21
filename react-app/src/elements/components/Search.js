import React from 'react';
import '../../css/components/Search.css';

const Search = () => {
    return (
        <div className='search'>
            <form className='search__form' id='search' action='#' method='get'>
                <input className='search__form--input' name='search' type='text' placeholder='Search...' />
                <button className='search__form--button' type='submit'></button>
            </form>
        </div>
    );
  }

export default Search;
