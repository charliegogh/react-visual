import Chart from "./components/echarts/chart";
import { useState, useEffect } from "react";
import Nav from "./layout/Nav";
import basename from "./router";
export default function App() {
  const [options, setOptions] = useState({});
  useEffect(() => {
    // 使用异步请求
    // const test = async () => {
    //   const rs = await axios(
    //     "https://cycx.cnki.net/apinew/houtai/regionbase/list?level=2"
    //   );
    // };
    // test();
    // 修改options
    // setOptions({...options})
  }, []);
  return (
    <div className="App">
      <Nav />
      <Chart options={options} />
    </div>
  );
}
