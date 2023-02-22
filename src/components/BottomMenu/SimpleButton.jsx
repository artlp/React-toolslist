import React from "react";
import { useState } from "react";

function SimpleButton({state, children, onClick}) {
  const [active, setActive] = useState(false);

  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <button
      onClick={onClick}
      className={`${
        active ? "button-simple active" : "button-simple"
      }`}
    >{children}</button>
  );
}

export default SimpleButton;
