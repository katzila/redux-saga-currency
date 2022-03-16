import { SET_RATES } from "../constants";

const initialState = {
    baseCurrency: [],
    rates: [],
}

export const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATES:
            const { rates, baseCurrency } = action;
            return {
                ...state,
                baseCurrency,
                rates: Object.values(rates).map((rate, index) => (
                    {
                        key: index,
                        currency: `${Object.keys(rates)[index]}/${action.cur}`,
                        rate: 1 / rate
                    })
                )
            }
        default: return state;
    }
}