import { createRoot } from "react-dom/client";
import "../src/styles.css";
import { GuideApp } from "../src/app/GuideApp";

const root = document.getElementById("root");
if (root) createRoot(root).render(<GuideApp />);
