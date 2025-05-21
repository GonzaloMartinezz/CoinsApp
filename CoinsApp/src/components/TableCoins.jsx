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
                <th>{coin.rank}</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            ))}
        </tbody>  
    </table>
    </>
  )
}

export default TableCoins