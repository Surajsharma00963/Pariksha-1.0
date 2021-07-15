import React from "react";
import NavbarNav from "../Navbar/NavbarNav";
import Logo from "../../logo.png";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className="m-0 p-0 mt-5 pt-5 bg-black">
      <NavbarNav />
      <div className="container-fluid text-center text-light w-auto m-0 p-0">
        <img src={Logo} alt="..." className="img-fluid my-auto" />
        <div></div>
      </div>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.wallpapersafari.com/79/59/34LFGw.jpg"
                width="1920px"
                height="800px"
                className="d-block img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp4385845.jpg"
                width="1920px"
                height="800px"
                className=" img-fluid d-block"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
    </Fragment>
  );
}

export default Home;
