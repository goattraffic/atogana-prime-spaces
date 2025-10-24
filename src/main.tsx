import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initUTMTracking } from "./utils/utm-tracker";

initUTMTracking();

createRoot(document.getElementById("root")!).render(<App />);
