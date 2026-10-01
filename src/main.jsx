import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles.css";
const root=document.getElementById("root");
createRoot(root).render(<ErrorBoundary><App/></ErrorBoundary>);
