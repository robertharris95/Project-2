import React, { useState } from "react";
import Wrapper from "../Wrapper";
import RegisterCompany from "../RegisterForm/Company";
import RegisterUser from "../RegisterForm/User";
import "./style.css";

function RegisterForm() {

    const [state, setState] = useState("user");

    function handleUserBtn(event) {
        event.preventDefault();
        setState("user");
    }

    function handleCompBtn(event) {
        event.preventDefault();
        setState("comp");
    }

    return (
        <Wrapper addClasses="row">
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