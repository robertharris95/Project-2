import React, { useEffect, useState } from "react";
import InHeader from "../components/InHeader";
import Wrapper from "../components/Wrapper";
import Contracts from "../components/Contracts";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

function Contract() {

    const [user, setUser] = useState({ email: null });

    useEffect(() => {
        API.getUser().then( ({data}) => setUser({ email: data.email }));
    }, []);

    return (
        <Wrapper addClasses="row">
            {user.email ? null : console.log(user.email)}
            <InHeader />
            <Contracts subtitle="Contracts Portal" />
            <Footer />
        </Wrapper>
    );
}

export default Contract;