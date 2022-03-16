import { SET_CONVERT } from "../constants";

const initialState = {
    convert: {},
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