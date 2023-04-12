import React from "react";
import ReactDOM from "react-dom/client";
import { ShortcutsProvider } from "keyboard-shortcuts";

import "./index.scss";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShortcutsProvider>
      <App />
    </ShortcutsProvider>
  </React.StrictMode>
);
