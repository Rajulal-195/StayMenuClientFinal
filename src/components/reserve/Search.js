import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchBar = () => {
  const [cities, setCity] = useState([])
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedItem(null); 

    if (value.length > 0) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle selecting an item from suggestions
  const handleSelectItem = (item) => {
    setQuery(item);
    setSelectedItem(item);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  // Handle keyboard events (up, down, enter)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // Navigate down in suggestions
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      // Navigate up in suggestions
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === 'Enter') {
      // Select the active suggestion
      if (filteredSuggestions.length > 0) {
        handleSelectItem(filteredSuggestions[activeSuggestionIndex]);
      }
    }
  };
  // Fetch suggestions from API
  const getDestination = async () => {
    try {
      const res = await axios.get(`https://stayback1.onrender.com/api/hotels`);
     // Assuming `res.data.city` contains an array of city names
      setCity(res.data.map(item => item.city));
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
    }
  };

  console.log("city data is ", cities)

  // Fetch suggestions once component mounts
  useEffect(() => {
    getDestination();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search cities..."
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className={index === activeSuggestionIndex ? 'active' : ''}
              onClick={() => handleSelectItem(suggestion)}

            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchBar;
