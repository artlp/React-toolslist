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
import RadioActive from "../../Assets/Images/Radio-active.svg";
import RadioInactive from "../../Assets/Images/Radio-inactive.svg";
import SelectRole from "./SelectRole";
import CopyIcon from "../../Assets/Images/Share-link.svg";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  handleClose,
  item,
  sharedUsers,
}) {
  const renderedUsers = sharedUsers.map((user) => {
    return (
      <section className="share-user-card" key={user.name}>
        <div className="user-photo">
          <img src={`/Assets/Images/users/${user.id}.jpg`} alt="" />
        </div>
        <div className="user-details">
          <h3>{user.name}</h3>
          <p>{user.position}</p>
        </div>
        <SelectRole></SelectRole>
      </section>
    );
  });

  const roles = ["Owner", "Editor", "Viewer"];
  const [privacy, setPrivacy] = useState(null);

  const handleClick = (label) => {
    setPrivacy(label);
  };

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
          <h3>Share collection</h3>
          <img onClick={handleClose} src={CloseButton} alt="" />
        </section>
        <div className="modal-wrapper">
          <DialogTitle textAlign="left" className="collection-share-title">
            {item.name}
          </DialogTitle>
          <hr></hr>
          <DialogContent className="share-fix">
            <section className="collection-share-options">
              <section className="share-private">
                <div
                  className="share-radio-button"
                  data-label="private"
                  onClick={(event) => handleClick(event.target.dataset.label)}
                >
                  <div className="radio-button-label">
                    <h3>Private</h3>
                    <p>Only these people will have access</p>
                  </div>
                  <div className="radio-button">
                    <img
                      src={privacy === "private" ? RadioActive : RadioInactive}
                      alt=""
                    />
                  </div>
                </div>
              {privacy === "private" ? (
                <><input
                  className="share-input"
                  type="text"
                  placeholder="Add people"
                ></input>
                <p>
                  Choose access: view or edit (option to add new tools and share
                  it but not to delete)
                </p>
                <div className="share-users">{renderedUsers}</div></>
              ) : null}
              </section>
              <section className="share-public">
                <div
                  className="share-radio-button"
                  data-label="public"
                  onClick={(event) => handleClick(event.target.dataset.label)}
                >
                  <div className="radio-button-label">
                    <h3>Public</h3>
                    <p>Open to everyone</p>
                  </div>
                  <div className="radio-button">
                    <img
                      src={privacy === "public" ? RadioActive : RadioInactive}
                      alt=""
                    />
                  </div>
                </div>
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
