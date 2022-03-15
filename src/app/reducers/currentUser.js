const SET_CURRENT_USER = 'SET_CURRENT_USER';
const LOGOUT_USER = 'LOGOUT_USER';


export const setCurrentUser = (username) => ({
    type: SET_CURRENT_USER,
    username,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

const initialState = {
    username: ''
}

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            const { username } = action;
            return { ...state, username }
        case LOGOUT_USER:
            return { ...state, username: '' }
        default: return state;
    }
}