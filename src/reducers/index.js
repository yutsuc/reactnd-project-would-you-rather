import { combineReducers } from "redux";
import users from "../reducers/users";
import questions from "../reducers/questions"

export default combineReducers({ users, questions })