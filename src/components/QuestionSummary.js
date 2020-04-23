import React from "react";
import { Avatar, Badge, Card, CardContent, Divider, LinearProgress, Paper } from "@material-ui/core";
import { connect } from "react-redux";

class QuestioSummary extends React.Component {
    render = () => {
        const { author, question } = this.props;
        if (question === null) {
            return <p>This Tweet doesn't exist</p>
        }
        const {optionOne, optionTwo} = question;
        const optionOneVotes = optionOne.votes.length;
        const optionTwoVotes = optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;
        return (
            <div>
                <Card className="question">
                    <CardContent>
                        <h2>Asked by {author.name}</h2>
                        <Divider />
                        <div className="question-info">
                            <Avatar alt={author.name} src={author.avatarURL} className="question-avatar">{author.name["0"]}</Avatar>
                            <div className="question-detail">
                                <h3>Results:</h3>
                                <Badge color="secondary" badgeContent="Your Choice" className="question-badge">
                                    <Paper className="question-choice">
                                        <h4>{optionOne.text}</h4>
                                        <LinearProgress variant="determinate" color="primary" value={optionOneVotes/totalVotes*100} className="question-barchart" />
                                        <p>{optionOneVotes} out of {totalVotes} votes</p>
                                    </Paper>
                                </Badge>
                                <Badge color="secondary" badgeContent="Your Choice" className="question-badge">
                                    <Paper className="question-choice">
                                        <h4>{optionTwo.text}</h4>
                                        <LinearProgress variant="determinate" color="primary" value={optionTwoVotes/totalVotes*100} className="question-barchart" />
                                        <p>{optionTwoVotes} out of {totalVotes} votes</p>
                                    </Paper>
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const maptStateToProps = ({ authedUser }) => {
    return {
        authedUser,
    }
}

export default connect(maptStateToProps)(QuestioSummary);