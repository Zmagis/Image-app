import React from "react";

const Button = props => (
  <button type="submit" onClick={props.clicked} style={{ ...props.add }}>
    {props.children}
  </button>
);

export default Button;
