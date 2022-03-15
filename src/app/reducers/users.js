const ADD_USER = 'ADD_USER';
const SET_USERS_USER_CURRENCY = 'SET_USERS_USER_CURRENCY'

export const setUsers = (user) => ({
    type: ADD_USER,
    user,
});

export const setUsersUserCurrency = (baseCurrency, username) => ({
    type: SET_USERS_USER_CURRENCY,
    baseCurrency,
    username,
})

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
        case SET_USERS_USER_CURRENCY:
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