import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns'; // Import the adapter

const CryptoChart = () => {
  const bitcoinData = [
    { date: new Date(2023, 0, 1), price: 9000 },
    { date: new Date(2023, 1, 1), price: 9200 },
    { date: new Date(2023, 2, 1), price: 9400 },
    { date: new Date(2023, 3, 1), price: 9300 },
    { date: new Date(2023, 4, 1), price: 9500 },
    { date: new Date(2023, 5, 1), price: 9600 },
    { date: new Date(2023, 6, 1), price: 9800 },
  ];

  const chartData = {
    labels: bitcoinData.map(data => data.date),
    datasets: [
      {
        label: 'Bitcoin Price',
        data: bitcoinData.map(data => ({ x: data.date, y: data.price })),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month'
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price in USD'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false
      }
    }
  };

  return (
    <div style={{ width: '800px', margin: '0 auto' }}>
      <h2>Bitcoin Price Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CryptoChart;
