const GET_CURRENCY = 'GET_CURRENCY';
const SET_CURRENCY = 'SET_CURRENCY';

export const getCurrency = () => ({
    type: GET_CURRENCY,
});

export const setCurrency = (currency) => ({
    type: SET_CURRENCY,
    currency
});

const initialState = {
    currency: undefined,
}

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            const { currency } = action;
            return { ...state, currency }
        default: return state;
    }
}