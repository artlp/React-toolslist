import { useContext, useEffect } from "react";
import CollectionsDisplay from "../Library/CollectionsDisplay";
import ToolsContext from "../../Context/toolsListContext";

function CollectionsList() {
  const {
    collections,
    setFilteredCollections,
    filteredCollections,
    showSearchPage,
    setShowSearchPage,
  } = useContext(ToolsContext);

  useEffect(() => {
    setFilteredCollections(collections);
  }, [setFilteredCollections, collections]);

  const renderedCollections = filteredCollections.map((item) => {
    return <CollectionsDisplay item={item} key={item.id} />;
  });
  
  return (
    <section className="tools-list">
      {renderedCollections.length === 0 ? (
        <button
          onClick={() => {
            setShowSearchPage(!showSearchPage);
          }}
        >
          Search again
        </button>
      ) : (
        renderedCollections
      )}
    </section>
  );
}

export default CollectionsList;
