import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { MDBIcon } from 'mdb-react-ui-kit';

function Headers() {
    const [logData, setlogData] = useState("")
    const userdata = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        setlogData(user);
    }

    const logOut = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }
    useEffect(() => {
        userdata()
    }, [])

    const { user } = useContext(AuthContext);

    return (
        <>

            <div className="container-fluid bg-dark px-0 border-dark shad">
                <div className="row gx-0">
                    <div className="col-lg-2 bg-white d-none d-lg-block">
                        <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <img src='https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png' width={150} height={98} alt='Company Logo' />
                        </Link>
                    </div>
                    <div className="col-lg-10">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center mt-2 me-4">
                                    <p>
                                        <MDBIcon icon="envelope" className="me-3" />
                                        &ensp;  <a className='text-secondary' href="mailto:Staymenu.info@gmail.com" target="_blank">Staymenu.info@gmail.com</a>
                                    </p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center mt-2">
                                    <p>
                                        <MDBIcon icon="phone" className="me-3" />  &ensp;<a className='text-secondary' href="tel:+91 9462979594">+91 9982129594</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-center ">
                              

                                <div className='text-secondary mt-3'>
                                    <a href='https://www.facebook.com/share/awQaug6PfNs1drif/?mibextid=qi2Omg' target='_blank' className='me-4 text-reset'>
                                        <MDBIcon fab icon="facebook-f" />




                                    </a>
                                    <a href="https://x.com/stay_menu" target="_blank" className='me-4 text-reset'>
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                    <a href='' className='me-4 text-reset'>
                                        <MDBIcon fab icon="google" />
                                    </a>
                                    <a href="https://www.instagram.com/staymenu_?igsh=MW1lc3dpZnJnYTI0dg==" target="_blank" className='me-4 text-reset'>
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                    <a href='' className='me-4 text-reset'>
                                        <MDBIcon fab icon="linkedin" />
                                    </a>
                                    <a href='' className='me-4 text-reset'>
                                        <MDBIcon fab icon="github" />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-white p-2 ps-5 p-lg-0">
                            <Link to="/" className="navbar-brand  d-lg-none">
                                <img src="https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png" className='mlogo' width={120} height={105} alt='Company Logo' />
                            </Link>
                            <button type="button" className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon ">

                                    <i className="fa fa-bars text-white me-2" />
                                </span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between p-auto" id="navbarCollapse">
                                <div className="navbar-nav m-auto py-3">
                                    <Link to="/" className="nav-item nav-link   active"><i className="fa fa-home text-white mx-2 "></i>Home</Link>
                                    {/* <Link to="/hotels" className="nav-item  nav-link"><i className="fa fa-hotel text-white mx-2"></i>Hotels</Link> */}
                                    <Link to="/contact" className="nav-item  nav-link"><i className="fa fa-phone-alt text-white mx-2 "></i>Contact</Link>
                                    {/* <Link to="/services" className="nav-item nav-link">Services</Link> */}
                                    <Link to="/about" className="nav-item   nav-link">&ensp;<i className="fa fa-book">&ensp;</i>About</Link>
                                    {user ? (<><div className="dropdown">
                                        <img
                                            src={user.photos}
                                            className="avatar"
                                        />
                                        <button className="btn text-white dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.username}
                                        </button>
                                        <ul className="dropdown-menu bg-primary text-white p-3" aria-labelledby="dropdownMenuButton1">
                                            <Link className="dropdown-item text-white profile" to="/profile">Profile</Link>
                                            <Link className="dropdown-item text-white  profile" to='/myAllbooking'>My Booking</Link>
                                            <li><a className="dropdown-item text-white profile" href="#" onClick={logOut}>Logout</a></li>
                                        </ul>
                                    </div></>) : (<>
                                        <div className="navbar-nav ">
                                            <Link to="/signup" className="nav-item nav-link usre"><i className="fa fa-user-plus text-white mx-2"></i>SignUp</Link>
                                            <Link to="/Login" className="nav-item nav-link usre"><i className="fa fa-user mx-2"  ></i>Signin</Link>
                                        </div>

                                    </>)}
                                </div>
                                <Link to="/Listproperty" className="btn bg-white rounded-0 border pt-3 px-md-5 d-none d-lg-block">List Property<i className="fa fa-arrow-right ms-3"></i></Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headers
