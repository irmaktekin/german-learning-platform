import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/germanlogo.avif'; // Adjust the path to where your logo is


    const Navbar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          /*<a className="navbar-brand" href="#">
           <img
                     src={logo} // Replace with your image path
                     alt="Logo"
                     width="40"  // Adjust the size as needed
                     height="40"
                     className="d-inline-block align-top"
                   />
          </a>*/
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex justify-content-center w-100">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </nav>
      );
    };

    export default Navbar;
