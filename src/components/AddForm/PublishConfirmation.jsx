import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import smileIcon from "../../Assets/Images/smile-icon.svg";
import "../../Assets/Styles/Modal.scss";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose }) {

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
          <img src={smileIcon} alt="" />
        </div>
        <DialogTitle>{"Your tool is published!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link to="/">
          <Button
            onClick={handleClose}
            className="modal_button published_button"
          >
            Home
          </Button>
          </Link>
          <Button
            onClick={handleClose}
            className="modal_button published_button"
          >
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
