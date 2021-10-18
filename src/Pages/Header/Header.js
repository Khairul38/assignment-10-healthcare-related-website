import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/">
                        <img src="https://demo.themeies.com/html/prolexe/assets/img/logo/logo.png" alt="" />
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/services">
                                    Services
                                </Link>
                            </li>
                        </ul>
                        <div class="d-flex gap-3">
                            <Link class="btn btn-primary" to="/login" role="button">Login</Link>
                            <Link class="btn btn-primary" to="/register" role="button">Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;