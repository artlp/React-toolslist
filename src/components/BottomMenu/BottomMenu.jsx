import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/Styles/BottomMenu.scss";
import homeIcon from "../../Assets/Images/home-inactive.svg";
import homeIconActive from "../../Assets/Images/home-active.svg";
import aboutIcon from "../../Assets/Images/about.svg";
import aboutIconActive from "../../Assets/Images/about-active.svg";
import profileIcon from "../../Assets/Images/profile.svg";
import profileIconActive from "../../Assets/Images/profile-active.svg";
import libraryIconActive from "../../Assets/Images/library-active.svg";
import libraryIcon from "../../Assets/Images/library.svg";
import useLogin from "../hooks/login";

function BottomMenu() {
  const { loggedIn } = useLogin();

  const logInButton = () => {
    if (loggedIn) {
      return (
        <div className="bottom_menu_tab">
          <NavLink to="/profile">
          {({ isActive }) => (
            <>
            <div className="bottom_menu_icon">
              <img src={isActive ? profileIconActive : profileIcon} alt="Go to profile button" />
            </div>
            <div className="bottom_menu_label">Profile</div>
            </>
          )}
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="bottom_menu_tab">
          <NavLink to="/login">
          {({ isActive }) => (
            <>
            <div className="bottom_menu_icon">
              <img src={isActive ? profileIconActive : profileIcon} alt="Log in page button" />
            </div>
            <div className="bottom_menu_label">Log In</div>
            </>
          )}
          </NavLink>
        </div>
      );
    }
  };

  return (
    <div className="bottom_menu">
      <div className="bottom_menu_tab">
        <NavLink to="/">
          {({ isActive }) => (
            <>
              <div className="bottom_menu_icon">
                <img
                  src={isActive ? homeIconActive : homeIcon}
                  alt="Go to home page button"
                />
              </div>
              <div className="bottom_menu_label">Home</div>
            </>
          )}
        </NavLink>
      </div>
      <div className="bottom_menu_tab">
        <NavLink to="/library">
        {({ isActive }) => (
            <>
          <div className="bottom_menu_icon">
            <img src={isActive ? libraryIconActive : libraryIcon} alt="Go to library page button" />
          </div>
          <div className="bottom_menu_label">Library</div>
          </>
          )}
        </NavLink>
      </div>
      <div className="bottom_menu_tab">
        <NavLink to="/blog">
        {({ isActive }) => (
            <>
          <div className="bottom_menu_icon">
            <img src={isActive ? aboutIconActive : aboutIcon} alt="Go to blog page button" />
          </div>
          <div className="bottom_menu_label">Blog</div>
          </>
          )}
        </NavLink>
      </div>
      {logInButton()}
    </div>
  );
}
export default BottomMenu;
