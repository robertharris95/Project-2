import React from "react";
import "./style.css";

function ContractCard(props) {

    return (
        <div id="contract-card" className="row">
            <div className="row">
                <p className="col s6">Product/Service: <span>{props.contractName}</span></p>
                <p className="col s6 push-m3 push-l4">Category: <span>{props.category}</span></p>
            </div>
            <div className="row">
                <p className="col s8">Estimate: ${props.rate}/Unit</p>
                <p className="col s4 push-m1 push-l2"><a href={props.link}>Contract</a></p>
            </div>
            <div className="row">
                <p className="col s9">Description: <span>{props.description}</span></p>
                <p className="col s3 push-l1">{props.company}</p>
            </div>
        </div>
    );
}

export default ContractCard;