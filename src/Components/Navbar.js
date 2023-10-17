import React from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="home">
            <img src={logo} className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* aqui abajo ira el enlace al contacto */}
                <a href="#contact" className="nav-link">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                {/* aqui abajo ira el enlace a mi portafolio */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://emanuelcortezr.github.io/miportafolio/"
                  className="nav-link"
                >
                  Diseño
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
