import React, { useEffect } from "react";
import InHeader from "../components/InHeader";
import Wrapper from "../components/Wrapper";
import ContractForm from "../components/ContractForm"
import Footer from "../components/Footer";
import API from "../utils/API";

function Contract() {

    useEffect(() => {
        API.getUser().then(res => console.log("req.user", res));
    }, []);

    return (
        <Wrapper addClasses="row">
            <InHeader />
            <ContractForm />
            <Footer />
        </Wrapper>
    );
}

export default Contract;