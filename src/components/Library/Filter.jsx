import { useContext, useState } from "react";
import ToolsContext from "../../Context/toolsListContext";
import FilterClear from "../../Assets/Images/Filter-close.svg";

function Filter({page}) {
  const {
    filterState,
    setFilterState,
  } = useContext(ToolsContext);

  const mainFilter = [
    { label: "Tools", value: "tools" },
    { label: "Collections", value: "collections" },
  ];

  const toolsSubfilter = [
    { label: "Added by me", value: "my" },
    { label: "Favorited", value: "saved" },
  ];
  const collectionsSubfilter = [
    { label: "Added by me", value: "my" },
    { label: "Favorited", value: "saved" },
    // { label: "Shared with me", value: "shared" },
  ];
  const [subfilterState, setSubfilterState] = useState(null);

  const handleClick = (event) => {
    setFilterState(event.target.dataset.key);
  };
  const handleSubfilterClick = (event) => {
    setSubfilterState(event.target.dataset.key);
  };

  const renderedButtons = mainFilter.map((button) => {
    return (
      <button
        className={
          filterState === button.value ? "btn-filter active" :
          filterState !== button.value && filterState ? "btn-filter btn-hidden": "btn-filter"
        }
        onClick={handleClick}
        data-key={button.value}
        key={button.value}
      >
        {button.label}
      </button>
    );
  });

  const handleFilterClear = () => {
    setFilterState(null);
    setSubfilterState(null);
  };

  const renderedSubfilters = () => {
    if (!filterState || page === "home" || page === "profile") {
      return;
    } else if (filterState === "tools") {
      return toolsSubfilter.map((button) => {
        return (
          <button
            className={
              subfilterState === button.value
                ? "btn-filter subfilter-active"
                : "btn-filter"
            }
            onClick={handleSubfilterClick}
            data-key={button.value}
            key={button.value}
          >
            {button.label}
          </button>
        );
      });
    } else if (filterState === "collections") {
      return collectionsSubfilter.map((button) => {
        return (
          <button
            className={
              subfilterState === button.value
                ? "btn-filter subfilter-active"
                : "btn-filter"
            }
            onClick={handleSubfilterClick}
            data-key={button.value}
            key={button.value}
          >
            {button.label}
          </button>
        );
      });
    }
  };

  const filterClearBtn = () => {
    if (!filterState) {
      return null;
    } else {
      return (
        <button className="filter-clear">
          <img
            src={FilterClear}
            alt="Clear filters"
            onClick={handleFilterClear}
          />
        </button>
      );
    }
  };
  return (
    <div className="filter-wrapper">
      {filterClearBtn()}
      {renderedButtons}
      {renderedSubfilters()}
    </div>
  );
}
export default Filter;
