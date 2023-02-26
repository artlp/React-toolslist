import React from "react";
import ProfileEdit from "../components/Profile/ProfileEdit.jsx";
import Header from "../Layouts/header";
import BottomMenu from "../components/BottomMenu/BottomMenu";

function profile() {
  return (
    <div className="wrapper">
      <Header />
      <ProfileEdit />
    </div>
  );
}

export default profile;
