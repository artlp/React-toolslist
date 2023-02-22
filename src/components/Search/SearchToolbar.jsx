import React from "react";
import { useContext, useEffect } from "react";
import ToolsContext from "../../Context/toolsListContext";
import CloseButton from "../../Assets/Images/small-close.svg";
import SortButton from "../../Assets/Images/sort.svg";
import FilterButton from "../../Assets/Images/filter.svg";

function SearchToolbar() {
  const {
    tools,
    setFilteredTools,
    filteredTools,
    setShowSearchToolbar,
    searchCategories,
    searchPlatforms,
    setSearchCategories,
    setSearchPlatforms,
    searchPrice,
  } = useContext(ToolsContext);

  const handleClearButton = () => {
    setShowSearchToolbar(false);
    setSearchCategories([]);
    setSearchPlatforms([]);
    setFilteredTools(tools);
  };

  const clearTerm = (e) => {
    //TODO make it work!
    console.log(e.target.dataset.array, e.target.dataset.key);
    let term;
    switch (e.target.dataset.array) {
      case "categories":
        term = e.target.dataset.key;
        let newSearchCategories = searchCategories.filter(
          (item) => item !== term
        );
        setSearchCategories(...newSearchCategories);
        break;
      case "platforms":
        term = e.target.dataset.key;
        let newSearchPlatforms = searchPlatforms.filter(
          (item) => item !== term
        );
        setSearchPlatforms(...newSearchPlatforms);
        break;

      default:
        break;
    }
  };

  const renderedSearchCategories = searchCategories.map((item) => {
    return (
      <div key={item} className="search-term-pill">
        {item}
        <img
          data-key={item}
          data-array="categories"
          onClick={clearTerm}
          src={CloseButton}
          alt=""
          title="Remove this category from search query"
        />
      </div>
    );
  });
  const renderedSearchPlatforms = searchPlatforms.map((item) => {
    return (
      <div key={item} className="search-term-pill">
        {item}
        <img
          data-key={item}
          data-array="platforms"
          onClick={clearTerm}
          src={CloseButton}
          alt=""
          title="Remove this platform from search query"
        />
      </div>
    );
  });

  const searchToolbarSort =
    filteredTools.length === 0 ? null : 
    <div className="sort-filter-toolbar">
    <div className="sort-button"><img src={SortButton} alt="" /></div>
    <div className="sort-text">Recents</div>
    <div className="filter-button"><img src={FilterButton} alt="" /></div>
    </div>;

  return (
    <div className="search-toolbar">
      <div className="search-toolbar-header">
        <h2>Search results for {searchPrice} tools</h2>{" "}
        <p onClick={handleClearButton}>Clear all</p>
      </div>
      <div className="search-terms">
        <div className="search-toolbar-pills">{renderedSearchCategories}</div>
        <div className="search-toolbar-pills">{renderedSearchPlatforms}</div>

        {searchToolbarSort}
        {filteredTools.length === 0 ? <h3>NOTHING FOUND</h3> : null}
      </div>
    </div>
  );
}

export default SearchToolbar;
