import React, { useContext, useEffect, useState } from 'react'
import Headers from '../../components/header/Headers'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { MDBIcon } from 'mdb-react-ui-kit';

function Userprofile() {
    const { user } = useContext(AuthContext);
    const [logData, setlogData] = useState("")

    const [datas, setdatas] = useState([])
    const [userId, setuserId] = useState('')

    console.log('authuser', user)

    const userdata = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        setlogData(user);
        setuserId(user._id)
    }

    const handledata = async () => {
        try {
            const res = await axios.get(`https://stayback1.onrender.com/api/users/find/${userId}`);
            setdatas(res.data);
        } catch (error) {
            console.log("Something went wrong!", error);
        }
    }
    useEffect(() => {
        handledata()
        userdata()
    }, [])

    return (
        <>
            <Headers />
            <div className='container'>
                <div className='row profil'>
                    <div className='col-md-6 my-4'>
                        <img className=' ingset' src={user.photos} width={273} height={350} />
                    </div>

                    <div className='col-md-6 settex '>
                        <Link to="/editprofile">
                        <MDBIcon fas icon="pen"  className='setedit'/>
                          
                        </Link>
                        <h5 className='comp '>
                            Hello {user.username}
                        </h5>
            
                        <h6><strong>Name :</strong> &emsp;   {user.username}</h6>
                        <h6><strong>Email :</strong> &emsp; {user.email}</h6>
                        <h6><strong>Contact :</strong>  &emsp;{user.phone}</h6>
                        <h6><strong>Last Updates:</strong>  &emsp;{user.createdAt}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userprofile