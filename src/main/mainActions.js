import axios from 'axios';
import {GET_ITEMS, SET_SEARCH} from "./mainActionTypes";
import {DATA_SERVICE_URL} from "../util/dataUtil";

const endpoint = DATA_SERVICE_URL + "/contracts"

export const getAllItemsAction = () => {
    return dispatch => {
        axios
            .get(endpoint)
            .then(res => {
                dispatch(getItems(res));
            })
    };
};

export const findItemsAction = (id) => {
    return dispatch => {
        axios
            .get(endpoint + "/" + id)
            .then(res => {
                dispatch(getItems(res));
            })
    };
};

const getItems = res => ({
    type: GET_ITEMS,
    res: res
});

export const setSearchAction = (search) => {
    return setSearch(search)
}

const setSearch = (search) => ({
    type: SET_SEARCH,
    search: search
})



//
//
// export const addTodo = ({ title, userId }) => {
//     return dispatch => {
//         // dispatch(addTodoStarted());
//
//         axios
//             .get(`http://localhost:8080/contracts`, {
//                 // title,
//                 // userId,
//                 // completed: false
//             })
//             .then(res => {
//                 dispatch(addTodoSuccess(res.data));
//             })
//             .catch(err => {
//                 dispatch(addTodoFailure(err.message));
//             });
//     };
// };
//
// const addTodoSuccess = todo => ({
//     type: "ADD_TODO_SUCCESS",
//     payload: {
//         ...todo
//     }
// });
//
// // const addTodoStarted = () => ({
// //     type: ADD_TODO_STARTED
// // });
//
// const addTodoFailure = error => ({
//     type: "ADD_TODO_FAILURE",
//     payload: {
//         error
//     }
// });