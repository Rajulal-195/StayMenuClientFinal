import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Headers from "../../components/header/Headers";
import Header from "../../components/header/Header";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `https://stayback1.onrender.com/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999999}`
  );
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Headers />
      <Header/>

      <div className="container ">
        <div className="text-center wow fadeInUp my-3" data-wow-delay="0.5s">
          <h6 className="section-title text-center text-primary text-uppercase">Our Hotels</h6>
          <h1 >Explore Our <span className="text-primary text-uppercase ">Hotels</span></h1>
        </div>
        <div className="listContainer">
          <div className="container listWrapper">
            <div className="row ">

              <div className="listSearch col-md-2">
                <h1 className="lsTitle">Search</h1>
                <div className="lsItem">
                  <label>Destination</label>
                  <input placeholder={destination} type="text"
                  onChange={(e) => setDestination(e.target.value)} />
                <div className="lsItem">
                </div>
                  <label>Check-in Date</label>
                  <span onClick={() => setOpenDate(!openDate)}>{`${format(
                    dates[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDates([item.selection])}
                      minDate={new Date()}
                      ranges={dates}
                    />
                  )}
                </div>
                <div className="lsItem">
                  <label>Options</label>
                  <div className="lsOptions">
                    <div className="lsOptionItem">
                      <span className="lsOptionText">
                        Min price <small>per night</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMin(e.target.value)}
                        className="lsOptionInput"
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">
                        Max price <small>per night</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMax(e.target.value)}
                        className="lsOptionInput"
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Adult</span>
                      <input
                        type="number"
                        min={1}
                        className="lsOptionInput"
                        placeholder={options.adult}
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Children</span>
                      <input
                        type="number"
                        min={0}
                        className="lsOptionInput"
                        placeholder={options.children}
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Room</span>
                      <input
                        type="number"
                        min={1}
                        className="lsOptionInput"
                        placeholder={options.room}
                      />
                    </div>
                  </div>
                </div>
                <button onClick={handleClick}>Search</button>
              </div>
              <div className="listResult col-md-10">
                {loading ? (
                  "loading"
                ) : (
                  <>
                    {data.map((item) => (
                      <SearchItem item={item} key={item._id} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
