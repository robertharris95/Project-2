import React, { useEffect, useState } from "react";
import ElemContainer from "../ElemContainer";
import ContractCard from "../Contracts/ContractCard";
import API from "../../utils/API";
import "./style.css";

// props: subtitle, search: true or false.

function Contracts(props) {

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        loadContracts();
    }, [])

    function loadContracts() {
        API.getContracts()
        .then( ({data}) => setContracts(data))
        .catch( (err) => console.log(err));
    }

    return (
        <ElemContainer addClasses="elemContainer row">
            <h4>{props.subtitle}</h4>
            {contracts.length ? (
                <>
                    {contracts.map( (contract) => {
                        return (
                            <ContractCard key={contract._id}
                            apiHref={contract._id}
                            contractName={contract.name}
                            category={contract.category}
                            description={contract.description}
                            />
                        );
                    })}
                </>
            ) : (<div><h3>No Contracts in the database.</h3></div>)}
        </ElemContainer>
    );
}

export default Contracts;