import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import logo from "../../Images/logo4.png";
import "./style.css";

function InHeader() {

    const location = useLocation();

    const [admin, setAdmin] = useState(null);

    useEffect( () => {
        API.getUser().then( ({data}) => setAdmin(data.admin));
    }, [])
    
    return (
        <nav id="navbar" className="header row z-depth-4">
            <div className="nav-wrapper">
                <img id="logo" src={logo} />
                <ul id="nav-mobile" className="right">
                    <li><Link id="login_nav" to={"/members/post"} className = { location.pathname === "/members/post" ? "nav-link active" : "nav-link" }>Create Contract</Link></li>
                    <li><Link id="login_nav" to={"/members"} className = { location.pathname === "/members" ? "nav-link active" : "nav-link" }>View Contracts</Link></li>
                    {admin ? (<li><Link id="login_nav" to={"/members/admin"} className = { location.pathname === "/members/admin" ? "nav-link active" : "nav-link" }>Settings</Link></li>) : null}
                </ul>
            </div>
        </nav>
    );
}

export default InHeader;