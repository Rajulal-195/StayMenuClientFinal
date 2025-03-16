import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [success, setsuccess] = useState(false)
  const { loading, error, dispatch } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setsuccess(false)
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://stayback1.onrender.com/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      toast.success("Log in Success...");
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <>

      <div className="userbackground ">
        <div className=" signmain">
          <div className='text-center'>
            <Link to="/">
              <img className='m-2' src='https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png' width={150} height={98} alt='Company Logo' />
            </Link>
          </div>
          <div className="lContainer    ">
            <h1 className='text-secondary'> Sign in </h1>
            <label htmlFor='email'>User Name</label>
            <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput form-control mx-3" />
            <div style={{ position: 'relative' }}>
              <label htmlFor='Password'>Password</label>
              <input type={showPassword ? 'text' : 'password'} placeholder="password" id="password" onChange={handleChange} className="lInput form-control mx-3 mt-2" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '65%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? <img src='images/eye-slash.svg' /> : <img src='images/eye.svg' />}
              </button>
            </div>
            <div className="text-end ">
              <Link className="forget" to='/forgetpass'>Forget Password<img src="./images/forgetpass.jpg" width={40} height={40} /></Link>
            </div>

             <button disabled={loading} onClick={handleClick} className=" cabutoon ">
              Login
            </button> 


            {/* <button type="submit" className='cabutoon ' onClick={handleClick} disabled={loading}>
              {loading ? 'Login...' : 'Login'}
            </button> */}
            {error && <span className="text-danger">{error.message}</span>}
            <span className='text-secondary'> You Don't have a Account ?&emsp;
              <Link className="text-primary" to='/signup'>Sign up here...</Link>
            </span>
            <hr className="sethr" />
            <div className="ses">
              Or</div>
            <button disabled={loading} onClick={handleClick} className=" btn bg-white "><img src="images/down.png" width={30} height={30} />
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
