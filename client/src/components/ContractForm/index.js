import React, { useState, useEffect } from "react";
import { DisabledInput, Input, TextArea, FormBtn, FileInput } from "../Form";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function ContractForm(props) {

    const [formObject, setFormObject] = useState({});
    const [redirect, setRedirect] = useState({ path: null });
    const [userData, setUserData] = useState({
        userId: null,
        userName: null,
        companyId: null,
        companyName: null
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    useEffect( () => {
        API.getUser().then( ({data}) => setUserData({
            userId: data._id,
            userName: data.name,
            companyId: data.companyId,
            companyName: data.companyName
        }));
    }, [])

    function handleFormSubmit(event) {
        event.preventDefault();

        const { contractName, category, description, rate } = formObject;

        const contract = {
            name: contractName,
            category: category,
            description: description,
            rate: rate,
            userId: userData.userId,
            userName: userData.userName,
            companyId: userData.companyId,
            companyName: userData.companyName
        }

        API.saveContract(contract)
        .then(() => setRedirect({ path: "/members" }))
        .catch( (err) => console.log(err));
    }

    return (
        <div className={"row " + props.addClasses}>
            {redirect.path ? <Redirect to={redirect.path} /> : null}
            <form className="col s12">
                <div className="row">
                    <DisabledInput col="col s12"
                        inputId="new_contract"
                        label="New Contract"
                    />
                </div>
                <div className="row">
                    <Input onChange={handleInputChange}
                        name="contractName"
                        col="col s6" 
                        inputId="contract_name"
                        label="Product/Service Name"
                    />
                    <Input onChange={handleInputChange}
                        name="category" 
                        col="col s6" 
                        inputId="category"
                        label="Category"
                    />
                </div>
                <div className="row">
                    <TextArea onChange={handleInputChange}
                        name="description" 
                        col="col s6" 
                        inputId="description"
                        label="Description"
                    />
                </div>
                <div className="row">
                    <Input onChange={handleInputChange}
                        name="rate" 
                        col="col s6" 
                        inputId="rate"
                        label="Offering Rate"
                    />
                </div>
                <div className="row">
                    <FileInput col="col s6"
                    />
                </div>
                <FormBtn onClick={handleFormSubmit} 
                    label="Submit"
                />
            </form>
        </div>
    );
}

export default ContractForm;
