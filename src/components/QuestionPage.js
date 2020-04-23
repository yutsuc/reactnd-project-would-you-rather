import React from "react";
import { connect } from "react-redux";
import QuestionVote from "../components/QuestionVote";
import QuestionSummary from "../components/QuestionSummary";

class QuestionPage extends React.Component {
    render = () => {
        const { author, question, answered } = this.props
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

export default connect(mapStateToProps)(QuestionPage);