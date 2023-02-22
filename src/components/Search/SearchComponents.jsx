import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import searchIcon from "../../Assets/Images/Search.svg";
import { useEffect } from "react";

export default function SearchComponents({
  index,
  searchCategories,
  searchPlatforms,
  setSearchCategories,
  setSearchPlatforms,
}) {
  const data = [
    [
      "Automation",
      "Campaigns",
      "Content",
      "CRO",
      "Development",
      "Leisure",
      "Shopping",
      "CEO",
      "Marketing",
      "Design",
    ],
    [
      "All",
      "Browser extensions",
      "Elementor",
      "Figma",
      "WordPress",
      "CRM",
      "Other",
      "VS Code",
      "Adobe Premiere",
      "Google Data Studio",
    ],
  ];

  const tools = !index ? searchCategories : searchPlatforms;
  const renderedTools = !index ? data[0] : data[1];
  const [checked, setChecked] = React.useState(tools);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      tools.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
      tools.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  useEffect(() => {
    if (!index) {
      setSearchCategories(tools);
    } else {
      setSearchPlatforms(tools);
    }
  }, [checked]);

  //BUG error Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>.
  return (
    <div>
      <h2>{index ? "Platforms" : "Categories"}</h2>
      <div className="searchbar">
        <input
          type="search"
          name="categories-search"
          id="categories-search"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <img src={searchIcon} alt="" className="search-icon" />
      </div>
      <List sx={{ width: "100%" }}>
        {renderedTools
          .filter((e) => e.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  {/* <ListItemIcon> */}
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                  {/* </ListItemIcon> */}
                  <ListItemText id={labelId} primary={`${value}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}
