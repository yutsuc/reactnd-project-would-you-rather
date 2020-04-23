import React from "react";
import { Avatar, Button, Card, CardContent, Divider, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

class QuestioVote extends React.Component {
    state = {
        pickedValue: "",
        toQuestion: false,
    }

    handleOptionChange = (e, value) => {
        this.setState({
            pickedValue: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, question } = this.props;
        const { pickedValue } = this.state;
        dispatch(handleSaveQuestionAnswer({
            qid: question.id,
            answer: pickedValue
        }))
        this.setState({
            pickedValue: "",
            toQuestion: true,
        });
    }

    render = () => {
        const { pickedValue, toQuestion } = this.state;
        const { author, question } = this.props;
        if (toQuestion) {
            return <Redirect to={`/questions/${question.id}`} />
        }
        return (
            <div>
                <Card className="card-container">
                    <CardContent>
                        <h2>{author.name} asks:</h2>
                        <Divider />
                        <div className="card-info">
                            <Avatar alt={author.name} src={author.avatarURL} className="avatar">{author.name["0"]}</Avatar>
                            <div className="question-detail">
                                <h3>Would you rather</h3>
                                <RadioGroup value={pickedValue} onChange={this.handleOptionChange}>
                                    <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                                    <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                                </RadioGroup>
                                <Button variant="outlined" fullWidth onClick={this.handleSubmit} disabled={pickedValue === ""} >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default connect()(QuestioVote);