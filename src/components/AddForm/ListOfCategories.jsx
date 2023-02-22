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
  const categories = [
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
  ];
  const [checked, setChecked] = React.useState(formData.categories);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isCategoryValid, setIsCategoryValid] = React.useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      let addedCategories = [
        ...formData.categories, value];
        setFormData({ ...formData, categories: addedCategories });
    } else {
      newChecked.splice(currentIndex, 1); 
      let removedCategories = formData.categories.filter((category) => {
        return value !== category;
      });
        setFormData({ ...formData, categories: removedCategories });
    }
    setChecked(newChecked);
  }
  const StepValidation = () => {
    if (isCategoryValid) {
      setIsStepValidate(true);
    } else {
      setIsStepValidate(false);
    }
  };

  useEffect(() => {
    if (formData.categories.length < 1) {
      setIsCategoryValid(false);
      setFormValidation({
        ...formValidation,
        categories: "Please select at least one category",
      });
    } else {
      setIsCategoryValid(true);
      setFormValidation({
        ...formValidation,
        categories: "",
      })}
    StepValidation()}, [formData.categories, isCategoryValid]);

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
        {categories
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
