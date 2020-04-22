import React from "react";
import { Button, Card, CardContent, CardActions, TextField, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends React.Component {
    state = {
        option1: "",
        option2: "",
        toHome: false,
    }

    onChangeOptions = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    onSumbitQuestion = (e) => {
        e.preventDefault();
        const { option1, option2 } = this.state;
        this.props.dispatch(handleAddQuestion(option1, option2));
        this.setState({
            option1: "",
            option2: "",
            toHome: true,
        });
    }
    render = () => {
        if(this.state.toHome) {
            return (<Redirect to="/" />);
        }
        return (
            <div>
                <Card className="new-question">
                    <h2 className="question-title">Create New Question</h2>
                    <Divider />
                    <CardContent>
                        <p>Complete the question:</p>
                        <br />
                        <h3>Would you rather...?</h3>
                        <form className="question-input">
                            <TextField name="option1" label="Option One" multiline fullWidth onChange={this.onChangeOptions} />
                            <div className="question-divider">----------------- or -----------------</div>
                            <TextField name="option2" label="Option Two" multiline fullWidth onChange={this.onChangeOptions} />
                        </form>
                    </CardContent>
                    <br />
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={this.onSumbitQuestion}>Sumbit</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect()(NewQuestion);