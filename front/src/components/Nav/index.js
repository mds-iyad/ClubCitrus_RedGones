import React from "react"
import { NavLink } from "react-router-dom";
import logo from '../../assets/pastel.png';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <NavLink className="navbar-brand brand" to="/">
                  <img src={logo} height="65px" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Nos actions
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/*">Qui sommes-nous</NavLink>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/dashboard">Dashboard<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/form">Contact</NavLink>
                        </li>

                        <NavLink className="btn btn-outline-dark start" to="/Login">Connexion</NavLink>

                    </ul>


                </div>


            </div>
        </nav>
    );
}

export default Nav;