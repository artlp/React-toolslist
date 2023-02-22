import { useContext, useEffect } from "react";
import ToolsDisplay from "../ToolsDisplay/ToolsDisplay";
import ToolsContext from "../../Context/toolsListContext";

function ToolsList() {
  const {
    tools,
    filteredTools,
    setFilteredTools,
    showSearchPage,
    setShowSearchPage,
  } = useContext(ToolsContext);
  useEffect(() => {
    setFilteredTools(tools);
  }, [setFilteredTools, tools]);
  const renderedTools = filteredTools.map((item) => {
    return <ToolsDisplay item={item} key={item.id} />;
  });
  return (
    <section className="tools-list">
      {renderedTools.length === 0 ? (
        <button
          onClick={() => {
            setShowSearchPage(!showSearchPage);
          }}
        >
          Search again
        </button>
      ) : (
        renderedTools
      )}
    </section>
  );
}

export default ToolsList;
