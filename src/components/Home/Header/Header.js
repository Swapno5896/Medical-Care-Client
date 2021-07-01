import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              Hidden brand
            </a>
            <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
              <li class="nav-item pe-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item pe-4">
                <Link className="nav-link" to="/blog">
                  Artical
                </Link>
              </li>
              <li class="nav-item pe-4">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item pe-4">
                <Link className="nav-link" to="/appoinment">
                  Appoinment
                </Link>
              </li>
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
