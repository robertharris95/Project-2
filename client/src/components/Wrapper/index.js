import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className={props.addClasses}>{props.children}</div>;
}

export default Wrapper;
