import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logout } = allContext;
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="https://demo.themeies.com/html/prolexe/assets/img/logo/logo.png" alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/departments">
                                    Departments
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doctors">
                                    Doctors
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutUs">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        {user.email ?
                            <>
                            <h5 className="me-3">{user.displayName}</h5>
                            <button onClick={logout} className="btn btn-primary">Logout</button>
                            </> :
                            <div className="d-flex gap-3">
                                <Link className="btn btn-primary" to="/login" role="button">Login</Link>
                                <Link className="btn btn-primary" to="/register" role="button">Register</Link>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;