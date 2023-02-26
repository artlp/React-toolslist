import React from "react";
import { useEffect, useContext } from "react";
import "../../Assets/Styles/ProfilePage.scss";
import useHeader from "../hooks/headerState";
import ToolsListContext from "../../Context/toolsListContext";
import Filter from "../Library/Filter";
import ToolsList from "../ToolsDisplay/ToolsList";
import CollectionsList from "../Library/CollectionsList";

function ProfilePage() {
  const { users } = useContext(ToolsListContext);

  const { setHeaderState } = useHeader();

  useEffect(() => {
    setHeaderState("profile-edit");
  }, [setHeaderState]);

  const currentUser = users[0];

  return (
    <section className="profile-container">
      <div className="user-photo">
      <label htmlFor="file-upload" className="custom-file-upload">
      <img src={`/Assets/Images/users/${currentUser.id}.jpg`} alt="" />
</label>
<input id="file-upload" type="file"/>

      </div>
      <div className="user-details">
        <h3>{currentUser.name}</h3>
        <p>{currentUser.position}</p>
      </div>
      <div className="user-data">

      </div>
    </section>
  );
}

export default ProfilePage;
