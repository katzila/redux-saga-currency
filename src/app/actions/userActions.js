import { SET_USER_CURRENCY, SET_CURRENT_USER, LOGOUT_USER, ADD_USER } from "../constants"

export const setUserCurrency = (baseCurrency, username) => ({
    type: SET_USER_CURRENCY,
    baseCurrency,
    username,
})

export const setCurrentUser = (username) => ({
    type: SET_CURRENT_USER,
    username,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const addUser = (user) => ({
    type: ADD_USER,
    user,
});