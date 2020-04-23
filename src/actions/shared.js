import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const authedUser = "sarahedo";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([_getQuestions(), _getUsers()])
            .then(([questions, users]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(authedUser));
            }).then( () => {
                dispatch(hideLoading());
            });
    };
}