import React, { useState } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { Input, FormBtn, InputPassword } from "../Form";
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import "./style.css";

function LoginForm() {

    const location = useLocation();

    const [redirect, setRedirect] = useState({ path: null });

    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const { email, password } = formObject;
        let user = { 
            email: email.toLowerCase(),
            password: password
        };

        API.signIn(user)
        .then( (res) => {
            setRedirect({ path: "/members" });
        })
        .catch( (err) => console.log(err));
        // else say the password doesnt match.
    }

    return (
        <Wrapper>
            {redirect.path ? <Redirect to={redirect.path} /> : null}
            <form className="container login">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Log In</h2>
                        <div className="row">
                            <Input onChange={handleInputChange}
                                name="email"
                                col="col s12"
                                inputId="email"
                                label="Email"
                            />
                        </div>
                        <div className="row">
                            <InputPassword onChange={handleInputChange}
                                name="password"
                                col="col s12"
                                inputId="password"
                                label="Password"
                            />
                        </div>
                        <FormBtn onClick={handleFormSubmit} 
                            label="LOG IN" 
                        />
                        <p>Or <Link id="login_nav" to={"/register"} className = { location.pathname === "/register" ? "nav-link active" : "nav-link" }>register here.</Link></p>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

export default LoginForm;