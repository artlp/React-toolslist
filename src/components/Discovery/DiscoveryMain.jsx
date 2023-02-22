import { useEffect, useContext } from "react";
import ToolsList from "../ToolsDisplay/ToolsList";
import "../../Assets/Styles/Discovery.scss";
import useHeader from "../hooks/headerState";
import CollectionsList from "../Library/CollectionsList";
import SearchToolbar from "../Search/SearchToolbar";
import ToolsListContext from "../../Context/toolsListContext";
import Filter from "../Library/Filter";

function DiscoveryMain() {
  const { setHeaderState } = useHeader();
  const { showSearchToolbar, filterState, setFilterState } =
    useContext(ToolsListContext);
  useEffect(() => {
    setHeaderState("home");
  }, [setHeaderState]);

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
      <Filter page={"home"}/>
      {showSearchToolbar && <SearchToolbar />}
      <>{renderedList()}</>
    </div>
  );
}

export default DiscoveryMain;
