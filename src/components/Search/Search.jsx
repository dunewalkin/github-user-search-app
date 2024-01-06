import { useState, useEffect } from 'react';
import './search.scss';

const Search = ({ onSearchResult }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('API Response:', data);

      onSearchResult(data);

      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);

      setError('No results');
    }
  };

  return (
   <main className='search-wrapper'>
      <form className='search-form' onSubmit={handleSearch}>
         <input
         className="search-input"
         type="text"
         placeholder="Search GitHub username…"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         {error && <p className='error'>{error}</p>}
         <button type="submit" className='search-btn'>
         Search
         </button>
      </form>
   </main>
    
  );
};

export default Search;
