import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Carousel() {
    return (
        <>


            <div data-aos="zoom-in-up">

                <div className="container-fluid p-0  back animated-div" >
                    <div id="header-carousel" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner ">
                            <div className="carousel-item active  settle">

                                <img className="w-100 imgset" src="https://img.freepik.com/premium-photo/online-hotel-accommodation-booking-website-provide-modish-reservation-system_31965-40451.jpg" alt="" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3">
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>

                                        <button href='#searching' className="cabutoon">Book A Hotel</button>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item settle">
                                <img className="w-100 imgset" src="https://c4.wallpaperflare.com/wallpaper/947/345/226/inside-of-water-bungalow-four-seasons-maldives-white-fabric-sofa-set-black-wooden-coffee-maker-and-brown-and-black-wooden-dresser-wallpaper-preview.jpg" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3">
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Perfect home with perfect space</h1>

                                        <button href="#searching" className="cabutoon">Book A Room</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item settle">
                                <img className="w-100 imgset" src="https://us.123rf.com/450wm/dragoscondrea/dragoscondrea2310/dragoscondrea231002680/215656339-retired-senior-woman-arrives-at-hotel-reception-and-fills-out-reservation-online-form-smiling-and.jpg?ver=6" alt="Image" />

                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3">
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Creating spaces for you</h1>

                                        <button href="#searching" className="cabutoon">Book A Room</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item settle">
                                <img className="w-100 imgset" src="https://frontdesksupply.com/wp-content/uploads/2024/05/hotel-management-software-1080x675.webp" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3">
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">You're Always Welcome Here</h1>

                                        <button href="#searching" className="cabutoon">Book A Room</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item settle">
                                <img className="w-100 imgset" src="https://media.istockphoto.com/id/1367208496/photo/happy-family-and-kids-with-travel-suitcase-buying-ticket-booking-hotel-online.jpg?s=612x612&w=0&k=20&c=jXtsnyZzjv4zLViT6-supq_NWhyf76NTVTJXbZsxVf4=" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3">
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Stay once, carry memories forever</h1>
                                        <button href="#searching" className="cabutoon">Book A Room</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Carousel