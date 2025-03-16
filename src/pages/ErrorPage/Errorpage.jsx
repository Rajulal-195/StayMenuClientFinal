import React from 'react'

import { Link } from 'react-router-dom'

function Errorpage() {
    return (
        <>

          
                <img src='/images/get-notes.png' className='Errorimg' alt='Page not Found ...!' /><br/>

                <Link className='cabut' to="/contact"> Support</Link>
                <Link className='cabut' to="/"> Back to Home</Link>

           
             

       
     
        </>
    )
}
export default Errorpage