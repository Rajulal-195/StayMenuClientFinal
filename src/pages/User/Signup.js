import React, { useContext, useState } from 'react';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

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
      if (exists === false) {
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


    if (!user.terms) {
      addErrMsg('You must accept the terms and conditions', 'terms');
    }

    setErrors(localErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!Verify()) return;

    const users = { ...user, phone };
    console.log("final data is ", users);

    if (!isVerified) {
      toast.Error("Mobile Verification Mandatory");
      return;
    }
    try {
      await axios.post('https://stayback1.onrender.com/api/auth/register', users);
      toast.success("Signup Success...");
      navigate('/login');
    } catch (error) {
      console.error('Error during signup', error);
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <>

      <div className='userbackground'>
        <div className=' signmain'>
          <div className='text-center'>
            <Link to="/">
              <img className='m-2' src='https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png' width={150} height={98} alt='Company Logo' />
            </Link>
          </div>

          <h1 className='text-secondary'>create an account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 rounded">
              <label htmlFor="username" className="form-label">Name</label>
              <input
                type="text"
                className="form-control mx-3 "
                id="username"
                name='username'
                onChange={handleInput}
                value={user.username}
                placeholder='Enter your Name'
              />
              {isSubmitted && errors.username && <p className='text-danger'>{errors.username}</p>}
            </div>
            <div className="mb-1 rounded">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control mx-3 "
                id="email"
                name='email'
                onChange={handleInput}
                value={user.email}
                placeholder='Enter Email' />

              {isSubmitted && errors.email && <p className='text-danger'>{errors.email}</p>}
            </div>

            <div className="mb-1 rounded">
              <label htmlFor="phone" className="form-label">Contact No</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className='form-control mx-3'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter mobile number"
                  maxLength="10" />

                {isVerified ? (
                  <div>
                    <span style={{
                      position: 'absolute',
                      right: '-2%',
                      top: '48%',
                      transform: 'translateY(-50%)',
                      fontSize: "20px",
                      background: 'info transparent',
                      cursor: 'pointer',
                      width: "130px",
                      color: '#3ba55d'

                    }}>Verified&ensp;<img src='./images/verify.gif' width={30} height={30}  alt='Verify'/></span>
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
                  <p className='text-danger'>{exists ? 'Mobile number exists Try With Other Number ' : <p className='text-success'>Click on, SEND OTP Again</p>}</p>
                )}
              </div>
            </div>

            <div className="mb-1 rounded">
              <label htmlFor='password'>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder="Enter password"
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
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  name='terms'
                  onChange={handleInput}
                  checked={user.terms}
                />
                <label htmlFor="terms" className="form-check-label">I accept the terms and conditions</label>
              </div>
              {isSubmitted && errors.terms && <p className='text-danger'>{errors.terms}</p>}
            </div>
            <button type="submit" className="cabutoon">Sign Up</button>
          </form>
          <div className='mt-3'>
            <span className='text-secondary' >
              All Ready have Account
              &ensp; <Link className="text-primary" to='/login'>
                Login Here
              </Link>
            </span>
          </div>
        </div >
      </div >
    </>
  )
}
export default Signup;