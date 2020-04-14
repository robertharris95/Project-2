import React from "react";
import ElemContainer from "../ElemContainer";
import "./style.css";

function Jumbotron() {
    return (
        <ElemContainer addClasses="col s12 jumbo">
            <h4>(React) Google Books Search</h4>
            <p>Search for and Save Books of Interest</p>
        </ElemContainer>
    );
}

export default Jumbotron;