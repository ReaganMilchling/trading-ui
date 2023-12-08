import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickers from './tickers/AllTickers';
import Chart from './chart/chart';
import Splash from './splash'
import Taxes from './taxes'
import Search from './search'


export default function App() {
    return (
        <Box className="container">
            <Routes>
                <Route index element={<Splash/>} />
                <Route path="/tickers" element={<Tickers/>} />
                <Route path="/charts" element={<Chart/>} />
                <Route path="/taxes" element={<Taxes/>} />
                <Route path="/search" element={<Search/>}/>
            </Routes>
        </Box>
    )}