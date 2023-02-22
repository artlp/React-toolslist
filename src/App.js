import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/main";
import Adding from "./Pages/adding";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Library from "./Pages/library";
import ToolsDetails from "./components/ToolsDisplay/ToolsDetails.jsx"
import CollectionsDetails from "./components/Collections/CollectionsDetails.jsx"

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
    </Routes>
  );
}

export default App;
