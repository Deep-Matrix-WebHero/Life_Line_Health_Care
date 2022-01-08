import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import useAuth from "../../hook/useAuth";
import "./Header.css";
import logo from "../../image/logo/lifeline.png";

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            <img className="rounded w-25" src={logo} alt="Third slide" />
            <br />
            <b>
              <i>Life-Line-Health-Care</i>
            </b>
          </Navbar.Brand>
          <Navbar.Toggle />
          {/* name and logo part of nav bar ---end--- */}

          {/* route part --start-- */}

          <Navbar.Collapse className="justify-content-end">
            <Nav className="mx-auto">
              {/* home button & route */}
              <Link to="/home">
                <button type="button" className="btn btn-outline-warning mx-4">
                  Home
                </button>
              </Link>
              {/* doctors button & route */}

              <Link to="/doctors">
                <button type="button" className="btn btn-outline-warning mx-4">
                  Doctors
                </button>
              </Link>
              {/* blogs button & route */}
              <Link to="/blogs">
                <button type="button" className="btn btn-outline-warning mx-4">
                  Blogs
                </button>
              </Link>
            </Nav>
            {/* user info, login,logout */}
            {/* login/logout */}
            {user?.email ? (
              <button
                onClick={logOut}
                type="button"
                className="btn btn-outline-warning"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button type="button" className="btn btn-outline-warning ">
                  Login
                </button>
              </Link>
            )}

            {/* signup/signin */}
            <Link to="/register">
              <button type="button" className="btn btn-outline-warning mx-2">
                SignUp
              </button>
            </Link>
            <Navbar.Text className="border border-danger">
              <span className="text-warning ">Signed in as:</span>{" "}
              <a href="#login" className="text-white ml-5 ml-lg-0">
                <i>
                  <b>{user?.displayName}</b>
                </i>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
