import React from "react";
import "./style.css";

function ContractCard(props) {

    return (
        <div id="contract-card" className="row">
            <div className="row">
                <p className="col s5">Product/Service: <span>{props.contractName}</span></p>
                <p className="col s5">Category: <span>{props.category}</span></p>
                <p className="col s2 pull-s1"><a href={props.link}>Contract</a></p>
            </div>
            <div className="row">
                <p className="col s9">Description: <span>{props.description}</span></p>
                <p className="col s3">Test{props.company}</p>
            </div>
        </div>
    );
}

export default ContractCard;