import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ShortcutsProvider } from "./context/ShortcutsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShortcutsProvider>
      <App />
    </ShortcutsProvider>
  </React.StrictMode>
);
