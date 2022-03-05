const GET_CURRENCIES_LIST = 'GET_CURRENCIES_LIST';
const SET_CURRENCIES_LIST = 'SET_CURRENCIES_LIST';

export const getCurrenciesList = () => ({
    type: GET_CURRENCIES_LIST,
});

export const setCurrenciesList = (currencies) => ({
    type: SET_CURRENCIES_LIST,
    currencies
});

const initialState = {
    currencies: {},
}

export const currenciesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCIES_LIST:
            const { currencies } = action;
            return { ...state, currencies }
        default: return state;
    }
}