import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { AutoNavigateProvider } from "./Common/Contexts/Contexts";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AutoNavigateProvider>
      <App />
    </AutoNavigateProvider>
  </React.StrictMode>
);
reportWebVitals();
