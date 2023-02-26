import React from "react";
import { useEffect, useContext } from "react";
import "../../Assets/Styles/ProfilePage.scss";
import useHeader from "../hooks/headerState";
import ToolsListContext from "../../Context/toolsListContext";
import Filter from "../Library/Filter";
import ToolsList from "../ToolsDisplay/ToolsList";
import CollectionsList from "../Library/CollectionsList";

function ProfilePage() {
  const { users, filterState } = useContext(ToolsListContext);

  const { setHeaderState } = useHeader();

  useEffect(() => {
    setHeaderState("profile");
  }, [setHeaderState]);

  const currentUser = users[0];

  const renderedList = () => {
    if (!filterState || filterState === "tools") {
      return (
        <div className="library">
          <ToolsList profilePage currentUser={currentUser} />
        </div>
      );
    } else if (filterState === "collections") {
      return (
        <div className="library">
          <CollectionsList profilePage currentUser={currentUser} />
        </div>
      );
    }
  };

  return (
    <section className="profile-container">
      <div className="user-photo">
        <img src={`/Assets/Images/users/${currentUser.id}.jpg`} alt="" />
      </div>
      <div className="user-details">
        <h3>{currentUser.name}</h3>
        <p>{currentUser.position}</p>
      </div>
      <div className="user-stats">
        <span>
          {currentUser.tools_created.length} tools &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span>{currentUser.collections_created.length} collections </span>
      </div>

      <div>
        <Filter page={"profile"} />
        <>{renderedList()}</>
      </div>
    </section>
  );
}

export default ProfilePage;
