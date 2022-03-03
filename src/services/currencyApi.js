import { currencyKey } from "../apiKey";

const BASE_URL = 'https://currency-converter-pro1.p.rapidapi.com'

const currencyApiHeaders = {
  'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com',
  'x-rapidapi-key': currencyKey
}

export const getLatestCurrency = async ({ fromCurrency, toCurrency }) => (
  await fetch(`${BASE_URL}/convert?from=${fromCurrency}&to=${toCurrency}&amount=1`, { headers: currencyApiHeaders }).then((res => res.json())).catch(console.log(`${BASE_URL}/convert?from=${fromCurrency}&to=${toCurrency}&amount=1`))
)
