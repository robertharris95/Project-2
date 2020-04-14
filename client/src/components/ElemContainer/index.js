import React from "react";
import "./style.css";

// Add ElemContainer always as props to use the imported style.css
function ElemContainer(props) {
  return <div className={props.addClasses}>{props.children}</div>;
}

export default ElemContainer;
