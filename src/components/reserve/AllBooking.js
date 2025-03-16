import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Headers from '../header/Headers';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from '../../hooks/useFetch';

function AllBooking() {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const [book, setBook] = useState(booking);
    const [select, setselected] = useState('');




    useEffect(() => {
        const handleBook = async () => {
            try {
                const res = await axios.get(`https://stayback1.onrender.com/api/booking/user/${user._id}`);
                setBooking(res.data.reverse());
                setselected(res.data.selectedRooms)
                toast.success("All Booking Fetched");
            } catch (error) {
                toast.error("Failed to fetch bookings!");
                console.error("Something went wrong!", error);
            }
        };

        handleBook();

    }, [user._id]);

    if (booking.length === 0) {
        return (
            <div className='container'>
                <Link to="/">
                    <h3 className='setno'>
                        <img className='imgse' src='images/books.gif' alt="No Bookings" />
                        <p className='alert alert-info text-center'>You have not booked any hotels yet!</p>
                    </h3>
                </Link>
            </div>
        )
    }


    return (
        <>
            <Headers />
            {booking.map(newBooking => (
                <div className='container bord border border-secondary ' >
                    <div className='row mx-md-3'>
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
                    <div className='row m-md-3 p-3'>
                        <strong className='text-secondary'>Booking ID:&emsp;
                            {newBooking._id}
                        </strong>
                        <div className='col-md-6 text-center bg-warning '>
                            {newBooking.dates.map(date => (
                                <li key={date._id}>
                                    <strong>Arrival:</strong> {new Date(date.startDate).toLocaleString()}<br />
                                </li>
                            ))}
                        </div>
                        <div className='col-md-6 text-center bg-warning'>

                            {newBooking.dates.map(date => (
                                <li key={date._id}>
                                    <strong>Departure:</strong> {new Date(date.endDate).toLocaleString()}
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className='row m-md-3'>
                        <h5>Booking Details: </h5>
                        <div className='col-md-6  p-md-4'>
                            {newBooking.user.map(user => (
                                <div className='' key={user._id}>
                                    <strong className='m-2'>Booking Id:</strong> {newBooking._id}<br />
                                    <strong className='m-2'>Name:</strong> {user.username}<br />
                                    <strong className='m-2'>Email:</strong> {user.email}<br />
                                    <strong className='m-2'>Phone:</strong> {user.phone}
                                </div>
                            ))}

                        </div>
                        <div className='col-md-6 p-md-4 pt-4'>
                            {newBooking.hotels.map(hotel => (
                                <div className='' key={hotel._id}>

                                    <strong className='m-2'>Proprty Name: </strong>{hotel.name}<br />
                                    <strong className='m-2'>Type: </strong>{hotel.type}<br />
                                    <strong className='m-2 '>City: </strong>{hotel.city}<br />
                                    <strong className='m-2'>Address: </strong>{hotel.address}<br />
                                </div>
                            ))}
                        </div>
                        <div className='row'>
                            <div className='col-md-6 ps-md-4'>
                                <strong className='m-2'>Booked Rooms Id: </strong>
                                <ul className='text-end'>
                                    {newBooking.selectedRooms.map(roomId => (
                                        <li key={roomId}>{roomId.price}</li>

                                    ))}
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <ul>
                                    {newBooking.options.map(option => (
                                        <li className='' key={option._id}>
                                            <strong>Adults:</strong> {option.adult}<br />
                                            <strong>Children:</strong> {option.children}<br />
                                            <strong>Rooms:</strong> {option.room}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='row m-md-3 ' >
                            <h5>Payment Details: </h5>
                            <div className='col-md-8'>
                                <ul>
                                    <li className='notes'><span className='text-danger fw-bold' >Please Note:</span> Payment for this booking has been collected by Staymenu.
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <ul className='m-md-3  '>
                                    {newBooking.hotels.map(hotel => (
                                        <li key={hotel._id}>
                                            <strong>Rent Per Day :</strong> {hotel.cheapestPrice}<br />
                                            <strong>Total Days :</strong> {newBooking.days}<br />
                                            <strong>Total Rent :</strong> {(newBooking.days * hotel.cheapestPrice * (hotel.options?.length || 1)).toFixed(2)}<br />
                                            <strong>Taxes and Fees :</strong> {((newBooking.days * hotel.cheapestPrice * (hotel.options?.length || 1)) * 0.12).toFixed(2)}<br />
                                            <strong className='text-info'>Grand Total:
                                                {(
                                                    (newBooking.days * hotel.cheapestPrice * (hotel.options?.length || 1)) +
                                                    ((newBooking.days * hotel.cheapestPrice * (hotel.options?.length || 1)) * 0.12)
                                                ).toFixed(2)}
                                            </strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p><strong>Booking Status:</strong>
                            <div className='m-2 booking-footer text-center text-white'>
                                <h6 className={newBooking.bookingStatus === "Pending" ? 'p-1 bg-danger' : 'p-1 bg-success'}>
                                    {newBooking.bookingStatus === "Pending" ? "Pending" : "Success"}
                                </h6>
                            </div>
                        </p>
                        <div  ><strong className="text-center">Note:</strong>
                            <ul>
                                <li className='notes'><span className='text-danger fw-bold'>IMPORTANT:</span> At check-in, you must present the credit card used to make this booking and a valid photo ID with the same
                                    name. Failure to do so may result in the hotel requesting additional payment or your reservation not being honored.
                                    If you have submitted additional documentation for a third party booking or paid via a different payment method,
                                    please disregard the note above.
                                </li>
                                <li className='notes'>All rooms are guaranteed on the day of arrival. In the case of a no-show, your room(s) will be released and you will be subject to
                                    the terms and conditions of the Cancellation/No-Show Policy specified at the time you made the booking as well as noted in
                                    the Confirmation Email.
                                </li>
                                <li className='notes'>The total price for this booking does not include mini-bar items, telephone usage, laundry service, etc. The hotel will bill you directly.
                                </li>
                                <li className='notes'>In cases where Breakfast is included with the room rate, please note that certain hotels may charge extra for children travelling with
                                    their parents. If applicable, the hotel will bill you directly. Upon arrival, if you have any questions, please verify with the hotel.</li>
                                <li className='notes'><span className='text-danger fw-bold' >Cancellation Policy:</span> Any cancellation received will incur a charge of 90% of the booking value. Failure to arrive at your hotel or property will be treated as a NoShow and will incur a charge of 90% of the booking value (Hotel policy).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            ))}
        </>
    );
}

export default AllBooking;
