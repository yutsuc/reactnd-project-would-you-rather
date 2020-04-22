import React from "react";
import { Button, Card, CardContent, CardActions, TextField } from "@material-ui/core";

class NewQuestion extends React.Component {
    render = () => {
        return (
            <div>
                <h3>Create New Question</h3>
                <Card className="new-question">
                    <CardContent>
                        <form className="question-input">
                            <TextField className="fullwidth" label="test1" multiline />
                            <div className="question-divider">----------------- or -----------------</div>
                            <TextField className="fullwidth" label="test2" multiline />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button className="fullwidth" variant="outlined" color="primary">Sumbit</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default NewQuestion;