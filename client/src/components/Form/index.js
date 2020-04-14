import React from "react";
// import "./style.css";

// props: col, inputId, label.
export function Input(props) {
    return (
        <div className={"input-field "+ props.col}>
            <input id={props.inputId} { ...props } type="text" className="validate" />
            <label for={props.inputId}>{props.label}</label>
        </div>
    );
}

// props: col, inputId, label.
export function InputPassword(props) {
    return (
        <div className={"input-field "+ props.col}>
            <input id={props.inputId} { ...props } type="password" className="validate" />
            <label for={props.inputId}>{props.label}</label>
        </div>
    );
}

// props: col, inputId, label.
export function DisabledInput(props) {
    return (
        <div className={"input-field " + props.col}>
            <input disabled value={props.label} id={props.inputId} type="text" className="validate" />
        </div>
    );
}


//props: label, maticon.
export function FormBtn(props) {
    return (
        <button className="btn waves-effect waves-light" { ...props } style={{ margin: 15 }} type="submit" name="action">
            {props.label}
        </button>
    );
}

{/* <i className={"material-icons " + props.maticon}></i> */}