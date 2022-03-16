import { SET_CURRENCIES_LIST } from "../constants";

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