import React from "react";
import { useState } from "react";
// import HeartIcon from "../../Assets/Images/heart.svg";
import "../../Assets/Styles/CircleButtons.scss";

function FavButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className={`${
        active ? "button-header-circle active" : "button-header-circle"
      }`}
    >
      <div
        className=""
        title="Add to favorites"
        onClick={handleClick}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14C8 14 1 9.91666 1 4.95833C1 4.08179 1.29155 3.23232 1.82503 2.55445C2.35852 1.87659 3.101 1.4122 3.92614 1.24029C4.75128 1.06839 5.6081 1.19959 6.35084 1.61158C7.09359 2.02356 7.67635 2.69088 8 3.5C8.32365 2.69088 8.90641 2.02356 9.64915 1.61158C10.3919 1.19959 11.2487 1.06839 12.0739 1.24029C12.899 1.4122 13.6415 1.87659 14.175 2.55445C14.7085 3.23232 15 4.08179 15 4.95833C15 9.91666 8 14 8 14Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default FavButton;
