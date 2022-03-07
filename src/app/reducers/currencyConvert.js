const GET_CONVERT = 'GET_CONVERT';
const SET_CONVERT = 'SET_CONVERT';

export const getConvert = (convert) => ({
    type: GET_CONVERT,
    convert
});

export const setConvert = (convert) => ({
    type: SET_CONVERT,
    convert
});

const initialState = {
    currency: undefined,
}

export const convertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONVERT:
            const { convert } = action;
            return {
                ...state,
                convert
            }
        default: return state;
    }
}