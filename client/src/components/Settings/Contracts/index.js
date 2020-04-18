import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import { ContractRow } from "../../TableRow";
import "./style.css";

function Contracts(props) {

    const [contractList, setContractList] = useState([]);

    useEffect( () => {
        loadMyContracts();
    }, []);

    function loadMyContracts() {
        API.getUser()
        .then(({data}) => {
            return API.getMyContracts(data.companyId);
        }).then(({data}) => setContractList(data))
        .catch(err => console.log(err));
    }

    return (
        <table className={props.addClasses}>
            <thead>
                <tr>
                    <th>Contract</th>
                    <th>Posted By</th>
                    <th>Estimate</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {contractList.length ? (
                    <>
                        {contractList.map( (contract) => {
                            return (
                                <ContractRow key={contract._id}
                                apiHref={contract._id}
                                name={contract.name}
                                userName={contract.userName}
                                rate={contract.rate}
                                loadMyContracts={loadMyContracts}
                                />
                            );
                        })}
                    </>
                ) : (
                    <tr>
                        <td>Null</td>
                        <td>Null</td>
                        <td>Null</td>
                        <td>Null</td>
                    </tr>
                    )
                } 
            </tbody>
        </table>
    );
}

export default Contracts;