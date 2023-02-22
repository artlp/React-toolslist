import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchComponents from "./SearchComponents";
import searchCloseIcon from "../../Assets/Images/search-close.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  setShowSearchPage,
  showSearchPage,
  searchCategories,
  searchPlatforms,
  setSearchCategories,
  setSearchPlatforms,
  searchPrice,
  setSearchPrice,
}) {
  const [value, setValue] = React.useState(0);
  const handleClick = () => {
    setShowSearchPage(!showSearchPage);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePriceChange = (event) => {
    setSearchPrice(event.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box className="search-header">
        <div className="search-close-icon">
          <img
            src={searchCloseIcon}
            alt="Close search window"
            onClick={handleClick}
          />
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="search tabs"
          textColor="inherit"
          indicatorColor="none"
        >
          <Tab label="Categories" {...a11yProps(0)} className="search-tab" />
          <Tab label="Platforms" {...a11yProps(1)} className="search-tab" />
        </Tabs>
      </Box>
      <div className="tab-panels">
        <TabPanel value={value} index={0}>
          <SearchComponents
            index={0}
            searchCategories={searchCategories}
            searchPlatforms={searchPlatforms}
            setSearchCategories={setSearchCategories}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchComponents
            index={1}
            searchCategories={searchCategories}
            searchPlatforms={searchPlatforms}
            setSearchPlatforms={setSearchPlatforms}
          />
        </TabPanel>
      </div>
      <div className="search-price">
        <label>Price</label>
        <select
          name="price-model"
          id="price-model"
          onChange={handlePriceChange}
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
          <option value="trial">Free Trial</option>
          {/* <option value="any">Any</option> //TODO probably need all price model filter? */}
        </select>
      </div>
    </Box>
  );
}
