import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid navbar-container">
          <a rel="home" href="https://www.toolboxbyadmiral.com/" className="navbar-brand">
              <img className="navbar-img-xs" src={require("../../static/images/new-logo-white-cropped.png")} alt="https://www.toolboxbyadmiral.com/"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link navbar-nav-link" href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-nav-link" href="/#">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-nav-link" href="/#">My account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-nav-link" href="/#">Log in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;