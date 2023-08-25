// import React, { useEffect, useState } from "react";
// import { Chart } from "chart.js";
// import { Line } from "react-chartjs-2";

// function LineGraph() {
//   const [graphData, setGraphData] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
//         );
//         const result = await response.json();
//         const casesData = result.cases;

//         const chartData = {
//           labels: Object.keys(casesData),
//           datasets: [
//             {
//               label: "Cases",
//               data: Object.values(casesData),
//             },
//           ],
//         };

//         setGraphData(chartData);
//         console.log("ChartData:", chartData); // Log the chart data here
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">Cases Fluctuations</h2>
//       <Line data={graphData} />
//     </div>
//   );
// }

// export default LineGraph;
