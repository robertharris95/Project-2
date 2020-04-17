import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import "./style.css";

function Contracts(props) {

    const [contractList, setContractList] = useState([]);

    useEffect( () => {
        API.getUser()
        .then(({data}) => {
            return API.getMyContracts(data.companyId);
        }).then(({data}) => setContractList(data));
    }, []);

    // function handleDelete(event) {

    // }

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
                                <tr key={contract._id}>
                                    <td>{contract.name}</td>
                                    <td>{contract.userName}</td>
                                    <td>{contract.rate}</td>
                                    <td><button><i class="fas fa-file-excel"></i></button></td>
                                </tr>
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