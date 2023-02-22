import * as React from "react";
import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import searchIcon from "../../Assets/Images/Search.svg";

export default function CheckboxList({
  formData,
  setFormData,
  setIsStepValidate,
  formValidation,
  setFormValidation,
}) {
  const platforms = [
    "All",
    "Browser extensions",
    "Elementor",
    "Figma",
    "Wordpress",
    "CRM",
    "Other",
    "VS Code",
    "Adobe Premiere",
    "Google Data Studio",
  ];
  const [checked, setChecked] = React.useState(formData.platforms);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isPlatformValid, setIsPlatformValid] = React.useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      let addedPlatforms = [
        ...formData.platforms, value];
        setFormData({ ...formData, platforms: addedPlatforms });
    } else {
      newChecked.splice(currentIndex, 1); 
      let removedPlatforms = formData.platforms.filter((category) => {
        return value !== category;
      });
        setFormData({ ...formData, platforms: removedPlatforms });
    }
    setChecked(newChecked);
  }
  const StepValidation = () => {
    if (isPlatformValid) {
      setIsStepValidate(true);
    } else {
      setIsStepValidate(false);
    }
  };
  useEffect(() => {
    if (formData.platforms.length < 1) {
      setIsPlatformValid(false);
      setFormValidation({
        ...formValidation,
        platforms: "Please select at least one platform",
      });
    } else {
      setIsPlatformValid(true);
      setFormValidation({
        ...formValidation,
        platforms: "",
      })}
    StepValidation()}, [formData.platforms, isPlatformValid]);

  return (
    <div className="categories-component">
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
        {platforms
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
