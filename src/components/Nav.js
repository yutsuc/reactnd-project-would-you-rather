import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render = () => {
        return (
            <div className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/new">New Question</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
            </div>
        )
    }
}

export default Nav;