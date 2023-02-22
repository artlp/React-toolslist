import ToolsList from "../ToolsDisplay/ToolsList";
import CollectionsList from "../Library/CollectionsList";
import "../../Assets/Styles/Library.scss";
import useHeader from "../hooks/headerState";
import Filter from "./Filter";
import { useEffect, useContext } from "react";
import ToolsListContext from "../../Context/toolsListContext";

function LibraryMain() {
  const { setHeaderState } = useHeader();
  useEffect(() => {
    setHeaderState("library");
    // first
  }, [setHeaderState]);

  const { filterState, setFilterState } = useContext(ToolsListContext);

  const renderedList = () => {
    if (!filterState || filterState === "tools") {
      return (
        <div className="library">
          <ToolsList />
        </div>
      );
    } else if (filterState === "collections") {
      return (
        <div className="library">
          <CollectionsList />
        </div>
      );
    }
  };

  return (
    <div>
      <Filter />
      <>{renderedList()}</>
    </div>
  );
}

export default LibraryMain;
