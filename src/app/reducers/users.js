const SET_USERS = 'SET_USERS';


export const setUsers = (user) => ({
    type: SET_USERS,
    user,
});

const initialState = {
    users: [
        {
            username: 'user0',
            password: 'pas0',
        },
        {
            username: 'admin',
            password: 'qwerty',
        }
    ],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            const { user } = action;
            console.log(user);
            console.log(state);
            return { ...state, users: state.users.concat(user) }
        default: return state;
    }
}