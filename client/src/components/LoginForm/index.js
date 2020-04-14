import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Wrapper from "../Wrapper";

function LoginForm() {

    const location = useLocation();

    return (
        <Wrapper>
            <form class="container login">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <h2>Log In</h2>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email-input" type="email" class="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password-input" type="password" class="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <button id="submit" type="submit" class="waves-effect waves-light btn">LOG IN</button>
                        <p>Or <Link id="login_nav" to={"/register"} className = { location.pathname === "/register" ? "nav-link active" : "nav-link" }>register here.</Link></p>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

export default LoginForm;