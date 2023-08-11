import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context/Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);
