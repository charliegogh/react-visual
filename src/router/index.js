const fs = require("fs");
const path = require("path");
const basename = path.basename("/src/views");
let model = {};
fs.readdirSync("/src/views").forEach(async (file) => {
  let name = path.basename(file, ".js");
  let filePath = "/src/views/" + file;
  const _file = await import(filePath);
  model[name] = _file.default;
});
// import { Route, Switch } from "react-router-dom";
// const Router = () => (
//   <Switch>
//     <Route path="/" exact />
//   </Switch>
// );
export default basename;
