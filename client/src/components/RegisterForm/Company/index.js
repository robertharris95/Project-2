import React from "react";
import { DisabledInput, Input, InputPassword, FormBtn } from "../../Form";
import "./style.css";

function RegisterCompany() {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <DisabledInput col="col s6"
                        inputId="company_creds"
                        label="Company Information"
                    />
                </div>
                <div className="row">
                    <Input col="col s6" 
                        inputId="company_name"
                        label="Company Name"
                    />
                    <Input col="col s6" 
                        inputId="addres"
                        label="Address"
                    />
                </div>
                <div className="row">
                    <Input col="col s6" 
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
                        inputId="role"
                        label="Position"
                    />
                    <Input col="col s6" 
                        inputId="email"
                        label="Email"
                    />
                </div>
                <div className="row">
                    <Input col="col s6" 
                        inputId="password"
                        label="New Password"
                    />
                </div>
                <div className="row">
                    <Input col="col s6"
                        inputId="re_password"
                        label="Verify Password"
                    />
                </div>
                <FormBtn label="Register" 
                    matIcon="done"
                />
            </form>
        </div>
    );
}

export default RegisterCompany;