import { SET_CURRENT_USER, SET_USER_CURRENCY, LOGOUT_USER } from "../constants";

const initialState = {
    username: '',
    baseCurrency: [],
}

export const currentUserReducer = (state = initialState, { type, baseCurrency, username }) => {
    switch (type) {
        case SET_CURRENT_USER:
            return { ...state, username, baseCurrency }
        case SET_USER_CURRENCY:
            return { ...state, baseCurrency }
        case LOGOUT_USER:
            return { ...state, username: '', baseCurrency: [] }
        default: return state;
    }
}