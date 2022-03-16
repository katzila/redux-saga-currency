import { SET_CURRENT_USER, SET_USER_CURRENCY, LOGOUT_USER } from "../constants";

const initialState = {
    username: '',
    baseCurrency: [],
}

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            const { username } = action;
            return { ...state, username }
        case SET_USER_CURRENCY:
            console.log(action);
            const { baseCurrency } = action;
            return { ...state, baseCurrency }
        case LOGOUT_USER:
            return { ...state, username: '', baseCurrency: [] }
        default: return state;
    }
}