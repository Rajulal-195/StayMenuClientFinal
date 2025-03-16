import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons/faPersonWalkingDashedLineArrowRight";
import { toast } from "react-toastify";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading  } = useFetch(`https://stayback1.onrender.com/api/hotels/room/${hotelId}`);
  const { user } = useContext(AuthContext);
  const { dates, options } = useContext(SearchContext);
  const [bookingStatus, setbookingStatus] = useState("Pending")
  const [hotels, sethotels] = useState('')
  const [users, setusers] = useState(user._id)
  const [room, setRoom] = useState();
  const [error, setError]= useState(false);

  const navigate = useNavigate();

  const handlehotels = async () => {
    const res = await axios.get(`https://stayback1.onrender.com/api/hotels/find/${hotelId}`)
    sethotels(res.data)

const ids = selectedRooms

  }
  const [mdate, setmdate] = useState([])
  
    const getDatesInRange = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const manage = { ...mdate, startDate, endDate }
      const date = new Date(start.getTime());
      const dates = [];

      while (date <= end) {
        dates.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
      }
      return dates;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const isAvailable = (roomNumber) => {
      const isFound = roomNumber.unavailableDates.some((date) =>
        alldates.includes(new Date(date).getTime())
      );
      return !isFound;
    };

    const handleSelect = (e) => {
      const checked = e.target.checked;
      const value = e.target.value;
      setSelectedRooms(
        checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
      );
    };
    const [Bookingdata, setBookingdata] = useState("")
    const handleBooking = async () => {
      try {
        const newBooking = {
          ...Bookingdata,
          user,
          options,
          bookingStatus,
          selectedRooms,
          hotels,
          dates,
          days
        };
            
        const response = await axios.post('https://stayback1.onrender.com/api/booking', newBooking);

        alert("your booking Id generated")
        toast.info("Booking successfully created!");
      } catch (error) {
        toast.error("Something went wrong with your booking. Please try again.");
      }
    };
    
    const handleClick = async () => {
      try {
        await Promise.all(
          selectedRooms.map((roomId) => {
            const res = axios.put(`https://stayback1.onrender.com/api/rooms/availability/${roomId}`, {
              dates: alldates,
            });
            return res.data;
          }),
        );
        setOpen(false);
        handleBooking();
        navigate("/newbooking");
      } catch (err) {
        toast.error("Something Went wrong")
      }
    };
    console.log("feched Rooms data is ",room)
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchPromises =selectedRooms.map(id =>
            fetch(`http://localhost:5000/api/rooms/find//${id}`).then((response) => {
              if (!response.ok) throw new Error('Error fetching data');
              return response.json();
            

            })
          );
  
          // Wait for all fetch requests to finish
          const results = await Promise.all(fetchPromises);
          setRoom(results);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
      handlehotels()
    }, []);
    
    return (
      <div className="reserve">
        <div className="rContainer">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose"
            onClick={() => setOpen(false)}
          />
          <span>Select your rooms:</span>
          {data.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">{item.price}</div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label color="red">{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleClick} className="rButton">
            Reserve Now!
          </button>
        </div>
      </div>
    );
  };

  export default Reserve;
