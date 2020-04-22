import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core"

class Nav extends React.Component {
    render = () => {
        return (
            <div className="nav">
                <Button component={NavLink} to="/">Home</Button>
                <Button component={NavLink} to="/add">New Question</Button>
                <Button component={NavLink} to="/leaderboard">Leaderboard</Button>
            </div>
        )
    }
}

export default Nav;