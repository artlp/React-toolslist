import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="share-role">
      <FormControl sx={{ m: 0, minWidth: 80 }}>
        <Select
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 500,
          }}
          value={age}
          onChange={handleChange}
          displayEmpty
          disableUnderline
          variant="standard"
          inputProps={{ "aria-label": "Without label" }}
          //TODO autowidth not working
        >
          <MenuItem
            value="owner"
            sx={{ fontFamily: "Poppins, sans-serif", color: "#000" }}
          >
            Owner
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif", color: "#000" }}
            value={"editor"}
          >
            Editor
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif", color: "#000" }}
            value={"viewer"}
          >
            Viewer
          </MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}
