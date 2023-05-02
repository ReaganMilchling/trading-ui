export default interface Ticker {
    ticker: string,
    timestamp: string,
    dataGranularity: string,
    open: number,
    close: number,
    high: number,
    low: number,
    volume: number
}