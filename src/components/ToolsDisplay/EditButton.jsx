import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

export default function LongMenu({
  item,
  handleEdit,
  handleDelete,
  icon,
  profile,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 28;
  const options = [
    {
      label: "Edit",
      value: "edit",
      handleClick: () => {
        setAnchorEl(null);
        handleEdit();
      },
    },
    {
      label: "Delete",
      value: "delete",
      handleClick: () => {
        setAnchorEl(null);
        handleDelete();
      },
    },
  ];
  const profileOptions = [
    {
      label: <NavLink to="/profile/edit">Edit</NavLink>, //TODO find better way to link to profile edit page
      value: "edit",
      handleClick: () => {
        setAnchorEl(null);
        
      },
    },
    {
      label: "Log Out",
      value: "logout",
      handleClick: () => {
        setAnchorEl(null);
        handleDelete();
      },
    },
  ];

  const menuOptions = profile ? profileOptions : options;

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {!icon ? <MoreVertIcon /> : <SettingsIcon />}
      </IconButton>
      <Menu
        disableScrollLock={true}
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 8,
            width: "16ch",
          },
        }}
      >
        {menuOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === ""}
            onClick={option.handleClick}
          >
            <div className="menu-option">{option.label}</div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
