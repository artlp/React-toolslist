import logo from "../Assets/Images/addme-logo.svg";
import homeIcon from "../Assets/Images/home.svg";
import "../Assets/Styles/Header.scss";
import Searchbar from "../components/Header/Searchbar";
import ButtonAdd from "../components/Header/ButtonAdd";
import useHeader from "../components/hooks/headerState";
import { Link } from "react-router-dom";
import ButtonSearch from "../Assets/Images/Search.svg";
import ProfileIcon from "../components/Header/ProfileIcon";
import ShareIcon from "../Assets/Images/share.svg";
import EditButton from "../components/ToolsDisplay/EditButton";

function Header() {
  // header states: basic, hidden, filter, library, home, search, profile, profile-settings
  const HEADER_HOME = "home";
  const HEADER_BASIC = "basic";
  const HEADER_LIBRARY = "library";
  const HEADER_PROFILE = "profile";
  const HEADER_PROFILE_EDIT = "profile-edit";
  // const HEADER_FILTER = "filter";
  // const HEADER_SEARCH = "search";
  // const HEADER_HIDDEN = "hidden";

  const { headerState } = useHeader();
  let header;
  if (headerState === HEADER_BASIC) {
    header = (
      <header className="header-basic">
        <div className="header_logo">
          <img src={logo} alt="" />
        </div>
        <Link to="/">
          <div className="home_icon">
            <img src={homeIcon} alt="" />
          </div>
        </Link>
      </header>
    );
  } else if (headerState === HEADER_HOME) {
    header = (
      <header className="header-home">
        <div className="header_logo">
          <img src={logo} alt="" />
        </div>
        <Searchbar />
        <Link to="/adding-tool">
          <div className="header-button-add">
            <ButtonAdd />
          </div>
        </Link>
      </header>
    );
  } else if (headerState === HEADER_LIBRARY) {
    header = (
      <header className="header-home">
        <div className="header_logo">
          <ProfileIcon />
        </div>
        <div className="library-center-block">
          <h2 className="library-header">Your Library</h2>
          <div className="library-search-icon">
            <img src={ButtonSearch} alt="" />
          </div>
        </div>
        <Link to="/adding-tool">
          <div className="header-button-add">
            <ButtonAdd />
          </div>
        </Link>
      </header>
    );
  } else if (headerState === HEADER_PROFILE) {
    header = (
      <header className="header-home profile">
        <div className="header_logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-profile-buttons">
          <div>
            <img src={ShareIcon} alt="" />
          </div>
          <div>
            <EditButton icon profile></EditButton>
          </div>
        </div>
      </header>
    );
  } else if (headerState === HEADER_PROFILE_EDIT) {
    header = (
      <header className="header-home profile-edit">
        <div className="header_logo">
          <img src={logo} alt="" />
        </div>
      </header>
    );
  }
  return header;
}

export default Header;
