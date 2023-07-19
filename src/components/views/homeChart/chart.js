import ApexChart from "react-apexcharts";

export default function Chart() {
  const options = {
    chart: {
      height: 350,
      type: "candlestick",
    },
    title: {
      text: "Análise de Contas a Receber",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
        data: [
            {
              x: new Date(2021, 0, 1),
              y: [70, 95, 68, 90],
            },
            {
              x: new Date(2021, 0, 2),
              y: [80, 92, 75, 85],
            },
            {
              x: new Date(2021, 0, 3),
              y: [85, 88, 78, 82],
            },
            {
              x: new Date(2021, 0, 4),
              y: [75, 86, 70, 80],
            },
            {
              x: new Date(2021, 0, 5),
              y: [80, 90, 75, 88],
            },
            {
              x: new Date(2021, 0, 6),
              y: [82, 87, 80, 85],
            },
            {
              x: new Date(2021, 0, 7),
              y: [85, 90, 82, 88],
            },
            {
              x: new Date(2021, 0, 8),
              y: [88, 92, 85, 90],
            },
          ]
          
    },
  ];

  return (
    <ApexChart options={options} 
    series={series} 
    type="candlestick" 
    height={350} width={460} />
  );
}
