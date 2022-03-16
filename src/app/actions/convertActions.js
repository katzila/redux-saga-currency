import { GET_CONVERT, SET_CONVERT } from "../constants";

export const getConvert = (convert) => ({
    type: GET_CONVERT,
    convert
});

export const setConvert = (convert) => ({
    type: SET_CONVERT,
    convert
});