import React from "react";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand">Travelogged</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pac">
                    Packages
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#gallery">
                    Resent Trip
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#rev">
                    Review
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#ser">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#con">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
