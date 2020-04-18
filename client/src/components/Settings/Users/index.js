import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { UserRow } from "../../TableRow";
import "./style.css";

function Users(props) {

    const [userList, setUserList] = useState([]);

    useEffect( () => {
        loadMyUsers();
    }, [])

    function loadMyUsers() {
        API.getUser()
        .then(({data}) => {
            return API.getMyUsers(data.companyId);
        }).then(({data}) => setUserList(data))
        .catch(err => console.log(err));
    }

    return (
        <table  id={props.addIds} className={props.addClasses}>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {userList.length ? (
                    <>
                        {userList.map( (user) => {
                            return (
                                <UserRow key={user._id}
                                    apiHref={user._id}
                                    name={user.firstName + " " + user.lastName}
                                    email={user.email}
                                    position={user.position}
                                    loadMyUsers={loadMyUsers}
                                />
                            );
                        })}
                    </>
                ) : (<tr>
                        <td>Null</td>
                        <td>Null</td>
                        <td>Null</td>
                        <td>Null</td>
                    </tr>)
                } 
            </tbody>
        </table>
    );
}

export default Users;