import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { clearAuthedUser } from "../actions/authedUser";

class Nav extends React.Component {
    handleLogOut = (e) => {
        e.preventDefault();
        this.props.dispatch(clearAuthedUser());
        this.props.history.push("/");
    }
    render = () => {
        const {userName} = this.props;
        return (
            <div className="nav">
                <div>
                    <Button disabled={userName === ""} component={NavLink} to="/">Home</Button>
                    <Button disabled={userName === ""} component={NavLink} to="/add">New Question</Button>
                    <Button disabled={userName === ""} component={NavLink} to="/leaderboard">Leaderboard</Button>
                </div>
                <div className="spacer"></div>
                <div hidden={userName === ""}>
                    <span>Hello, <strong>{userName} </strong></span>
                    <Button color="secondary" onClick={this.handleLogOut} >Log Out</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        userName: authedUser === null || Object.keys(users).length === 0 ? "" : users[authedUser].name,
    };
}
export default withRouter(connect(mapStateToProps)(Nav));