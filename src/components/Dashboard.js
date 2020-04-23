import React from "react";
import { connect } from "react-redux"
import { Paper, Tabs, Tab } from "@material-ui/core";
import Question from "../components/Question";

class Dashboard extends React.Component {
    state = {
        tabIndex: 0
    }

    handleChangeView = (event, value) => {
        this.setState({
            tabIndex: value,
        })
    }
    render = () => {
        const { answeredQuestionIds, unansweredQuestionIds } = this.props;
        const { tabIndex } = this.state;
        return (
            <div>
                <Paper className="dashboard">
                    <Tabs value={tabIndex} centered onChange={this.handleChangeView}>
                        <Tab label="Unanswered" />
                        <Tab label="Answered" />
                    </Tabs>
                    <div hidden={tabIndex !== 0}>
                        {unansweredQuestionIds.map(qid => (
                            <Question key={qid} id={qid} />
                        ))}
                    </div>
                    <div hidden={tabIndex !== 1}>
                        {answeredQuestionIds.map(qid => (
                            <Question key={qid} id={qid} />
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
    const user = users[authedUser];
    return {
        answeredQuestionIds: user ? Object.keys(user.answers) : [],
        unansweredQuestionIds: user ? Object.keys(questions).filter(qid => Object.keys(user.answers).indexOf(qid) < 0) : [],
    };
}

export default connect(mapStateToProps)(Dashboard);