// import { Tabs } from '@mui/material';
import React from "react";
import { useState, useContext } from "react";
import ButtonFilter from "../../Assets/Images/filter.svg";
import ButtonSearch from "../../Assets/Images/Search.svg";
import SearchPage from "../Search/SearchPage";
import ToolsContext from "../../Context/toolsListContext";

function Searchbar() {
  const {showSearchPage, setShowSearchPage} = useContext(ToolsContext)
  const handleClick = () => {
    setShowSearchPage(!showSearchPage);
  };
  return (
    <>
      <div className="header-searchbar" onClick={handleClick}>
        <div>
          <img src={ButtonSearch} alt="" />
        </div>
        <div className="searchbar-text">
          <div className="top">Find your tool</div>
          <div className="bottom">Categories... Platforms...</div>
        </div>
        <div>
          <img src={ButtonFilter} alt="" />
        </div>
      </div>
      {showSearchPage ? (
        <SearchPage
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      ) : null}
    </>
  );
}

export default Searchbar;
