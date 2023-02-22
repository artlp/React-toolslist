import { React, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../Assets/Styles/Collections.scss";
import CardMedia from "@mui/material/CardMedia";
import DetailedHeaderButtons from "../ToolsDisplay/DetailedHeaderButtons";
import EditButton from "../ToolsDisplay/EditButton";
import ToolsList from "../ToolsDisplay/ToolsList";
import ToolsContext from "../../Context/toolsListContext";
import ButtonSearch from "../../Assets/Images/Search.svg";
import ShareCollection from "./ShareCollection";
import EditCollection from "./EditCollection";
import DeleteCollection from "./DeleteCollection";
import { StyledEngineProvider } from "@mui/material";

function CollectionsDetails({ state }) {
  const location = useLocation();
  const { item } = location.state; //BUG error when opening page via direct link (http://localhost:3000/tools/22)
  const { collections, tools, setFilteredTools, filteredTools } =
    useContext(ToolsContext);
  useEffect(() => {
    const filter = tools.filter((tool) => tool.collections.includes(item.id));
    setFilteredTools(filter);
  }, []);

  const sharedUsers = [
    { id: 1, name: "Andre Stevens", website: "http://vi.nf/vobta" },
    { id: 2, name: "Victor Jefferson", website: "http://tesuave.ca/ulazibnev" },
    { id: 3, name: "Olivia McGuire", website: "http://wuvek.tc/kuw" },
    { id: 2, name: "Rachel Marsh", website: "http://bianpe.sn/casowmi" },
    { id: 3, name: "Lou Day", website: "http://muz.mq/efafe" },
    { id: 1, name: "Timothy Watson", website: "http://mucurgu.kw/mezek" },
    { id: 2, name: "Leroy Padilla", website: "http://jotocko.net/hejrak" },
    { id: 3, name: "Helen Riley", website: "http://nepwew.ni/og" },
  ];

  const [shareOpen, setShareOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleClick = () => {
    setShareOpen(true);
  };

  const handleClose = () => {
    setShareOpen(false);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleEdit = () => {
    setEditOpen(true);
  };

  const handleDelete = () => {
    setDeleteOpen(true);
  };

  const renderedSharedUsers = () => {
    const users = sharedUsers.slice(0, 3).map((user, index) => {
      let position = index * 13;
      return (
        <div
          className="collection-user"
          key={user.id}
          style={{
            left: position + "px",
          }}
        >
          <img src={process.env.PUBLIC_URL + `/Assets/Images/users/${user.id}.jpg`} alt="" />
        </div>
      );
    });

    return (
      <>
        <div className="collection-avatars">{users}</div>
        <div
          className="collection-extra-shares"
          style={{ position: "relative", right: -users.length * 0.8 + "%" }} //TODO fix styling
        >
          {sharedUsers.length > 3 ? (
            <>
              <div className="extra-shares">{sharedUsers.length} </div>{" "}
              <p className="extra-shares-text">Favorites</p>
            </>
          ) : (
            <>{sharedUsers.length} Favorites</>
          )}
          {/* //TODO fix visuals */}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="details-header collection">
        <div className="details-header-buttons">
          <DetailedHeaderButtons
            page={"collection"}
            handleClick={handleClick}
          />
        </div>
        <CardMedia
          sx={{ height: 150 }}
          image={process.env.PUBLIC_URL + `/Assets/Images/${item.image}`}
          title={`${item.name} header image`}
          alt={`${item.name} header image`}
        />
        <h1 className="collection-details-title">{item.name}</h1>

        <div className="details-title">
          <div className="collection-details-toolbar">
            <div> {filteredTools.length === 1 ? `${filteredTools.length} tool`:`${filteredTools.length} tools`} </div>
            <div className="library-search-icon">
              <img src={ButtonSearch} alt="" />
            </div>
            <EditButton
              item={"collection"}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
          {sharedUsers.length > 0 ? (
            <div className="collection-shares">{renderedSharedUsers()}</div>
          ) : null}
        </div>
      </div>
      <div className="collections-list">
        <ToolsList />
      </div>
      <StyledEngineProvider injectFirst>
        <ShareCollection
          open={shareOpen}
          handleClose={handleClose}
          item={item}
          sharedUsers={sharedUsers}
        />
        <EditCollection
          open={editOpen}
          handleClose={handleEditClose}
          item={item}
          sharedUsers={sharedUsers}
        />
        <DeleteCollection
          open={deleteOpen}
          handleClose={handleDeleteClose}
          item={item}
          sharedUsers={sharedUsers}
        />
      </StyledEngineProvider>
    </>
  );
}

export default CollectionsDetails;
