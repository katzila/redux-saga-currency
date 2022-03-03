import { SET_LATEST_CURRENCY } from "../constants";

const initialState = {
    latestNews: [],
}

const currency = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LATEST_CURRENCY:
            return {
                ...state,
                latestNews: [...state.latestNews, ...payload],
            }
        default: return state;
    }
}

export default currency;