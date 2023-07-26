import ApexChart from "react-apexcharts";

export default function Chartgeral() {
  const options = {
    chart: {
      height: 350,
      type: "line",
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
              y: [70],
            },
            {
              x: new Date(2021, 0, 2),
              y: [80],
            },
            {
              x: new Date(2021, 0, 3),
              y: [85],
            },
            {
              x: new Date(2021, 0, 4),
              y: [75],
            },
            {
              x: new Date(2021, 0, 5),
              y: [80],
            },
            {
              x: new Date(2021, 0, 6),
              y: [82],
            },
            {
              x: new Date(2021, 0, 7),
              y: [85],
            },
            {
              x: new Date(2021, 0, 8),
              y: [92],
            },
          ]
          
    },
  ];

  return (
    <div className="card p-5">
    <ApexChart options={options} 
    series={series} 
    type="line" 
    height={350} />


    </div>

  );
}
