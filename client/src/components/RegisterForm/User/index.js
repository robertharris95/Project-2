import React, { useState } from "react";
import { DisabledInput, Input, InputPassword, FormBtn } from "../../Form";
import "./style.css";

// props: addIds.
function RegisterUser(props) {

    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        
    }

    return (
        <div className="row" id={props.addIds}>
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
                        name="email"
                        col="col s6" 
                        inputId="email"
                        label="Email"
                    />
                    <Input onChange={handleInputChange}
                        name="position"
                        col="col s6" 
                        inputId="position"
                        label="Position"
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