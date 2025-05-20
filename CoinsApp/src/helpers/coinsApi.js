const url = "rest.coincap.io/v3/assets?apiKey=YourApiKey"

let limite = 10;

const getCoins = async () => {
    const coins = await fetch(`${url}?limit=${limite}`);
    const data = await coins.json();
    return data
}