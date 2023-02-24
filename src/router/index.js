import { Route, Switch, Routes, useRoutes } from "react-router-dom";
import Home from "../views/home";
const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Home />
    }
  ];
  return useRoutes(routes);
};
export default Router;

// const fs = require("fs");
// const path = require("path");
// let model = {};
// fs.readdirSync("/src/views").forEach(async (file) => {
//   let name = path.basename(file, ".js");
//   let filePath = "/src/views/" + file;
//   const _file = require(filePath);
//   model[name] = _file;
// });
