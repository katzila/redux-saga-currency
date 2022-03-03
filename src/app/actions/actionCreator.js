import {
    SET_LATEST_CURRENCY,
    GET_LATEST_CURRENCY,
} from "../constants";

export const getLatestCurrency = () => ({
    type: GET_LATEST_CURRENCY,
});

export const setLatestCurrency = (payload) => ({
    type: SET_LATEST_CURRENCY,
    payload,
});