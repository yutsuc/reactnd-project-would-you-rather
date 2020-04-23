import React from "react";
import { connect } from "react-redux";
import { Avatar, Button, Card, CardContent, Divider} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Question extends React.Component {
    render = () => {
        const { author, question} = this.props;

        if (question === null) {
            return <p>This Tweet doesn't exist</p>
        }
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
                                <Button variant="outlined" fullWidth component={Link} to={`/questions/${question.id}`}>
                                    View Poll
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = ({ users, questions }, { id }) => {
    const question = questions[id];

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null,
    };
}

export default withRouter(connect(mapStateToProps)(Question));