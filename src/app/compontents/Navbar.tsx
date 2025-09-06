import React from 'react';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">Słabość.pl</a>
            <button className="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Start <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">O nas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Usługi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Kontakt</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Więcej
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Blog</a>
                            <a className="dropdown-item" href="#">Galeria</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Cennik</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;