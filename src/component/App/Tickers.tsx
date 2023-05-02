import React from 'react'

export const Tickers = ({tickers}: any) => {

    console.log('tickers length:::', tickers.length)
    if (tickers.length === 0) return null

    const TickerRow = (ticker: any, index: number) => {

        return(
              <tr>
                  <td>{ticker.ticker}</td>
                  <td>{ticker.timestamp}</td>
                  <td>{ticker.open}</td>
                  <td>{ticker.close}</td>
                  <td>{ticker.high}</td>
                  <td>{ticker.low}</td>
                  <td>{ticker.volume}</td>
              </tr>
          )
    }

    const userTable = tickers.map((user: any, index: number) => TickerRow(user,index))

    return(
        <div className="container">
            <h2>Tickers</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>ticker</th>
                    <th>time</th>
                    <th>open</th>
                    <th>close</th>
                    <th>high</th>
                    <th>low</th>
                    <th>volume</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}