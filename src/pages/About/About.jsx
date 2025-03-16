import React from 'react'
import Headers from '../../components/header/Headers'
import "./About.css"
import Footers from '../../components/footer/Footer'

function About() {
    return (
        <>
            <Headers />
            <div className='container' data-aos="zoom-in-up">
                <div className='row about'>
                    <p className='headshorts text-center'>About  Staymenu</p>
                </div>
                <div className='row '>
                    {/* <p className='headshort'>Our Mission - </p> */}
                    <div className='col-md-6'>
                        <img className='missson' src='./images/mission.gif' alt='missoin logo' />
                    </div>
                    <div className='col-md-6'>
                        <p className='p-2  member'>
                            &emsp;&emsp; At <span className='comp'>STAYMENU</span> , our mission is to provide every guest with an exceptional and personalized experience, ensuring a stay that is comfortable, convenient, and memorable. We are dedicated to offering top-tier service, modern amenities, and a welcoming atmosphere that makes you feel right at home.

                            We strive to exceed expectations by paying attention to every detail, from the quality of our accommodations to the warmth of our hospitality. Our commitment to sustainability, community engagement, and guest satisfaction drives everything we do, ensuring that each visit is not just a stay, but an experience.
                        </p>
                        
                    </div>
                </div>

               

            </div>
            <div className='container-fluid px-md-5 abos' data-aos="zoom-in-up">
                <div className="container">
                    A <span className='compname'>STAYMENU</span>  is a platform that allows users to search, compare, and book accommodations at hotels, resorts, or other types of lodging. These websites often provide information about hotel locations, amenities, pricing, room availability, and user reviews, making it easier for customers to make informed decisions when planning their trips.<br />

                    <h4>  Here are some key features commonly found on Staymenu Plateform:</h4>
                    <ol>
                        <li><h6>Search Functionality:</h6> Users can search for hotels based on location, travel dates, number of guests, and room types. Filters allow them to refine their search according to preferences, like budget, amenities, or star ratings.</li>
                        <li><h6>Hotel Listings:</h6> Detailed listings provide information about each hotel, including room rates, available dates, pictures, facilities, and guest reviews.</li>
                        <li> <h6>Online Booking System: </h6>Customers can reserve rooms directly through the website, often with a secure payment gateway. Some sites may also offer options like free cancellations or instant booking confirmation.</li>
                        <li><h6>User Reviews and Ratings: </h6>Many hotel booking websites integrate guest reviews and ratings, helping users gauge the quality of their accommodation before booking.</li>
                        <li>Price Comparison: Some hotel booking sites offer comparisons between various hotel prices, helping customers find the best deals across different platforms or properties.</li>
                        <li> <h6>Special Deals & Offers: </h6>Promotions, discounts, loyalty programs, or package deals that can be accessed through the site.</li>
                        <li><h6>Customer Support: </h6>Access to customer service via live chat, email, or phone in case users have questions or issues regarding their bookings.</li>
                    </ol>
                </div>
            </div>

            <div class="container mt-3" data-aos="zoom-in-up">
                <div class="row">
                    <p className='headshort '>Meet Our Team -  </p>
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <img src='./images/narrotam.jpeg' alt='' />
                            <div class="over-layer">
                                <div class="team-content">
                                    <h3 class="title">Mr. Narottam Sharma</h3>
                                    <span class="post">CEO</span>
                                    <p class="description">Narottam Sharma is Founder & CEO of STAY MENU Organisation. StayMenu is a global platform that empowers entrepreneurs and small businesses with hotels and homes</p>
                                </div>
                            </div>
                            <ul class="social-links">
                                <li><a href="#" class="fab fa-twitter"></a></li>
                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                <li><a href="#" class="fab fa-facebook"></a></li>
                                <li><a href="#" class="fab fa-google-plus"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <img src='./images/RajuMewara.jpeg' alt='' />
                            <div class="over-layer">
                                <div class="team-content">
                                    <h3 class="title">Mr. Raju Mewara</h3>
                                    <span class="post">managing director</span>
                                    <p class="description">Raju Mewara is a Tech Head & Management at STAY MENU Organisation , which are responsite for find Out Comfortable stay for Every Turist in, All India</p>
                                </div>
                            </div>
                            <ul class="social-links">
                                <li><a href="#" class="fab fa-twitter"></a></li>
                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                <li><a href="#" class="fab fa-facebook"></a></li>
                                <li><a href="#" class="fab fa-google-plus"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <img src='./images/depanshu.jpeg' alt='' />
                            <div class="over-layer">
                                <div class="team-content">
                                    <h3 class="title">Mr. Deepanshu Gupta</h3>
                                    <span class="post">Tech Team Leader</span>
                                    <p class="description">Deepanshu Gupta is Manage Marketing Retated Task like advertisement and Listing Tech Developer..</p>
                                </div>
                            </div>
                            <ul class="social-links">
                                <li><a href="#" class="fab fa-twitter"></a></li>
                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                <li><a href="#" class="fab fa-facebook"></a></li>
                                <li><a href="#" class="fab fa-google-plus"></a></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
            <Footers />
        </>
    )
}

export default About