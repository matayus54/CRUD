import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
// import { UsersProvider } from "./Projects/Users/Context/UsersContext.js";

// const container = document.getElementById("root");
// let root = ReactDOMClient.createRoot(container);
// root.render(<App />);

let root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>
  //     <UsersProvider>
  <App />
  //     </UsersProvider>
  //   </React.StrictMode>
);
