import React, { useState } from "react";
import Wrapper from "../Wrapper";
import RegisterCompany from "../RegisterForm/Company";
import RegisterUser from "../RegisterForm/User";
import "./style.css";
import { Redirect } from "react-router-dom";

function RegisterForm() {

    const [state, setState] = useState("user");

    const [redirect, setRedirect] = useState({ path: null })

    function handleUserBtn(event) {
        event.preventDefault();
        setState("user");
        setRedirect({ path: "/members" });
    }

    function handleCompBtn(event) {
        event.preventDefault();
        setState("comp");
        setRedirect({ path: "/members" });
    }

    return (
        <Wrapper addClasses="row">
            {redirect.path ? <Redirect to={redirect.path} /> : null}
            <div id="btns" className="col s8">
                <button id="btn" onClick={handleUserBtn} className="waves-effect waves-light btn">User</button>
                <button id="btn" onClick={handleCompBtn} className="waves-effect waves-light btn">Company</button>
            </div>
            <RegisterCompany addClasses={state}/>
            <RegisterUser addIds={state}/>
        </Wrapper>
    );
}

export default RegisterForm;