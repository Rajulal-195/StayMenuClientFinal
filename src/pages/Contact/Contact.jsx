import React, { useState } from 'react'
import './Contact.css'
import Headers from '../../components/header/Headers'
import Footers from '../../components/footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [user, setUser] = useState("")

    const handleInput = (e) => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const navigater = useNavigate();
    const handleSubmit = async () => {
        try {
            const res = await axios.post("https://stayback1.onrender.com/api/contact", user)
            toast.success("Your Quary Request Is Submited Successfully...!")
            navigater("/");
        } catch (error) {
            console.log("erroe is", error)
            toast.error("Some Things Went Wrong ! ")
        }
    }


    console.log("contact", user);

    return (
        <>
            <Headers />
            <div className='main' data-aos="zoom-in-up">

                <h3 className='manage text-white'>“Reach out to us anytime and we'll happily answer your questions,”</h3>

                <img src='images/depo.jpg' alt='Contact Us' className='conatctbg' />
            </div>
            <div className="rt-container " data-aos="zoom-in-up">
                <div className="col-rt-12">
                    <div className="Scriptcontent">

                        <div className="container">
                            <div className="contact-parent">
                                <div className="contact-child child1">
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i> Address <br />
                                        <span className='text-info'> 52 Staymenu Village Turkadi  <br />Th.Hindoli District Bundi<br /> Rajasthan
                                            323024 <br />

                                        </span>
                                    </p>

                                    <p>
                                        <i className="fas fa-phone-alt"></i> Let's Talk <br />
                                        <a className='text-info' href="tel:+91 9462979594">+91 9462979594</a>
                                    </p>

                                    <p>
                                        <i className=" far fa-envelope"></i> General Support <br />

                                        <a className='text-info' href="mailto:Staymenu.info@gmail.com">Staymenu.info@gmail.com</a>

                                    </p>
                                </div>

                                <div className="contact-child child2">
                                    <div className="inside-contact">
                                        <h2>Contact Us</h2>
                                        <h3>
                                            <span id="confirm" />
                                        </h3>

                                        <p>Name *</p>
                                        <input type="text" onChange={handleInput} name='username' Required="required" />

                                        <p>Email *</p>
                                        <input type="text" onChange={handleInput} name='email' Required="required" />

                                        <p>Phone *</p>
                                        <input id="txt_phone" onChange={handleInput} name='phone' type="text" Required="required" />

                                        <p>Subject *</p>
                                        <input id="txt_subject" onChange={handleInput} name='subject' type="text" Required="required" />
                                        <p>Message *</p>
                                        <textarea id="txt_message" onChange={handleInput} name='message' rows="4" cols="20" Required="required" ></textarea>
                                        <input type="submit" onClick={handleSubmit}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footers />
        </>
    )
}
export default Contact;