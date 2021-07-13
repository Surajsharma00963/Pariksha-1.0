import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link,NavLink } from "react-router-dom";
import { UserNavbarData } from "./UserNavbarData";
import "./UserNavbar.css";
import { IconContext } from "react-icons";

function UserNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar m-0 p-0">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars-close">
                <FaIcons.FaBars />
              </Link>
            </li>
            {UserNavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} >
                  <NavLink to={item.path} activeClassName="bg-dark" className="m-0 p-0 py-3 px-2">
                    {item.icon}
                    <span>{item.title}</span>
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
