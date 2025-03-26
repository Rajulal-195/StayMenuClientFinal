import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./header.css";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [destination, setDestination] = useState(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();


  useEffect(() => {
    const getCities = async () => {
      try {
        const res = await axios.get('https://stayback1.onrender.com/api/hotels');
        setCities(res.data.map(item => item.city));
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };
    getCities();
  }, []);

  const handleOptionChange = (name, operation) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: operation === "i" ? prevOptions[name] + 1 : prevOptions[name] - 1,
    }));
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setDestination(null); // Clear selected item when typing

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

  const handleSelectSuggestion = (item) => {
    setQuery(item);
    setDestination(item);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' && activeSuggestionIndex < filteredSuggestions.length - 1) {
      setActiveSuggestionIndex(prevIndex => prevIndex + 1);
    } else if (e.key === 'ArrowUp' && activeSuggestionIndex > 0) {
      setActiveSuggestionIndex(prevIndex => prevIndex - 1);
    } else if (e.key === 'Enter' && filteredSuggestions.length > 0) {
      handleSelectSuggestion(filteredSuggestions[activeSuggestionIndex]);
    }
  };

  return (


    <div className="container my-5 p-3  setsec align-item-center">
      <div className="row setbro">

        <div className="col-lg-4">
          <div className="row">
            <p className="setcity">City, Property Name, Location</p>
            <input
              className="setinput"
              onClick={() => setOpenDate(false)}
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Where do you want to stay?"
            />
          </div>
        </div>

        {/* Date range */}
        <div className="col-lg-4">
          <div className="row">
            <p className="setcity">Check-in | Check-Out</p>
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
        </div>

        {/* Options (Adults, Children, Rooms) */}
        <div className="col-lg-4">
          <div className="row">
            <p className="setcity">Rooms & Guests</p>
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                {['adult', 'children', 'room'].map((item) => (
                  <div className="optionItem" key={item}>
                    <span className="optionText">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                    <div className="optionCounter">
                      <button
                        disabled={options[item] <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOptionChange(item, "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{options[item]}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOptionChange(item, "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="row ">
        <button className="headerBtn " onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Suggestions List */}
      <div className="setsuggestion">
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className={index === activeSuggestionIndex ? 'active' : ''}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

  );
};

export default Header;
