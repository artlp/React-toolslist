import React from "react";
import { useState } from "react";
import CollectIcon from "../../Assets/Images/collect.svg";
import CollectIconActive from "../../Assets/Images/collect-active.svg";
import CollectDialog from "../Collections/CollectDialog";
import { StyledEngineProvider } from "@mui/material/styles";

function CollectButton() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const icon = active ? CollectIconActive : CollectIcon;
  const text = active ? "Collected" : "Collect";
  return (
    <>
      <button
        onClick={handleClick}
        className={`${active ? "button-collect active" : "button-collect"}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <img src={icon} alt="" />
        <p style={{ flex: "1 0 auto", maxWidth: "70px" }}>{text}</p>
      </button>
      <StyledEngineProvider injectFirst>
        <CollectDialog open={open} handleClose={handleClose} setOpen={setOpen}/>
      </StyledEngineProvider>
    </>
  );
}

export default CollectButton;
