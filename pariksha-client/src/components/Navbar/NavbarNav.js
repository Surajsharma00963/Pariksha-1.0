import React, { Fragment } from "react";
import logo from "../../logo.png";
import { Form, Navbar, Nav } from "react-bootstrap";
import { NavLink,useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarNav() {
  const auth = useSelector((state) => state.auth);

  const history = useHistory()

  const { isLogged } = auth;
  const userLink = () => {
    return history.push('/dashboard')

        
  };
  return (
    <Fragment>
      <Navbar
        variant="light"
        className="px-3 border-danger border-bottom border-5 w-100 p-0 m-0 bg-light position-absolute position-fixed sticky-top"
        expand="lg"
      >
        <Navbar.Brand className="m-0 p-0">
        <NavLink to="/" className="m-0 p-0 me-5 ">
          <img
            src={logo}
            width="200"
            height="auto"
            alt="logo"
            className="m-0"
          />
        </NavLink>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="m-0 p-0">
          <Nav
            className="me-auto  m-0 p-0 fw-bold bg-light text-dark"
            navbarScroll
          >
            <NavLink
              className="nav-link px-4 mx-0 px-0 hover  m-0 p-0 py-4"
              exact
              activeClassName="active bg-dark text-light m-0 p-0 "
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="nav-link px-4 px-0 hover m-0 p-0 py-4"
              activeClassName="active  text-light bg-dark"
              to="/about"
            >
              About
            </NavLink>
          </Nav>
          <Form className="d-flex  gap-4 my-3 p-0 m-0 ">
            {/* <Button
            className="btn text-light m-0 p-0"
            variant="outline-secondary"
            activeClassName="bg-primary"
          > */}
            <Nav className="gap-4 text-dark fw-bold d-inline-flex flex-row m-0 p-0">
              {isLogged ? (
                userLink()
              ) : (
                <NavLink
                  className="nav-link btn  hover border border-dark p-0 m-0 px-5 py-1"
                  activeClassName="bg-dark text-light m-0 p-0"
                  to="/login"
                >
                  Login
                </NavLink>
              )}

              
              {/* </Button> */}
              {/* <Button className="btn m-0 p-0 " variant="outline-secondary"> */}
              <NavLink
                className="nav-link hover btn  border border-dark p-0 m-0 px-5 py-1"
                activeClassName="bg-dark text-light"
                to="/Register"
              >
                Register
              </NavLink>
            </Nav>
            {/* </Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default NavbarNav;
