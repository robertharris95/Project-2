import React from "react";
import API from "../../utils/API";

export function ContractRow(props) {

    function handleDelete(event) {
        event.preventDefault();

        API.removeContract(props.apiHref)
        .then( () => {
            props.loadMyContracts();
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.userName}</td>
            <td>{props.rate}</td>
            <td><button onClick={handleDelete}><i className="fas fa-file-excel"></i></button></td>
        </tr>
    );
}

export function UserRow(props) {

    function handleDelete(event) {
        event.preventDefault();

        API.removeUser(props.apiHref)
        .then( () => {
            props.loadMyUsers();
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.position}</td>
            <td><button onClick={handleDelete}><i className="fas fa-user-times"></i></button></td>
        </tr>
    );
}