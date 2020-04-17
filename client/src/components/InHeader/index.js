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
            <img id="logo" src={logo} className="col s4 l2 push-l1"/>
            <ul id="links" className="col s8 push-l5">
                <li className="col s2"><Link id="login_nav" to={"/members/post"} className = { location.pathname === "/members/post" ? "nav-link active" : "nav-link" }>Create</Link></li>
                <li className="col s2 push-s2"><Link id="login_nav" to={"/members"} className = { location.pathname === "/members" ? "nav-link active" : "nav-link" }>View</Link></li>
                {admin ? (<li className="col s3 push-s3 push-l2"><Link id="login_nav" to={"/members/admin"} className = { location.pathname === "/members/admin" ? "nav-link active" : "nav-link" }>Settings</Link></li>) : null}
            </ul>
        </nav>
    );
}

export default InHeader;