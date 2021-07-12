import React, { Fragment } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
import logo from "../../logo.png";

function Footer() {
  return (
    <Fragment>
      <div className="footer-dark border-4 border-top">
        <footer>
          <div className="container-fluid m-0 p-0">
              <div className="container mt-4 mb-2">
              <div className="row m-0 p-0 ">
              <div className="col-xl col-12-sm item text-center">
                <img
                  src={logo}
                  width="250"
                  height="auto"
                  alt="logo"
                  className="m-0"
                />
                <p className="text-justify mx-3 px-3 fs-10">
                Pariksha for students is analytics driven, gamification modeled, 
                adaptive testing and mastery learning based online exam preparation 
                practice and assessment platform. It highlights students’ strengths, 
                weaknesses, accuracy and speed. It tracks performance/improvement 
                real time/over time and provides continuous error free feedback.
                </p>
              </div>
              <div className="col item pt-3 text-center">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="#">Exams</Link>
                  </li>
                  <li>
                    <Link href="#">Developing</Link>
                  </li>
                  <li>
                    <Link href="#">Hosting</Link>
                  </li>
                </ul>
              </div>
              <div className="col pt-3 item text-center">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link href="#">Company</Link>
                  </li>
                  <li>
                    <Link href="#">Team</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 d-flex my-3">
                <div className="row mx-auto ">
                  <div className="col mx-auto w-auto">
                    <Link href="#">
                      <i>
                        <FaFacebook size="35px" color="white" />
                      </i>
                    </Link>
                  </div>
                  <div className="col mx-auto w-auto">
                    <Link href="#">
                      <i>
                        <FaTwitter size="35px" color="white" />
                      </i>
                    </Link>
                  </div>

                  <div className="col ">
                  <Link href="#">
                    <i><FaInstagram size="35px" color="white"/></i>
                  </Link>
                  </div>
                  <div className="col">
                  <Link href="#">
                    <i><FaLinkedin size="35px" color="white"/></i>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
              </div>
            
            <div className="container-fluid py-2 m-0 p-0 bg-primary text-center">
              <p className="my-2">Pariksha © 2021</p>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Footer;
