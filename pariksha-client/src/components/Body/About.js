import React from "react";
import Logo from "../../logo.png";
import NavbarNav from "../Navbar/NavbarNav";
import Footer from "../Footer/Footer";
function About() {
  return (
    <div className="m-0 p-0 mt-5 pt-5 bg-black">
      <NavbarNav />
      <div className="container  text-light">
        <h1 className="text-center py-4">About Pariksha</h1>
        <div className="row my-5 py-5">
          <div className="col-6 w-auto">
            <img src={Logo} alt="..." width="400px" className="my-5" />
          </div>
          <div className="col">
            <p>
              Pariksha for students is analytics driven, gamification modeled,
              adaptive testing and mastery learning based online exam
              preparation practice and assessment platform.
            </p>
            <p>
              It highlights students’ strengths, weaknesses, accuracy and speed.
              It tracks performance/improvement real time/over time and provides
              continuous error free feedback.
            </p>
            <p>
              Comparative tools allow students to compare their performance with
              others.
            </p>
            <p>
              It saves time and increases the preparation efficiency of
              students.
            </p>
            <p>
              Pariksha is born out of personal experience and the purpose is to
              change the way students prepare and succeed with the help of
              cutting edge technology.
            </p>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
