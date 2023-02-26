import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import CloseButton from "../../Assets/Images/small-close.svg";
import sadIcon from "../../Assets/Images/sad-face.svg";
import "../../Assets/Styles/Modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose }) {
  const handleClick = (label) => {};

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="smileIcon">
          <img src={sadIcon} alt="" />
        </div>
        <section className="collect-dialog-header delete">
          <img onClick={handleClose} src={CloseButton} alt="" />
        </section>

        <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button
              onClick={handleClose}
              className="modal_button published_button"
            >
              Delete
            </Button>
          </Link>
          <Button
            onClick={handleClose}
            className="modal_button published_button"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
