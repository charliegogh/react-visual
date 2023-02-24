import { Route, Switch, Routes, useRoutes, Navigate } from "react-router-dom";
import { lazy } from "react";
const fs = require("fs");
const path = require("path");
let model = {};
fs.readdirSync("/src/views").forEach(async (file) => {
  let name = path.basename(file, ".js");
  // let filePath = "/src/views/" + file;
  model[name] = name;
});
const lazyLoad = (moduleName) => {
  const Module = lazy(() => import(`../views/${moduleName}`));
  return <Module />;
};
export const routes = Object.keys(model).map((i) => {
  return {
    path: "/" + i,
    element: lazyLoad(i)
  };
});
const Router = () => {
  return useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate to="/home" />
    },
    ...routes
  ]);
};
export default Router;
