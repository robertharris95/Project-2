import React, { useState, useEffect } from "react";
import { Redirect, Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import logo from "../../Images/logo4.png";
import M from "materialize-css";
import "./style.css";

function InHeader() {
    
    const location = useLocation();

    const [admin, setAdmin] = useState(null);

    const [redirect, setRedirect] = useState({ path: null });

    useEffect( () => {
        API.getUser().then( ({data}) => setAdmin(data.admin));

        M.AutoInit();

    }, []);

    function logOut() {
        API.logOut().then(() => setRedirect({ path: "/" }))
        .catch( (err) => console.log(err));
    }
    
    return (
        <nav id="navbar" className="header row z-depth-4">
            {redirect.path ? <Redirect to={redirect.path} /> : null}
            <img id="logo" src={logo} className="col s4 l2 push-l1"/>
            <ul id="dropdown1" className="dropdown-content">
                {admin ? (<li><Link id="login_nav" to={"/members/admin"} className = { location.pathname === "/members/admin" ? "nav-link active" : "nav-link" }>Settings</Link></li>) : null}
                <li className="divider"></li>
                <li><a onClick={logOut} href="#!">Sign Out</a></li>
            </ul>
            <ul id="links" className="col s8 push-l5">
                <li className="col s2"><Link id="login_nav" to={"/members/post"} className = { location.pathname === "/members/post" ? "nav-link active" : "nav-link" }>Create</Link></li>
                <li className="col s2 push-s2"><Link id="login_nav" to={"/members"} className = { location.pathname === "/members" ? "nav-link active" : "nav-link" }>View</Link></li>
                <li className="col s1 push-s5 push-l3"><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">more_vert</i></a></li>
            </ul>
        </nav>
    );
}

export default InHeader;