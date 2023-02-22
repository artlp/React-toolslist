import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import CloseButton from "../../Assets/Images/small-close.svg";
import "../../Assets/Styles/Modal.scss";
import "../../Assets/Styles/Collections.scss";
import AddToFav from "./AddToFav";
import CollectDialogList from "./CollectDialogList";
import CollectDialogCreate from "./CollectDialogCreate";
import { useState } from "react";
import Snackbar from "./Snackbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose, setOpen }) {
  const [saveMode, setSaveMode] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleSaveClick = () => {
    setShowSnackbar(true);
    setSaveMode(false);
    setOpen(false);
  };
  const dialogContext = () => {
    if (!saveMode) {
      return (
        <>
          <section className="collect-dialog-header" sx={{padding:"0 244px"}}>
            <h3>Save to collection</h3>
            <img onClick={handleClose} src={CloseButton} alt="" />
          </section>
          <section className="quick-favorite">
            <h4>Quick save and organize later</h4>
            <AddToFav></AddToFav>
          </section>
          <hr />
          <section className="collect-dialog-collections">
            <div className="header">
              <h4>Choose collection</h4>
              <div className="remove-btn">Remove all</div>
            </div>
            <CollectDialogList></CollectDialogList>
          </section>
          <hr />
          <section className="collect-dialog-new-collection">
            <h4>Or tap and create a new collection</h4>
            <CollectDialogCreate
              setSaveMode={setSaveMode}
            ></CollectDialogCreate>
          </section>
        </>
      );
    } else {
      return (
        <>
          <section className="collect-dialog-header">
            <h3>Save to collection</h3>
            <img onClick={handleClose} src={CloseButton} alt="" />
          </section>
          <section className="collect-name-collection">
            <h4>Name your collection</h4>
            <input
              className="collection-name"
              type="text"
              placeholder="Collection name"
              required
            />
            <div className="collection-save-buttons">
              <button
                onClick={() => {
                  setSaveMode(false);
                }}
                className="button-simple"
              >
                Back
              </button>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div>
      <Dialog
                   sx={{padding:"0 4%"}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        className="collect-dialog"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>{dialogContext()}</DialogContent>

      </Dialog>
      <Snackbar
          showSnackbar={showSnackbar}
          setShowSnackbar={setShowSnackbar}
        ></Snackbar>
    </div>
  );
}
