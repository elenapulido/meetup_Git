import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";



function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <img className="navbar-brand logo" src={logo} alt="logo" />
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
              <ul className="dropdown-menu bg-dark">
                <li>
                  <Link to="/leyendas" className="dropdown-item text-white">
                    Experiencias paranormales
                  </Link>
                </li>
                <li>
                  <Link to="/historias" className="dropdown-item text-white">
                    Tus historias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/psicofonias"
                    className="dropdown-item text-white"
                  >
                    Psicofonías
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={handleSearchTermChange}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
