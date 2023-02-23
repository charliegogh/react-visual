import Chart from "./components/echarts/chart";
import { useState, useEffect } from "react";
import axios from "axios";
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
  }, []);
  return (
    <div className="App">
      11
      <Chart options={options} />
    </div>
  );
}
