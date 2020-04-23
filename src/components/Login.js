import React from "react";
import { connect } from "react-redux";
import { Button, Card, CardActions, CardContent, Divider, Select, MenuItem } from "@material-ui/core";
import { handleInitialData } from "../actions/shared";

class Login extends React.Component {
    state = {
        user: "",
    }

    handleSelectChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    onSumbitLogin = (e) => {
        e.preventDefault();
        this.props.dispatch(handleInitialData(this.state.user))
            .then(() => {
                const from = this.props.location.state.from || "/";
                this.props.history.replace(from);
            });
    }

    render = () => {
        const { user } = this.state;
        return (
            <div className="login">
                <Card className="card-container">
                    <CardContent>
                        <h2>Welcome to the Would You Rather App!</h2>
                        <p>Please sign in to continue</p>
                        <Divider />
                        <div className="login-info">
                            <h3>Sign in</h3>
                            <Select value={user} onChange={this.handleSelectChange}>
                                <MenuItem value="sarahedo">Sarah Edo</MenuItem>
                                <MenuItem value="tylermcginnis">Tyler McGinnis</MenuItem>
                                <MenuItem value="johndoe">John Doe</MenuItem>
                            </Select>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" disabled={user === ""} fullWidth onClick={this.onSumbitLogin}>Sumbit</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect()(Login);