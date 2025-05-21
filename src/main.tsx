import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PortfolioConfigProvider } from "./context/PortfolioConfigContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioConfigProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PortfolioConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
