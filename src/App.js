import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/main";
import Adding from "./Pages/adding";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Library from "./Pages/library";
import ToolsDetails from "./components/ToolsDisplay/ToolsDetails.jsx"
import CollectionsDetails from "./components/Collections/CollectionsDetails.jsx"
import ProfilePage from "./Pages/profile"
import ProfilePageEdit from "./Pages/profileEdit"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}/>
      <Route path="/adding-tool" element={<Adding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/library" element={<Library />} />
      <Route path="/tools/:id" element={<ToolsDetails />} />
      <Route path="/collections/:id" element={<CollectionsDetails />} />
      <Route path="/profile/" element={<ProfilePage />} />
      <Route path="/profile/edit/" element={<ProfilePageEdit />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
