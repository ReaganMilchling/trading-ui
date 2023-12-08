import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/ticker/default')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Box className="container">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{border: 2 }}>
                <TableCell>ticker</TableCell>
                <TableCell align="right">time</TableCell>
                <TableCell align="right">open</TableCell>
                <TableCell align="right">close</TableCell>
                <TableCell align="right">high</TableCell>
                <TableCell align="right">low</TableCell>
                <TableCell align="right">volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((ticker: any, index: number) => (
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{ticker.ticker}</TableCell>
                  <TableCell align="right">{ticker.timestamp}</TableCell>
                  <TableCell align="right">{ticker.open}</TableCell>
                  <TableCell align="right">{ticker.close}</TableCell>
                  <TableCell align="right">{ticker.high}</TableCell>
                  <TableCell align="right">{ticker.low}</TableCell>
                  <TableCell align="right">{ticker.volume}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>      
    </div>
  );
}

export default App;
