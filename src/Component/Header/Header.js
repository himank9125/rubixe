import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div>
        <img
          src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
          style={{ paddingLeft: "30px" }}
          height="75px"
          alt="hs"
        />
      </div>
      <div className="container-fluid flex-row-reverse display-flex">
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link anchertag" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchertag" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchertag" href="#">
                PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchertag" href="#">
                AI INTERNSHIP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchertag" href="#">
                CAREER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchertag" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchertag" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchertag" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
