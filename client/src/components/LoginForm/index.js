import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Input, FormBtn, InputPassword } from "../Form";
import "./style.css";
import Wrapper from "../Wrapper";

function LoginForm() {

    const location = useLocation();

    return (
        <Wrapper>
            <form className="container login">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Log In</h2>
                        <div className="row">
                            <Input col="col s12"
                                inputId="email"
                                label="Email"
                            />
                        </div>
                        <div className="row">
                            <InputPassword col="col s12"
                                inputId="password"
                                label="Password"
                            />
                        </div>
                        <FormBtn label="LOG IN" />
                        <p>Or <Link id="login_nav" to={"/register"} className = { location.pathname === "/register" ? "nav-link active" : "nav-link" }>register here.</Link></p>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

export default LoginForm;