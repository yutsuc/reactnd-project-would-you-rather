import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

class Nav extends React.Component {
    render = () => {
        return (
            <div className="nav">
                <div>
                    <Button component={NavLink} to="/">Home</Button>
                    <Button component={NavLink} to="/add">New Question</Button>
                    <Button component={NavLink} to="/leaderboard">Leaderboard</Button>
                </div>
                <div className="spacer"></div>
                <div>
                    <span>Hello, <strong>{this.props.userName}</strong></span>
                    <Button >Log Out</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        userName: authedUser === null ? "" : users[authedUser].name,
    };
}
export default connect(mapStateToProps)(Nav);