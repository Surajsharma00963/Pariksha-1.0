import React, { Fragment, useState } from "react";
import NavbarNav from "../Navbar/NavbarNav";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import { showErrMsg, showSuccessMsg } from "../utils/Notification/Notification";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../utils/Validation/Validation";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  err: "",
  success: "",
};

function Register() {
  const [user, setUser] = useState(initialState);

  const { name, email, password, confirmPassword, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(password))
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, err: "Invalid emails.", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, confirmPassword))
      return setUser({ ...user, err: "Password did not match.", success: "" });
    try {
      const res = await axios.post("/user/Register", {
        name,
        email,
        password,
      });

      setUser({ ...user, err: "", success: res.data.msg });
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
                <img
                  src={Logo}
                  alt="..."
                  width="450px"
                  className="img-fluid  mx-auto"
                />
              </div>
              <div className="col-xl-3 col-12 my-5 mx-auto border rounded-3 m-0 p-0  opac">
                <h1 className="text-center">Register</h1>
                <div>
                  {err && showErrMsg(err)}
                  {success && showSuccessMsg(success)}
                </div>
                <form className="mx-4 my-4 " onSubmit={handleSubmit}>
                  <div className="my-3">
                    <label className="form-label">Organisation Name</label>
                    <input
                      type="text"
                      placeholder="Enter your Organisation Name"
                      className="form-control"
                      onChange={handleChangeInput}
                      name="name"
                      value={name}
                    />
                  </div>
                  <div className="my-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="form-control"
                      onChange={handleChangeInput}
                      name="email"
                      value={email}
                    />
                  </div>
                  <div className="my-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      className="form-control"
                      onChange={handleChangeInput}
                      name="password"
                      value={password}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label"> Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Enter your Confirm Password"
                      className="form-control"
                      onChange={handleChangeInput}
                      name="confirmPassword"
                      value={confirmPassword}
                    />
                  </div>
                  <div className=" text-end">
                    <Link
                      className="nav-link bg-transparent text-end text-decoration-none fs-10 text-light hover m-0 p-0"
                      activeClassName="active bg-danger"
                      to="/Login"
                    >
                      Already have an account?{" "}
                      <span className="text-decoration-underline text-hover m-0 p-0">
                        Login{" "}
                      </span>
                      
                    </Link>
                  </div>
                  <button type="submit" className="btn border  text-light mt-3">
                    Submit
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

export default Register;
