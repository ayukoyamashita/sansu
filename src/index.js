import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "destyle.css/destyle.css";
import "./styles.css";

import Sansu from "./Sansu";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Sansu />
  </StrictMode>
);