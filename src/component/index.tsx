import Content from './App';
import Header from "./Header";
import Footer from "./Footer";
import Box from '@mui/material/Box';
import ErrorBoundary from './errorBoundary';

export default function App() {
    return (
        <Box>
            <Header />
            <ErrorBoundary>
                <Content />
            </ErrorBoundary>
            <Footer />
        </Box>
    )}