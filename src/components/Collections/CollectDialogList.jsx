import { useContext, useState } from "react";
import ToolsContext from "../../Context/toolsListContext";
import CollectionPreview from "../../Assets/Images/collection-preview.svg";
import CheckMarkActive from "../../Assets/Images/Checkmark-active.svg"
import CheckMarkInactive from "../../Assets/Images/Checkmark-inactive.svg"

function CollectDialogList() {
  const [checked, setChecked] = useState();
  const { collections, setCollections } = useContext(ToolsContext);
  const handleClick = (event) => { //TODO make it work separately
    event.stopPropagation();
    // console.log(event.target.dataset.id)
    setChecked(!checked);
  }

  const renderedCollections = collections.map((collection) => {
    return (
      <div className="collection-item" onClick={handleClick} data-id={collection.id} key={collection.id}>
        <div className="collection-preview" data-id={collection.id}>
          <img data-id={collection.id} src={CollectionPreview} alt="" />
        </div>
        <div data-id={collection.id} className="collection-name">{collection.name}</div>
        <div data-id={collection.id} className="collection-checkmark"><img src={  checked ? CheckMarkActive : CheckMarkInactive} alt="" />
      </div> 
      </div>
)
})
  return (<div className="collection-list">{renderedCollections}</div>)

}
export default CollectDialogList;
