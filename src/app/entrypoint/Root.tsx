import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setupGlobalErrorHandlers } from "@/shared/lib/error/setupGlobalHandlers.ts";
import App from "./App.tsx";

import "reset-css";
import "../styles/fonts.css";
import "../styles/global.css";
import "../styles/theme.css";

setupGlobalErrorHandlers();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
