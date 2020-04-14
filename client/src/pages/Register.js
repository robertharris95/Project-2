import React from "react";
import OutHeader from "../components/OutHeader";
import RegisterForm from "../components/RegisterForm/";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import "./Register.css";

function Login() {
    return (
        <Wrapper>
            <OutHeader />
            <RegisterForm />
            <Footer />
        </Wrapper>
    );
}

export default Login;