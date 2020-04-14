import React from "react";
import { DisabledInput, Input, InputPassword, FormBtn } from "../../Form";
import "./style.css";

// props: addIds.
function RegisterUser(props) {
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
                    <Input col="col s6" 
                        inputId="first_name"
                        label="First Name"
                    />
                    <Input col="col s6" 
                        inputId="last_name"
                        label="Last Name"
                    />
                </div>
                <div className="row">
                    <Input col="col s6" 
                        inputId="email"
                        label="Email"
                    />
                    <Input col="col s6" 
                        inputId="position"
                        label="Position"
                    />
                </div>
                <div className="row">
                    <InputPassword col="col s6"
                        inputId="password"
                        label="New Password"
                    />
                </div>
                <div className="row">
                    <InputPassword col="col s6"
                        inputId="password"
                        label="Verify Password"
                    />
                </div>
                <FormBtn label="Register"
                />
            </form>
        </div>
    );
}

export default RegisterUser;