import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/logo4.png";
import "./style.css";

function OutHeader() {

    const location = useLocation();
    
    return (
        <nav id="navbar" className="header row z-depth-4">
            <div class="nav-wrapper">
                <img id="logo" src={logo} />
                <ul id="nav-mobile" class="right">
                    <li><Link id="login_nav" to={"/"} className = { location.pathname === "/" ? "nav-link active" : "nav-link" }>Log In</Link></li>
                    <li><Link id="login_nav" to={"/register"} className = { location.pathname === "/register" ? "nav-link active" : "nav-link" }>Register</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default OutHeader;