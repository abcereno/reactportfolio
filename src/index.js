import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css"
import axios from 'axios';
import { EcommerceProvider } from "./Common/EcommerceContext/EcommerceContext";

// axios.defaults.baseURL = "https://creditrepair-api.online/api"
// axios.defaults.baseURL = "http://127.0.0.1:8000/api"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EcommerceProvider>
      <App />
    </EcommerceProvider>
  </React.StrictMode>
);
reportWebVitals();
