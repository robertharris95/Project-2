import React, { useState, useEffect } from "react";
import InHeader from "../components/InHeader";
import Wrapper from "../components/Wrapper";
import Contracts from "../components/Settings/Contracts";
import Users from "../components/Settings/Users";
import Footer from "../components/Footer";
import "./Settings.css";

function Settings() {

    const [state, setState] = useState("");

    useEffect( () => {
        setState("users")
    }, [])

    function handleUserBtn(event) {
        event.preventDefault();
        setState("users");
    }

    function handleCompBtn(event) {
        event.preventDefault();
        setState("conts");
    }

    return (
        <Wrapper addClasses="row">
            <InHeader />
            <div className="row">
                <div className="row">
                    <h4 className="col s12">Settings</h4>
                </div>
                <div className="row">
                    <div className="col s12">
                        <ul id="btns" className="row">
                            <button id="settings" onClick={handleUserBtn} className="waves-effect waves-light col s6">Users</button>
                            <button id="settings" onClick={handleCompBtn} className="waves-effect waves-light col s6">Contracts</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
            <Contracts addClasses={"striped " + state}
            />
            <Users addClasses="striped"
                addIds={state}
            />
            </div>   
            <Footer />
        </Wrapper>
    );
}

export default Settings;