import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "./authedUser";

const authedUser = "sarahedo";

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getQuestions(), _getUsers()])
            .then(([questions, users]) => {
                dispatch(setAuthedUser(authedUser));
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
            });
    };
}