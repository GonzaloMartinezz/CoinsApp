import React from 'react'

const TableCoins = ({coins}) => {
  return (
    <>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price Usd</th>
                <th>Change 24Hr</th>
            </tr>
        </thead>
        <tbody>
            {coins.map((coin) => (
                 <tr key={coin.id}>
                <td>{coin.rank}</td>
                <td>
                    <img src="https://assets.coincap.io/assets/icons/btc2@2x.png" alt="" />
                </td>
                <td>{coin.name}</td>
                <td>{coin.priceUsd}</td>
                <td>{coin.changePercent24Hr}</td>
            
            </tr>
            ))}
        </tbody>  
    </table>
    </>
  )
}

export default TableCoins