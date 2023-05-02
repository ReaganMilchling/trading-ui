import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';
import Ticker from './Ticker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  const [allData, setAllData] = useState<Ticker[]>([]);
  const [chartLabels, setChartLabels] = useState<String[]>([]);
  const [chartData, setChartData] = useState<String[]>([]);
  const [chartDataHigh, setChartDataHigh] = useState<String[]>([]);
  const [chartDataLow, setChartDataLow] = useState<String[]>([]);

  useEffect(() => {
    fetch('/ticker/SPY/from/2020-01-01')
      .then(response => response.json())
      .then(data => {
        setAllData(data);
        setChartData(data.map((res: Ticker) => { return res.close}));
        setChartDataHigh(data.map((res: Ticker) => { return res.high}));
        setChartDataLow(data.map((res: Ticker) => { return res.low}));
        setChartLabels(data.map((res: Ticker) => { return res.timestamp.slice(0,10)}));
      }
    )
  }, []);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'SPY',
      },
    },
    
  };

  const data = {
    labels: chartLabels,
    datasets: [ 
      {
        data: chartData,
        label: "Close",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: chartDataHigh,
        label: "High",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: chartDataLow,
        label: "Low",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }

  return (
    <Box>
      <Line options={options} data={data} />
    </Box>
  );
}
