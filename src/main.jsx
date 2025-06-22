// Entry point for React application
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./counter";


// Renders the CardHolder component into the DOM
createRoot(document.getElementById("root")).render(
  <>
    <Counter />
  </>
);