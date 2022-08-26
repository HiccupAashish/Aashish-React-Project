import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import { AppContextProvider } from "./components/Contexts/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
