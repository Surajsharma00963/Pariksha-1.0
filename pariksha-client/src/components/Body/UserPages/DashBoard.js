import React, { } from "react";
import UserNav from "../../SideNavbar/UserNavbar";
import Logo from "../../../logo.png"

function Dashboard() {
  return (
    <>
      <UserNav />
      <div className="container-fluid text-center bg-black text-light py-3 border-top border-3 border-info">
        <h1 className="text-center ">Dashboard</h1>
      </div>
      <div className="container mt-5">
        <h1 className="text-center">Welcome</h1>
        <h1 className="text-center">To</h1>
      </div>
      <div className="container">
        <div className="text-center">
        <img src={Logo} alt="..."/>
        </div>
      </div>

      <div className="container">
        <p className="text-center fs-3">
          A platfrom to Create and Send the Quiz to the Regitered Users
        </p>
      </div>
        

        
      
      
    </>
  );
}

export default Dashboard;
