import React, { Fragment } from "react";
import NavbarNav from "../Navbar/NavbarNav";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Register() {

    

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
                <form className="mx-4 my-4 ">
                  <h1 className="text-center">Register</h1>
                  <div className="my-3">
                    <label className="form-label">Organisation Name</label>
                    <input
                      type="text"
                      placeholder="Enter your Organisation Name"
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label"> Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Enter your Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <div className=" text-end">
                    <Link
                      className="nav-link bg-transparent text-end text-decoration-none fs-10 text-light hover m-0 p-0"
                      activeClassName="active bg-danger"
                      to="/Login"
                    >
                      Already have an account?{" "}
                      <span className="text-decoration-underline text-hover">
                        Signin{" "}
                      </span>
                      here
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

        <Footer/>
      </div>
    </Fragment>
  );
}

export default Register;
