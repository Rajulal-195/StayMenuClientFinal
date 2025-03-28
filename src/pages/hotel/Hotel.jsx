import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import Headers from "../../components/header/Headers"



const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  const { data, loading, error } = useFetch(`https://stayback1.onrender.com/api/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);


  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Headers />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelImages horizontal-scrolling-items pt-4">
            {data.photos?.map((photo, i) => (

              <div className="hotelImgWrapper horizontal-scrolling-items__item" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  height={280}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelWrapper container">
            <h1 className="hotelTitl ">{data.name}</h1>
            <div className="hotelDetails row ">
              <div className="hotelDetailsTexts col-md-7">
                <h6 className="hotelTitle">{data.title}</h6>
                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="hotelDistance">{data.city}, </span>
                  <span className="hotelDistance">{data.address}</span>
                </div>
                <span className="Distance">
                  Excellent location – {data.distance}m from center
                </span><br />
                <p className="hotelDesc">{data.desc}</p>
                <span className="hotelPriceHighlight m-3">
                  Book a stay over  ₹ {data.cheapestPrice} at this property...
                  <br/> you Can Cancel any time Before one day of CheckIn...
                </span>
              </div>
              <div className="hotelDetailsPrice col-md-5">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of {data.city}, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b> ₹ {days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};
export default Hotel;