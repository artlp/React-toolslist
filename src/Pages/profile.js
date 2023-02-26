import React from "react";
import ProfilePage from "../components/Profile/ProfilePage.jsx";
import Header from "../Layouts/header";
import BottomMenu from "../components/BottomMenu/BottomMenu";

function profile() {
  return (
    <div className="wrapper">
      <Header />
      <ProfilePage />
      <BottomMenu />
    </div>
  );
}

export default profile;
