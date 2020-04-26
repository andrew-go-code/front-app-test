import {GET_ITEMS, SET_SEARCH} from "./mainActionTypes";

const defaultState = {
    counter: 0,
    items: [],
    search: "0"
}

export const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.res.data
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.search
            }
        default:
            return state
    }
}