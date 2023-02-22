import CreateButton from "../../Assets/Images/add-collection.svg";

function CollectDialogCreate({ setSaveMode }) {
  const handleClick = () => {
    setSaveMode(true);
  };
  return (
    <section className="btn-create" onClick={handleClick}>
      <div className="button">
        <img src={CreateButton} alt="" />
      </div>
      <p>Create new collection</p>
    </section>
  );
}

export default CollectDialogCreate;
