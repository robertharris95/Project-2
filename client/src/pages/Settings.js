import React from "react";
import InHeader from "../components/InHeader";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import "./Register.css";

function Settings() {
    return (
        <Wrapper addClasses="row">
            <InHeader />
            <h4>Settings</h4>
            <ul id="btns" className="col s3">
                <li><button id="btn" className="waves-effect waves-light btn">Users</button></li>
                <li><button id="btn" className="waves-effect waves-light btn">Contracts</button></li>
            </ul>
            <Footer />
        </Wrapper>
    );
}

export default Settings;

// onClick={handleUserBtn}
// onClick={handleCompBtn}