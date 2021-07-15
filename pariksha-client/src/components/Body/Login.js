import React, { Fragment, useState } from "react";
import NavbarNav from "../Navbar/NavbarNav";
import Logo from "../../logo.png";
import Footer from "../Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../utils/Notification/Notification";
import {dispatchLogin} from '../../redux/action/authActions'
import {useDispatch} from 'react-redux'

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

function Login() {
  const [user, setUser] = useState(initialState);
  const { email, password, err, success } = user;

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });
      setUser({...user, err: '', success: res.data.msg})
      localStorage.setItem('firstLogin', true)
      dispatch(dispatchLogin())
      history.push('/#/dashboard')
      
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <Fragment>
      <div className="m-0 p-0 mt-5 pt-4  bg-black bg-img1">
        <NavbarNav />
        <div className="container-fluid text-light  m-0 p-0 opac">
          <div className="opac">
            <div className="row m-0 p-0  py-5 px-2">
              <div className="col-12 m-0 p-0 text-center ">
                <img src={Logo} alt="..." className="img-fluid  mx-auto" />
              </div>
              <div className="col-xl-3 col-12 my-5 mx-auto border rounded-3 m-0 p-0  opac">
              <h1 className="text-center mt-3">Login</h1>
                  <div>
                  {err && showErrMsg(err)}
                  {success && showSuccessMsg(success)}
                  </div>
                <form className="mx-4 my-4 " onSubmit={handleSubmit}>
                  
                  <div className="my-4">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      required
                      className="form-control"
                      value={email}
                      name="email"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      className="form-control"
                      value={password}
                      name="password"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className=" w-auto d-flex flex-column float-end text-end m-0 p-0">
                    <p className="m-0 p-0"><Link
                      className="nav-link bg-transparent w-auto  text-decoration-none fs-10 text-light hover m-0 p-0"
                      activeClassName="active bg-danger"
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </Link></p>
                    <p className="m-0 p-0"><Link exact
                      className="nav-link   bg-transparent  text-decoration-none fs-10 text-light hover m-0 p-0"
                      activeClassName="active bg-danger"
                      to="/Register"
                    >
                      Dont have account?{" "}
                      <span className="text-decoration-underline text-hover m-0">
                        SignUp{" "}
                      </span>
                    </Link></p>
                  </div>
                  <button type="submit" className="btn border  text-light mt-5">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Login;
