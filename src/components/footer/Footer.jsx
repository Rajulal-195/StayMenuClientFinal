import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>

    <div data-aos="zoom-in-up">
    <hr className="text-info"/>
    <MDBFooter bgColor='white' className=" px-3 text-center text-lg-start text-muted  ">
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom animate-on-scroll'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
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
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              
                <img src="https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png" width={140} height={98} alt='Company logo' className='company mlogo ' />
        
              </h6>
              <p>
    
             Staymenu here for Book your perfect stay easily with our platform. Search, compare, and secure the best hotel deals worldwide with instant confirmation and secure payments.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <ul className="box">
            

              <li> <Link className="text-reset" to="/Listproperty">List Property</Link></li>
              <li> <Link className="text-reset" to="/contact">Contact As </Link></li>
              <li> <Link className="text-reset" to="/about">About</Link></li>

            </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Term & Conditions </h6>
              <ul className="box">
            

            <li> <Link className="text-reset" to="/privacy">Privecy Policy</Link></li>
            <li> <Link className="text-reset" to="/general">GeneralCancellationPolicy </Link></li>
            <li> <Link className="text-reset" to="/about">About</Link></li>

          </ul>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                <a className='text-secondary' href="https://maps.app.goo.gl/aR4NQiYMEFvvWHsB8" target="_blank">
                52 Staymenu Village Turkadi Th.Hindoli District Bundi Rajasthan
                323024
              </a>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                &ensp;  <a className='text-secondary' href="mailto:Staymenu.info@gmail.com" target="_blank">Staymenu.info@gmail.com</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />  &ensp;<a className='text-secondary' href="tel:+91 9462979594">+91 9982129594</a>
              </p>
         
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='staymenu.com'>
          &emsp;Staymenu.com
        </a>
      </div>
    </MDBFooter>
    </div>
    </>
  );
}