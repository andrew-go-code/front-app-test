import {OPEN_GROUP_DIALOG, CLOSE_GROUP_DIALOG, GET_GROUPS} from "./groupActionTypes";
import axios from "axios";
import {DATA_SERVICE_URL} from "../util/dataUtil";

const endpoint = DATA_SERVICE_URL + "/contractors"

const openGroupDialog = () => ({
    type: OPEN_GROUP_DIALOG,
});

export const openGroupDialogAction = () => {
    return openGroupDialog()
}

const closeGroupDialog = () => ({
    type: CLOSE_GROUP_DIALOG,
});

export const closeGroupDialogAction = () => {
    return closeGroupDialog()
}

export const getGroupsAction = (userId) => {
    return dispatch => {
        axios
            .get(endpoint)
            .then(res => {
                dispatch(getGroups(res));
            })
    };
};

const getGroups = (res) => ({
    type: GET_GROUPS,
    res: res
})