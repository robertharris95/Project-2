import React, { useState } from "react";
import { DisabledInput, Input, InputPassword, FormBtn } from "../../Form";
import API from "../../../utils/API";
import "./style.css";

// props addClasses.
function RegisterCompany(props) {

    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        let company;
        const { companyName, address, sector, firstName, lastName, position, email, password, verifyPassword } = formObject;
        if (password === verifyPassword) {
            company = {
                companyName: companyName,
                address: address,
                sector: sector,
                user: {
                    firstName: firstName,
                    lastName: lastName,
                    position: position,
                    email: email,
                    password: password
                }  
            }
            API.registerCompany(company)
            .then( (res) => console.log("res", res));
        }
        // else say the password doesnt match.
    }

    return (
        <div className={"row " + props.addClasses}>
            <form className="col s12">
                <div className="row">
                    <DisabledInput col="col s6"
                        inputId="company_creds"
                        label="Company Information"
                    />
                </div>
                <div className="row">
                    <Input onChange={handleInputChange}
                        name="companyName"
                        col="col s6" 
                        inputId="company_name"
                        label="Company Name"
                    />
                    <Input onChange={handleInputChange}
                        name="address" 
                        col="col s6" 
                        inputId="addres"
                        label="Address"
                    />
                </div>
                <div className="row">
                    <Input onChange={handleInputChange}
                        name="sector" 
                        col="col s6" 
                        inputId="sector"
                        label="Business Sector"
                    />
                </div>
                <div className="row">
                    <DisabledInput col="col s6" 
                        inputId="admin_creds"
                        label="Admin Credentials"
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
                        name="position"
                        col="col s6" 
                        inputId="role"
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
                        inputId="re_password"
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

export default RegisterCompany;