import { GET_CURRENCIES_LIST, SET_CURRENCIES_LIST } from "../constants";

export const getCurrenciesList = () => ({
    type: GET_CURRENCIES_LIST,
});

export const setCurrenciesList = (currencies) => ({
    type: SET_CURRENCIES_LIST,
    currencies
});