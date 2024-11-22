import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


    const Navbar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

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
                <a className="nav-link" href="/Home">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </nav>
      );
    };

    export default Navbar;
