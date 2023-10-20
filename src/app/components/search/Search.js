import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';

const Search = () => {

//   const dispatch = useDispatch()

  const [query, setQuery] = useState('');
  console.log(query)
 

  const handleSearch = () => {
    //   dispatch(fetchBooks(query))
    console.log('search')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
    //   dispatch(fetchBooks(query));
    }
  };

  return (
    <div className='search-book'>
      <input
        className='search-input'
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch} className='search-button'>Search</button>
    </div>
  );
};

export default Search;