import React from "react";
import OutHeader from "../components/OutHeader";
import LoginForm from "../components/LoginForm";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import "./Login.css";

function Login() {
    return (
        <Wrapper>
            <OutHeader />
            <LoginForm />
            <Footer />
        </Wrapper>
    );
}

export default Login;