import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

globalThis.axios = axios.create({
  baseURL: "http://10.234.76.149:8000/api/v1",
});

globalThis.axios.interceptors.request.use((req) => {
  req.headers = { ...req.headers, Authentication: localStorage["wnc_token"] };
  return req;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
