import React from "react";
import { connect } from "react-redux";
import { Avatar, Button, Card, CardContent, Divider } from "@material-ui/core";

class Question extends React.Component {
    render = () => {
        const { question, author } = this.props;
        return (
            <div>
                <Card className="question">
                    <CardContent>
                        <h2>{author.name} asks:</h2>
                        <Divider />
                        <div className="question-info">
                            <Avatar alt={author.name} src={author.avatarURL} className="question-avatar">{author.name["0"]}</Avatar>
                            <div className="question-detail">
                                <h3>Would you rather</h3>
                                <p>...{question.optionOne.text}...</p>
                                <Button variant="outlined" fullWidth>View Poll</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = ({ users, questions }, { id }) => {
    return {
        question: questions[id],
        author: users[questions[id].author],
    };
}

export default connect(mapStateToProps)(Question);