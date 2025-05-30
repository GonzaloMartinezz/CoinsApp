import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Navbar = ({cambiarLogin}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">Admin</NavLink>
                        </li>
                       <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-dark" onClick={cambiarLogin}>LogOut</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar