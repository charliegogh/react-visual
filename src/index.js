import { createRoot } from "react-dom/client";
import App from "./layout";
import "./styles/index.less";
// test0000000
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
