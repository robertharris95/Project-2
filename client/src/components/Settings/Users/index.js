import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import "./style.css";

function Users(props) {

    const [userList, setUserList] = useState([]);

    useEffect( () => {
        API.getUser()
        .then(({data}) => {
            return API.getMyUsers(data.companyId);
        }).then(({data}) => setUserList(data));
    }, [])

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
                                <tr key={user._id}>
                                    <td>{user.firstName + " " + user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.position}</td>
                                    <td><button><i class="fas fa-user-times"></i></button></td>
                                </tr>
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