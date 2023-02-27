import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import Home from "./views/home";
root.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
);
