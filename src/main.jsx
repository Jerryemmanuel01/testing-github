import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import  App  from "./App.jsx";

// import NameOfUse from "location"
// how we render a component in react: <ComponentName />

createRoot(document.getElementById("root")).render(
  <App />
);
