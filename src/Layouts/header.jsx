import logo from "../Assets/Images/addme-logo.svg";
import homeIcon from "../Assets/Images/home.svg";
import "../Assets/Styles/Header.scss";
import Searchbar from "../components/Header/Searchbar";
import ButtonAdd from "../components/Header/ButtonAdd";
import useHeader from "../components/hooks/headerState";
import { Link } from "react-router-dom";
import ButtonSearch from "../Assets/Images/Search.svg";
import ProfileIcon from "../components/Header/ProfileIcon";

function Header() {
  // header states: basic, hidden, filter, library, home, search
  const { headerState, setHeaderState } = useHeader();
  let header;
  if (headerState === "basic") {
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
  } else if (headerState === "home") {
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
  } else if (headerState === "library") {
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
  }

  return header;
}

export default Header;
