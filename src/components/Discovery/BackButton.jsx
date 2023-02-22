import React from "react";
import { useState } from "react";
import "../../Assets/Styles/CircleButtons.scss";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="button-header-circle">
      <div className="" title="Back" onClick={handleClick}>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.625 14.5625L1.0625 8L7.625 1.4375"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default BackButton;
