import { React, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "../../Assets/Styles/ToolsDetails.scss";
import CardMedia from "@mui/material/CardMedia";
import LinkIcon from "..//../Assets/Images/link.svg";
// import { ListItemSecondaryAction } from "@mui/material";
import DetailedHeaderButtons from "./DetailedHeaderButtons";
import CollectButton from "../BottomMenu/CollectButton";
import SimpleButton from "../BottomMenu/SimpleButton";
import EditButton from "../ToolsDisplay/EditButton";
import SocialShare from "./SocialShare";

function ToolsDetails({ state }) {
  // const params = useParams();
  // const id = params.id; //Don't need params anymore?..

  // const { tools } = useContext(ToolsContext); //I don't need an entire tools object here...
  // const tool = tools.find((item) => item.id === id);
  const location = useLocation();
  const [shareOpen, setShareOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleClick = () => {
    setShareOpen(!shareOpen);
  };

  const handleClose = () => {
    setShareOpen(false);
  };
  const { item } = location.state; //BUG error when opening page via direct link (http://localhost:3000/tools/22)
  const renderedCategories = item.categories.map((e) => {
    return (
      <div className="details-category" key={e}>
        {e}
      </div>
    );
  });
  const renderedPlatforms = item.platforms.map((e) => {
    return (
      <div className="details-category" key={e}>
        {e}
      </div>
    );
  });
  return (
    <>
      <section className="details-wrapper">
        <div className="details-header">
          <div className="details-header-buttons">
            <DetailedHeaderButtons page={"tool"} handleClick={handleClick} />
          </div>
          <CardMedia
            sx={{ height: 150 }}
            image={`/Assets/Images/${item.image}`}
            title={`${item.name} header image`}
            alt={`${item.name} header image`}
          />

          <div className="details-title">
            <div className="details-tool-title">
              <h1>{item.name}</h1>
              <EditButton item={"tool"} />
            </div>
            <div className="details-container">
              <img src={LinkIcon} alt="" />
              <div className="details-link">{item.link}</div>
            </div>
          </div>
        </div>
        <div className="details-body">
          <div className="details-description">{item.uses}</div>
          <div className="details-price">
            {item.priceModel} {item.price}
          </div>
          <div className="details-categories">
            <h2 className="details-subheader">CATEGORIES</h2>
            <div className="details-category-list">{renderedCategories}</div>
          </div>
          <div className="details-categories">
            <h2 className="details-subheader">PLATFORMS</h2>
            <div className="details-category-list">{renderedPlatforms}</div>
          </div>
          <div className="details-marks">
            <h2 className="details-subheader">MARKS</h2>
            <p>Easy to use: {item.markEase}/5</p>
            <p>Helpful: {item.markHelpful}/5</p>
            <p>UX: {item.markUx}/5</p>
            <p>Community: {item.markCommunity}/5</p>
          </div>

          <div className="details-description">
            <h2 className="details-subheader">FREE TEXT</h2>
            {item.freeText}
          </div>
          <p className="tools-author">{item.author}</p>
        </div>
      </section>
      <footer className="details-footer">
        <SimpleButton>
          <Link to={`/tools/${item.id}`} state={{ item: item }}>
            Share
          </Link>
        </SimpleButton>
        <CollectButton />
      </footer>
      {shareOpen ? (
        <SocialShare location={location.pathname} handleClose={handleClose} />
      ) : null}
    </>
  );
}

export default ToolsDetails;
