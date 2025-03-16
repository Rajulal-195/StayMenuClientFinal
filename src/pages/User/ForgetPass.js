import React, { useContext, useState } from 'react';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPass = () => {

    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isPassword, setPassword] = useState(false);

    const [message, setMessage] = useState('');
    const [user, setUser] = useState({});

    const [exists, setExists] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSendOtp = async () => {

        try {
            try {
                const response = await axios.get(`https://stayback1.onrender.com/check-phone/${phone}`);
                setExists(response.data.exists);
            } catch (error) {
                console.error('Error checking phone number:', error);
            }
            if (exists === true) {
                await axios.post('https://stayback1.onrender.com/send-verification', { phone });
                setIsOtpSent(true);
                toast.success(`Verification OTP sent to ${phone}`);
            }
        } catch (error) {
            toast.success(`Error sending code.`);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('https://stayback1.onrender.com/verify-code', { phone, code });
            setMessage(response.data);
            setIsVerified(true)
            setIsOtpSent(false)
            setPassword(true)
            toast.success("Mobile No. Verification Success")
        } catch (error) {
            toast.error('Error verifying code: ' + error.response.data);
        }
    };

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
        setIsSubmitted(false);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const Verify = () => {
        let localErrors = {};
        let isValid = true;
        const addErrMsg = (msg, key) => {
            localErrors[key] = msg;
            isValid = false;
        };

        if (!user.username) {
            addErrMsg('Name is required', 'username');
        } else if (user.username.length < 2) {
            addErrMsg('Name should be at least 2 characters', 'username');
        }

        if (!user.email) {
            addErrMsg('Email is required', 'email');
        } else if (!emailRegex.test(user.email)) {
            addErrMsg('Invalid email format', 'email');
        }

        if (!user.password) {
            addErrMsg('Password is required', 'password');
        } else if (user.password.length < 8) {
            addErrMsg('Password should be at least 8 characters', 'password');
        } else if (!passwordRegex.test(user.password)) {
            addErrMsg('Password should contain at least one number and one uppercase letter', 'password');
        }
        setErrors(localErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        try {
            if (isVerified === true) {
                if (user.password === user.confirmpass) {

                    await axios.put(`https://stayback1.onrender.com/api/users/update-by-phone/${phone}`, user);
                    toast.success("Password Updated ");
                    navigate('/login');
                }
            }

        } catch (error) {
            console.error('Error during signup', error);
            toast.error('SomeThing Went wrong Please try again.', error.message);
        }
    };

    return (
        <>
            <div className='userbackground'>
                <div className=' signmain'>
                <div className='text-center'>
            <Link to="/">
              <img className='m-4' src='https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png' width={150} height={98} alt='Company Logo' />
            </Link>
          </div>
                    <h1 className='setsign text-secondary'>Forget Password ?</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-1 rounded">
                            <label htmlFor="phone" className="form-label"> Enter Register Mobile </label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    className='form-control mx-3'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Registered No"
                                    maxLength="10" />

                                {isVerified ? (
                                    <div style={{
                                        position: 'absolute',
                                        right: '-2%',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        fontSize: "20px",
                                        background: 'info transparent',
                                        cursor: 'pointer',
                                        width: "130px",
                                        color: '#3ba55d'
                                    }}>Verified&ensp;<img src='./images/verify.gif' width={30} height={30} />
                                    </div>
                                ) : (
                                    <button className='btn-sm btn-info my-2 text-primary ' onClick={handleSendOtp}
                                        style={{
                                            position: 'absolute',
                                            right: '-2%',
                                            top: '25%',
                                            text: "white",
                                            transform: 'translateY(-50%)',
                                            border: 'none',
                                            background: ' transparent',
                                            cursor: 'pointer',
                                            width: "100px"
                                        }}>Send OTP</button>)}

                                {isOtpSent && (
                                    <>
                                        <input
                                            className='form-control m-3'
                                            type="text"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                            placeholder="Enter OTP" />
                                        <button className='text-primary' onClick={handleVerifyOtp}
                                            style={{
                                                position: 'absolute',
                                                right: '0%',
                                                top: '55%',
                                                transform: 'translateY(-50%)',
                                                border: 'none',
                                                background: ' transparent',
                                                cursor: 'pointer',
                                            }}
                                        >Verify</button>
                                    </>)}
                                {exists !== null && (
                                    <p className='text-danger'>{exists ? <p className='text-success'>Click on, SEND OTP Again</p> : 'Mobile number not exists  '}</p>
                                )}
                            </div>
                        </div>
                        {isPassword && (
                            <>
                                <div className="mb-1 rounded">
                                    <label htmlFor='password'>New Password</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name='password'
                                            placeholder="New password"
                                            id="password"
                                            onChange={handleInput}
                                            value={user.password}
                                            className="form-control m-3"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}

                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {showPassword ? <img src='images/eye-slash.svg' alt='Show' /> : <img src='images/eye.svg' alt='Hide' />}
                                        </button>
                                    </div>
                                    {isSubmitted && errors.password && <p className='text-danger'>{errors.password}</p>}
                                </div>
                                <div className="mb-1 rounded">
                                    <label htmlFor='conpassword'>Confirm Password</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name='confirmpass'
                                            placeholder="New password"
                                            id="conpassword"
                                            onChange={handleInput}
                                            value={user.confirmpass}
                                            className="form-control m-3"
                                        />
                                    </div>
                                    {isSubmitted && errors.password && <p className='text-danger'>{errors.password}</p>}
                                </div>
                                <button type="submit" className="btn btn-primary">Update Password</button>
                            </>)}
                    </form>
                    <div className="text-center my-3" >
                        <Link to="/">Go Back </Link>
                    </div>
                </div >
            </div >
        </>
    );
};
export default ForgetPass;