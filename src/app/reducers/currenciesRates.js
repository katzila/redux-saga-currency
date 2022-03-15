const GET_RATES = 'GET_RATES';
const SET_RATES = 'SET_RATES';

export const getRates = (fromCurrency, toCurrencies) => ({
    type: GET_RATES,
    fromCurrency,
    toCurrencies
});

export const setRates = (rates, baseCurrency) => ({
    type: SET_RATES,
    rates,
    baseCurrency
});

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