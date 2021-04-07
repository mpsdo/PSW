import React from "react";
import "../estilos/style.css";

const PrimaryButton = props => {
  return (
    <button
      type={props.type}
      className={props.className}
      id={props.id}
      onClick={() => props.onClick}
      //console.log("cliquei em " + props.name)
    >
      {props.icon}
      {" " + props.name}
    </button>
  );
};

export default PrimaryButton;
