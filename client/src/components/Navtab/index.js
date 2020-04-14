import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="col s10">
            <li className = "nav-item col s4">
                <Link to = "/saved" className = { location.pathname === "/saved" ? "nav-link active" : "nav-link" } >
                    Saved
                </Link>
            </li>
            <li className = "nav-item col s4">
                <Link to = "/search" className = { location.pathname === "/search" ? "nav-link active" : "nav-link" } >
                    Search
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;