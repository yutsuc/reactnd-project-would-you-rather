import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar"
import authedUser from "../reducers/authedUser";
import users from "../reducers/users";
import questions from "../reducers/questions";

export default combineReducers({ authedUser, users, questions, loadingBar: loadingBarReducer })