import React from "react";
import NoProfilePicture from "../../Assets/Images/noprofilepicture.jpg";

function ProfileIcon() {
  return (
    <img className="header user-picture" alt="" src={NoProfilePicture}></img>
  );
}

export default ProfileIcon;
