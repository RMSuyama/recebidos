import React, { useEffect, useState } from 'react';
import ApexChart from "react-apexcharts";
import { firestore } from '../../../config/firebase';

const EvoluctionChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Saldo Total",
      data: []
    }
  ]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const entradasRef = firestore.collection('ContasAReceber');
        const entradasSnapshot = await entradasRef.get();
        const entradas = entradasSnapshot.docs.map((doc) => doc.data());

        const saidasRef = firestore.collection('ContasAPagar');
        const saidasSnapshot = await saidasRef.get();
        const saidas = saidasSnapshot.docs.map((doc) => doc.data());

        const groupByDate = (arr, isEntrada) => {
          return arr.reduce((acc, curr) => {
            const date = new Date(curr.dataPagamento).setHours(0,0,0,0);
            if (!acc[date]) {
              acc[date] = 0;
            }
            acc[date] += isEntrada ? parseFloat(curr.valor) : -parseFloat(curr.valor);
            return acc;
          }, {});
        }

        const entradasByDate = groupByDate(entradas, true);
        const saidasByDate = groupByDate(saidas, false);
        
        // Merge both income and outcome entries by date and calculate total balance
        const totalByDate = {...entradasByDate, ...saidasByDate};
        const sortedDates = Object.keys(totalByDate).sort();
        sortedDates.forEach((date, index) => {
          if (index > 0) {
            totalByDate[date] += totalByDate[sortedDates[index - 1]];
          }
        });

        setSeries([
          {
            name: "Saldo Total",
            data: Object.entries(totalByDate)
              .map(([date, value]) => ({ x: new Date(parseInt(date)), y: value }))
              .sort((a, b) => a.x - b.x)
          }
        ]);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, []);

  const options = {
    chart: {
      height: 350,
      type: "line",
    },

    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: function(value) {
          return `R$ ${value.toFixed(2)}`;
        }
      },
      tooltip: {
        enabled: true,
        formatter: function(value) {
          return `R$ ${value.toFixed(2)}`;
        }
      },
    },
    colors: ['#008FFB'],
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      x: {
        format: 'dd/MM/yyyy'
      },
    },
  };

  return (
    <div className="card p-5">
      <div className="card-body">
        <div className='text-center' style={{fontWeight:'bold'}}>Evolução do Saldo Total</div>
        <ApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
}

export default EvoluctionChart;
