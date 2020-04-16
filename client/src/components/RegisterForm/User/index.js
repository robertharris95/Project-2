import React, { useState } from "react";
import { DisabledInput, Input, InputPassword, FormBtn } from "../../Form";
import { Redirect } from "react-router-dom";
// import SearchCard from "../../SearchCard";
import API from "../../../utils/API";
import "./style.css";

// props: addIds.
function RegisterUser(props) {

    const [formObject, setFormObject] = useState({});
    const [redirect, setRedirect] = useState({ path: null });
    const [company, setCompany] = useState({ name: "" });

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormObject({ ...formObject, [name]: value });

        setCompany({ name: event.target.value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        let newUser;
        const { companyName, firstName, lastName, position, email, password, verifyPassword } = formObject;
        if (password === verifyPassword) {
            newUser = {
                companyName: companyName,
                user: {
                    firstName: firstName,
                    lastName: lastName,
                    position: position,
                    email: email,
                    password: password
                }  
            }
            API.registerUser(newUser)
            .then( (res) => {
                console.log("res", res);
                setRedirect({ path: "/members" });
            })
            .catch( (err) => {
                console.log(err);
            });
        }
        // else say the password doesnt match.
    }

    return (
        <div className="row" id={props.addIds}>
            {redirect.path ? <Redirect to={redirect.path} /> : null}
            <form className="col s12">
                <div className="row">
                    <DisabledInput col="col s6" 
                        inputId="user_creds"
                        label="User Credentials"
                    />
                </div>
                <div className="row">
                    <Input onChange={handleInputChange}
                        name="firstName"
                        col="col s6" 
                        inputId="first_name"
                        label="First Name"
                    />
                    <Input onChange={handleInputChange}
                        name="lastName"
                        col="col s6" 
                        inputId="last_name"
                        label="Last Name"
                    />
                </div>
                <div className="row">
                    <Input onChange={handleInputChange}
                        name="companyName"
                        col="col s6" 
                        inputId="user_comp"
                        label="Company"
                    />
                    {/* <SearchCard company={company.name} /> */}
                </div>
                <div className="row">
                    <Input onChange={handleInputChange}
                        name="position"
                        col="col s6" 
                        inputId="position"
                        label="Position"
                    />
                    <Input onChange={handleInputChange}
                        name="email"
                        col="col s6" 
                        inputId="email"
                        label="Email"
                    />
                </div>
                <div className="row">
                    <InputPassword onChange={handleInputChange}
                        name="password"
                        col="col s6"
                        inputId="password"
                        label="New Password"
                    />
                </div>
                <div className="row">
                    <InputPassword onChange={handleInputChange}
                        name="verifyPassword"
                        col="col s6"
                        inputId="password"
                        label="Verify Password"
                    />
                </div>
                <FormBtn onClick={handleFormSubmit}
                    label="Register"
                />
            </form>
        </div>
    );
}

export default RegisterUser;