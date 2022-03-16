import { SET_RATES, GET_RATES } from "../constants";

export const getRates = (fromCurrency, toCurrencies) => ({
    type: GET_RATES,
    fromCurrency,
    toCurrencies
});

export const setRates = (rates, baseCurrency) => ({
    type: SET_RATES,
    rates,
    baseCurrency
});
