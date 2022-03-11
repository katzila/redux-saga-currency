
const BASE_URL = 'https://currency-converter-pro1.p.rapidapi.com'

const currencyApiHeaders = {
  'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_CURRENCY_KEY
}

export const getCurrencyRates = async ({ fromCurrency, toCurrencies }) => (
  await fetch(`${BASE_URL}/latest-rates?base=${fromCurrency}&currencies=${toCurrencies}`, { headers: currencyApiHeaders }).then((res => res.json()))
)


export const getCurrenciesList = async () => (
  await fetch(`${BASE_URL}/currencies`, { headers: currencyApiHeaders }).then((res => res.json()))
)

export const getConvertion = async ({ fromCurrency, toCurrency, amount }) => {
  if (fromCurrency === toCurrency) return { result: amount }
  return await fetch(`${BASE_URL}/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`, { headers: currencyApiHeaders }).then((res => res.json()))
}
