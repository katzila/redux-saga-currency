const SET_CURRENT_USER = 'SET_CURRENT_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const SET_USER_CURRENCY = 'SET_USER_CURRENCY'

export const setCurrentUser = (username) => ({
    type: SET_CURRENT_USER,
    username,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const setUserCurrency = (baseCurrency) => ({
    type: SET_USER_CURRENCY,
    baseCurrency
})

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
            const { baseCurrency } = action;
            return { ...state, baseCurrency }
        case LOGOUT_USER:
            return { ...state, username: '' }
        default: return state;
    }
}