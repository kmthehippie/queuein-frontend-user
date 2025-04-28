import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./theme/CustomTheme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
