import React, { useEffect } from "react";
import InHeader from "../components/InHeader";
import Wrapper from "../components/Wrapper";
import Contracts from "../components/Contracts";
import Footer from "../components/Footer";
import API from "../utils/API";

function Contract() {

    useEffect(() => {
        API.getUser().then(res => console.log("req.user", res));
    }, []);

    return (
        <Wrapper addClasses="row">
            <InHeader />
            <Contracts subtitle="Contracts Portal" />
            <Footer />
        </Wrapper>
    );
}

export default Contract;