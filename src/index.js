import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorkerRegistration";
import { LoginProvider } from "./Context/login";
import { HeaderProvider } from "./Context/headerState";
import { ToolsListProvider } from "./Context/toolsListContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToolsListProvider>
      <HeaderProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </HeaderProvider>
    </ToolsListProvider>
  </BrowserRouter>
);

serviceWorker.register();
