import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

function ChartTest() {
  console.log("AB");
  return <ReactApexChart options={options} series={series} />;
}

export default ChartTest;
