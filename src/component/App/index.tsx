import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickers from './AllTickers';
import Chart from './chart';


export default function App() {
    return (
        <Box className="container">
            <Routes>
                <Route index element={<div>Welcome!</div>} />
                <Route path="/tickers" element={<Tickers/>} />
                <Route path="/chart" element={<Chart />} />
            </Routes>
        </Box>
    )}