import React, { useState, useEffect, useContext } from "react";
import Tabs from "./Tabs";
import "../../Assets/Styles/Search.scss";
import SimpleButton from "../BottomMenu/SimpleButton";
import ToolsContext from "../../Context/toolsListContext";

function Search({ setShowSearchPage, showSearchPage }) {
  const {
    tools,
    filteredTools,
    setSearchTools,
    setFilteredTools,
    searchPrice,
    setSearchPrice,
    searchCategories,
    setSearchCategories,
    searchPlatforms,
    setSearchPlatforms,
    setShowSearchToolbar,
    showSearchToolbar,
  } = useContext(ToolsContext);

  const searchTools = () => {
    return tools.filter((tool) => {
      return (
        searchPlatforms.filter((platform) => tool.platforms.includes(platform))
          .length === searchPlatforms.length &&
        searchCategories.filter((category) =>
          tool.categories.includes(category)
        ).length === searchCategories.length &&
        tool.priceModel === searchPrice
      );
    });
  };

  const handleSearchClick = () => {
    setShowSearchPage(!showSearchPage);
    const foundTools = searchTools(
      tools,
      searchPlatforms,
      searchCategories,
      searchPrice
    );
    setSearchTools(foundTools);
    setFilteredTools(foundTools);
    setShowSearchToolbar(true);
    // console.log("searchpage clicked, \n all tools: ", tools,  "\n found ", foundTools,  "\nfiltered ",filteredTools);
  };
  const handleClearClick = () => {
    setSearchPlatforms([]);
    setSearchCategories([]);
  }; //TODO clear checkmarks in searchcomponents

  return (
    <div className="search-wrapper">
      <div className="search-body">
        <Tabs
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
          searchPlatforms={searchPlatforms}
          searchCategories={searchCategories}
          setSearchPlatforms={setSearchPlatforms}
          setSearchCategories={setSearchCategories}
          setSearchPrice={setSearchPrice}
        />
      </div>
      <footer className="details-footer">
        <SimpleButton onClick={handleClearClick}>Clear all</SimpleButton>
        <button onClick={handleSearchClick}>Search</button>
      </footer>
    </div>
  );
}

export default Search;
