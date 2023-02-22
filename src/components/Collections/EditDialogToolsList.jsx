import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function InteractiveList({ tools }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  function generate() {
    return tools.map((tool) => {
      return (
        <ListItem
          key={tool.id}
          secondaryAction={
            <IconButton
              data-tool={tool.id}
              edge="end"
              aria-label="delete"
              onClick={(e) => {
                console.log("delete tool with id ", e.target.dataset.tool);
              }}
            >
              <DeleteIcon style={{ pointerEvents: "none" }} />
              {/* //TODO change icon to ours */}
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src={`/Assets/Images/${tool.image}`}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={tool.name}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
      );
    });
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <List dense={dense}>{generate()}</List>
    </Box>
  );
}
