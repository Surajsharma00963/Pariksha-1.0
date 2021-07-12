import React from "react";
import NavbarNav from "../Navbar/NavbarNav";
import Logo from "../../logo.png";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="m-0 p-0 mt-5 pt-5 bg-black">
      <NavbarNav />
      <div className="container-fluid text-center text-light w-auto m-0 p-0">
        <img src={Logo} alt="..." className="img-fluid my-auto" />
        <div></div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;
