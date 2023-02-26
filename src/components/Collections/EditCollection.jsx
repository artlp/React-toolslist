import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import CloseButton from "../../Assets/Images/small-close.svg";
import SelectRole from "./SelectRole";
import CopyIcon from "../../Assets/Images/Share-link.svg";
import { useState, useContext } from "react";
import ToolsContext from "../../Context/toolsListContext";
import EditDialogToolsList from "./EditDialogToolsList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose, item }) {
  const [privacy, setPrivacy] = useState(null);
  const { collections, tools, setFilteredTools, filteredTools } =
    useContext(ToolsContext);
  const handleClick = (label) => {
    setPrivacy(label);
  };

  const filter = tools.filter((tool) => tool.collections.includes(item.id));

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <section className="collect-dialog-header">
          <h3>Edit collection</h3>
          <img onClick={handleClose} src={CloseButton} alt="" />
        </section>
        <div className="modal-wrapper">
          <DialogContent className="share-fix">
            <section className="collection-edit">
              <section>
                <p className="edit-rename">Enter the name of your collection</p>
                <>
                  <input
                    className="share-input"
                    type="text"
                    placeholder="Enter new name"
                    defaultValue={item.name}
                  ></input>
                  <hr></hr>
                </>
              </section>
              <section>
                <p className="edit-tools-header">{filter.length === 1 ? `${filter.length} tool`:`${filter.length} tools`}</p>
                <EditDialogToolsList tools={filter}></EditDialogToolsList>
              </section>
            </section>
          </DialogContent>
        </div>
        <DialogActions>
          <div className="share-bottom-menu">
            <button
              onClick={() => {}}
              className="button-simple share-copy-button"
            >
              <img src={CopyIcon} alt="" />
              <div>Copy link</div>
            </button>

            <button onClick={() => {}}>Save</button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
