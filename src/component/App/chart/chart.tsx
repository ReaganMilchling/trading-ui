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
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Ticker from '../Ticker';

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
  const [tickers, setTickers] = useState<string[]>([]);
  const [selectedTicker, setSelectedTicker] = useState<string>("SPY");
  const [selectedDate, setSelectedDate] = useState<string>("2023-07-01");

  const [chartLabels, setChartLabels] = useState<String[]>([]);
  const [chartData, setChartData] = useState<String[]>([]);
  const [chartDataHigh, setChartDataHigh] = useState<String[]>([]);
  const [chartDataLow, setChartDataLow] = useState<String[]>([]);

  const getValues = () => {
    fetch('/time-series/' + selectedTicker + '/from/' + selectedDate)
      .then(response => response.json())
      .then(data => {
        setChartData(data.close);
        setChartDataHigh(data.high);
        setChartDataLow(data.low);
        setChartLabels(data.timestamp);
      }
    )
  }

  useEffect(() => {
    fetch('/ticker/list')
      .then(data => data.json())
      .then(data => {
          setTickers(data)
    });
    getValues();
  }, []);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: selectedTicker + " since " + selectedDate,
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

  const handleTickerChange = (event: SelectChangeEvent) => {
    console.log(selectedTicker);
    setSelectedTicker(event.target.value as string);
    console.log(selectedTicker);
  };

  return (
    <Box>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedTicker}
        label="Ticker"
        onChange={handleTickerChange}
      >
        {tickers.map((ticker: string) => {
          return <MenuItem value={ticker}>{ticker}</MenuItem>
        })}
      </Select>
      <Box>
        <Line options={options} data={data} />
      </Box>
    </Box>
  );
}
