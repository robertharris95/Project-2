import React from "react";
// import "./style.css";

// props: col, inputId, label.
export function Input(props) {
    return (
        <div className={"input-field "+ props.col}>
            <input id={props.inputId} { ...props } type="text" class="validate" />
            <label for={props.inputId}>{props.label}</label>
        </div>
    );
}

// props: col, inputId, label.
export function InputPassword(props) {
    return (
        <div className={"input-field "+ props.col}>
            <input id={props.inputId} { ...props } type="password" class="validate" />
            <label for={props.inputId}>{props.label}</label>
        </div>
    );
}

// props: col, inputId, label.
export function DisabledInput(props) {
    return (
        <div className={"input-field " + props.col}>
            <input disabled value={props.label} id={props.inputId} type="text" class="validate" />
        </div>
    );
}


//props: label, matIcon.
export function FormBtn(props) {
    return (
        <button className="btn waves-effect waves-light" { ...props } style={{ margin: 15 }} type="submit" name="action">
            <i className={"material-icons " + props.matIcon}></i>
        </button>
    );
}