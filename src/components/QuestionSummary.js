import React from "react";
import { Avatar, Badge, Card, CardContent, Divider, LinearProgress, Paper } from "@material-ui/core";
import { connect } from "react-redux";

class QuestioSummary extends React.Component {
    render = () => {
        const { authedUser, author, question } = this.props;
        const {optionOne, optionTwo} = question;
        const optionOneVotes = optionOne.votes.length;
        const optionTwoVotes = optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;
        const optionOnePercent = optionOneVotes/totalVotes*100;
        const optionTwoPercent = optionTwoVotes/totalVotes*100;
        return (
            <div>
                <Card className="card-container">
                    <CardContent>
                        <h2>Asked by {author.name}</h2>
                        <Divider />
                        <div className="card-info">
                            <Avatar alt={author.name} src={author.avatarURL}  className="avatar">{author.name["0"]}</Avatar>
                            <div className="question-detail">
                                <h3>Results:</h3>
                                <Badge color="secondary" badgeContent="Your Choice" className="question-badge" invisible={optionOne.votes.indexOf(authedUser) < 0}>
                                    <Paper className="question-choice">
                                        <h4>{optionOne.text}</h4>
                                        <LinearProgress variant="determinate" color="primary" value={optionOnePercent} className="question-barchart" />
                                        <p>{optionOnePercent.toFixed(2)}%, {optionOneVotes} out of {totalVotes} votes</p>
                                    </Paper>
                                </Badge>
                                <Badge color="secondary" badgeContent="Your Choice" className="question-badge" invisible={optionTwo.votes.indexOf(authedUser) < 0}>
                                    <Paper className="question-choice">
                                        <h4>{optionTwo.text}</h4>
                                        <LinearProgress variant="determinate" color="primary" value={optionTwoPercent} className="question-barchart" />
                                        <p>{optionTwoPercent.toFixed(2)}%, {optionTwoVotes} out of {totalVotes} votes</p>
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