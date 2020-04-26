import {OPEN_GROUP_DIALOG, CLOSE_GROUP_DIALOG, GET_GROUPS} from "./groupActionTypes";

const defaultState = {
    groupDialogOpen: false,
    items: []
}

export const groupReducer = (state = defaultState, action) => {
    console.log("reducer action", action)
    switch (action.type) {
        case GET_GROUPS:
            return {
                ...state,
                items: action.res.data
            }
        case OPEN_GROUP_DIALOG:
            return {
                ...state,
                groupDialogOpen: true
            }
        case CLOSE_GROUP_DIALOG:
            return {
                ...state,
                groupDialogOpen: false
            }
        default:
            return state
    }
}