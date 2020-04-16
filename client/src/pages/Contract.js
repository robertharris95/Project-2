import React, { useEffect } from "react";
import API from "../utils/API";

function Contract() {

    useEffect(() => {
        API.getUser().then(res => console.log("req.user", res));
    }, []);

    return (
        <h2>Contracts</h2>
    );
}

export default Contract;