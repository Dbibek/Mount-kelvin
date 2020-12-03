import React from "react";

const Button = (props) => {
  return (
    <div className="button-div">
      <button className={props.className} onClick={props.onClick}>
        <p>{props.name}</p>
      </button>
    </div>
  );
};

export default Button;
