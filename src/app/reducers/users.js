import { ADD_USER, SET_USER_CURRENCY } from "../constants";


const initialState = {
    users: [
        {
            username: 'user0',
            password: 'pas0',
            baseCurrency: []
        },
        {
            username: 'admin',
            password: 'qwerty',
            baseCurrency: 'RUB'
        }
    ],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const { user } = action;
            return { ...state, users: state.users.concat(user) }
        case SET_USER_CURRENCY:
            const { baseCurrency, username } = action;
            return {
                ...state, users: state.users.map((user) => {
                    if (user.username === username) return { ...user, baseCurrency }
                    return user;
                })
            }
        default: return state;
    }
}