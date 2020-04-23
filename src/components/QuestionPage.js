import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import QuestionVote from "../components/QuestionVote";
import QuestionSummary from "../components/QuestionSummary";

class QuestionPage extends React.Component {
    render = () => {
        const { author, question, answered } = this.props
        if (question === null) {
            return (<div>
                <h1>404!</h1>
                <h2>It looks like something went wrong. This question doesn't exits.</h2>
            </div>);
        }
        return (
            <div className="question-page">
                {!answered && <QuestionVote author={author} question={question} />}
                {answered && <QuestionSummary author={author} question={question} />}
            </div>
        );
    }
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
    const questionId = props.match.params.id;
    const question = questions[questionId];
    return {
        question: question ? question : null,
        author: question ? users[question.author] : null,
        answered: question ? Object.keys(users[authedUser].answers).indexOf(questionId) >= 0 : false,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));