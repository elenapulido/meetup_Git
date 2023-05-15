import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"



function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link to="/">
          <img className="navbar-brand logo"  src={logo} alt="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu bg-black">
                <li>
                  <Link to="/" className="dropdown-item text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/commands" className="dropdown-item text-white">
                   Comandos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/practices"
                    className="dropdown-item text-white"
                  >
                    Buenas Prácticas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mosaic"
                    className="dropdown-item text-white"
                  >
                    Ejercicio
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
       
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
