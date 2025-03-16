import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentGate from './PaymentGate';
import useFetch from '../../hooks/useFetch';
import Headers from "../header/Headers"


const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const userId = user._id;
    const lastElement = booking[booking.length - 1];
    const [room, setroom] = useState({
        lastElemente:
            [{
                selectedRooms: []
            }]
    })
    const [selectedRooms, setSelectedRooms] = useState([]);

    console.log('rroms data ', room)
    const [roomrate, setroomrate] = useState();
    const { data, loading, error } = useFetch(`http://localhost:5000/api/rooms/find/${lastElement.selectedRooms[0]}`);
    const Navigate = useNavigate();
    const handlepayment = async () => {
        Navigate("/payment")
    };

    console.log("rooms data ", roomrate)

    const handleBook = async () => {
        const response = await axios.get(`https://stayback1.onrender.com/api/booking/user/${userId}`);
        setBooking(response.data);
        setroomrate(response.data.selectedRooms[0])
        toast.info("Your Booking is Featched...");
        try {
        } catch (error) {
            console.error("Something went wrong!", error);
            toast.error("Something went wrong!");
        }
    };
    useEffect(() => {
        handleBook()
    }, [userId]);


    if (booking.length === 0) {
        return (
            <div className='container'>
                <Link to="/">
                    <h3 className='setno'>
                        <img className='imgse' src='images/books.gif' alt="No Booking" />
                        <p className='alert alert-info text-center'>You have not booked any hotels yet!</p>
                    </h3>
                </Link>
            </div>
        );
    }


    return (
        <>
            <Headers />
            <div className='container bord '>
                <div className='row '>
                    <div className='col-md-3 text-center  '>
                        <img src="https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png" className='booking' alt='Company Logo' />
                    </div>


                    <div className="col-md-5 text-center setex">

                        <Link className="me-4 logcol" to="https://www.facebook.com/share/awQaug6PfNs1drif/?mibextid=qi2Omg" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                        <Link className="logcol" to="https://x.com/stay_menu">
                            <img src='/images/xx.jpg' width={25} alt='Twitter' />
                        </Link>
                        <Link className="mx-4 logcol" to="https://www.instagram.com/staymenu_?igsh=MW1lc3dpZnJnYTI0dg==" target="_blank"><i className="fab fa-instagram"></i></Link>
                        <Link className="logcol" to="" target="_blank"><i className="fab fa-youtube"></i></Link>

                    </div>
                    <div className=' col-md-4 setex'>

                        <p className='setex text-center'>GST No: 08HIAPS1106L2Z4</p>
                    </div>
                </div>
                <hr />
                <div className='row m-md-3 py-2'>
                    <div className='col-md-6 text-center bg-warning '>
                        {lastElement.dates.map(date => (
                            <li key={date._id}>
                                <strong>Arrival:</strong> {new Date(date.startDate).toLocaleString()}<br />
                            </li>
                        ))}
                    </div>
                    <div className='col-md-6 text-center bg-warning'>

                        {lastElement.dates.map(date => (
                            <li key={date._id}>
                                <strong>Departure:</strong> {new Date(date.endDate).toLocaleString()}
                            </li>
                        ))}
                    </div>
                </div>

                <div className='row m-md-3'>
                    <h5>Booking Details: </h5>
                    <div className='col-md-6  p-4'>
                        {lastElement.user.map(user => (
                            <div className='' key={user._id}>
                                <strong className='m-3'>Booking Id:</strong> {lastElement._id}<br />
                                <strong className='m-3'>Name:</strong> {user.username}<br />
                                <strong className='m-3'>Email:</strong> {user.email}<br />
                                <strong className='m-3'>Phone:</strong> {user.phone}
                            </div>
                        ))}

                    </div>
                    <div className='col-md-6 p-4'>
                        {lastElement.hotels.map(hotel => (
                            <div className='' key={hotel._id}>
                                <strong className='mx-3'>Proprty Name: </strong>{hotel.name}<br />
                                <strong className='mx-3'>Type: {hotel.type}</strong>{hotel.type}<br />
                                <strong className='mx-3 '>City: </strong>{hotel.city}<br />
                                <strong className='mx-3'>Address: </strong>{hotel.address}<br />
                            </div>
                        ))}

                    </div>
                </div>

                <div className='row m-md-3 '>
                    <h5 className='m-4'>Payment Details: </h5>

                    <div className='col-md-6'>

                        <ul>
                            {lastElement.options.map(option => (
                                <li className='ms-4' key={option._id}>
                                    <strong className='text-center'>Adults:</strong> {option.adult}<br />
                                    <strong>Children:</strong> {option.children}<br />
                                    <strong>Rooms:</strong> {option.room}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className='col-md-6'>
                        <ul className='m-3  align-right '>
                            {lastElement.hotels.map(payment => (
                                <li key={payment.name}>
                                    <strong>Total Day:</strong> {lastElement.days}<br />
                                    <strong>Rent Per Day:</strong> {payment.cheapestPrice}<br />
                                    <strong>Total Rent Day:</strong> {payment.cheapestPrice * lastElement.days}<br />
                                    <strong>GSTIN:</strong> {payment.cheapestPrice * lastElement.days * 18 / 100}<br />
                                    <strong >Grand Total:</strong> {payment.cheapestPrice * lastElement.days + payment.cheapestPrice * lastElement.days * 18 / 100}<br />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p><strong>Booking Status:</strong>
                    <div className='m-2 booking-footer text-center'>
                        <h6 className={lastElement.bookingStatus === "Pending" ? 'p-1 bg-danger text-white' : 'p-1 bg-success text-white'}>
                            {lastElement.bookingStatus === "Pending" ? "Pending" : "Success"}
                        </h6>
                    </div>
                </p>
                <button className='btn handlebutton my-5' onClick={handlepayment}>Pay Now</button>
                <PaymentGate paymentId={lastElement} />
            </div>
        </>
    );
};

export default Booking;
