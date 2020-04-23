import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA"
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function AddQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const authedUser = getState().authedUser;
        dispatch(showLoading());
        return _saveQuestion({ optionOneText, optionTwoText, author: authedUser })
            .then(question => {
                dispatch(AddQuestion(question));
            }).then( () => {
                dispatch(hideLoading());
            });
    };
}

function SaveQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    };
}

export function handleSaveQuestionAnswer({ qid, answer }) {
    return (dispatch, getState) => {
        const authedUser = getState().authedUser;
        const info = { authedUser, qid, answer };
        dispatch(showLoading());
        return _saveQuestionAnswer(info)
            .catch(e => {
                console.warn("Error in handleSaveQuestionAnswer: ", e);
                alert("There was an error saving the answer. Try again.");
            }).then(() => {
                dispatch(SaveQuestionAnswer(info))
            }).then( () => {
                dispatch(hideLoading());
            });
    }
}