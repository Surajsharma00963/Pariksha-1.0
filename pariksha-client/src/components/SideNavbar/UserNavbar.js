import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { UserNavbarData } from "./UserNavbarData";
import "./UserNavbar.css";
import { Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../logo.png";
import axios from "axios";
import {useSelector} from 'react-redux'

function UserNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const auth = useSelector(state => state.auth)


  const {user} = auth


  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/Login";
    } catch (err) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="">
          <div className="navbarnav m-0 p-0">
            <NavLink to="/" className="m-0 p-0">
              <img
                src={logo}
                width="200"
                height="auto"
                alt="logo"
                className="m-0 py-2 p-0 "
              />
            </NavLink>
            <Link to="#" className="menu-bars ms-5  m-0 p-0  me-auto">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            
            <Nav>
              <NavLink
                className="nav-link  bg-black text-light border-0 rounded-3  mx-3 p-0 m-0 text-center  my-3"
                activeClassName="bg-dark text-light"
                onClick={handleLogout}
                to="/Logout"
              >
                <RiLogoutCircleRLine size="30px" className="mx-2" />
                LogOut
              </NavLink>
            </Nav>
          </div>
          <div></div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div>
                <NavLink to="/" className="m-0 p-0 me-5 ">
                <img
                  src={logo}
                  width="200"
                  height="auto"
                  alt="logo"
                  className="m-0 mx-1"
                />
              </NavLink>
              </div>
              <Link to="#" className="menu-bars-close">
                <FaIcons.FaBars />
              </Link>
            </li>
            <div className="text-center">
            <img src={user.avatar}width="200px" alt=".."/>
            <p className="text-light my-2 mx-3">{user.email}</p>
            <p className="text-light my-2 mx-3 fs-4">{user.name}</p>
            <hr className="bg-light mx-auto w-50"></hr>
            </div>
            {UserNavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    to={item.path}
                    activeClassName="bg-dark border-5 border-end"
                    className="m-0 p-0 py-3 px-2"
                  >
                    {item.icon}
                    <span className="span">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default UserNavbar;
