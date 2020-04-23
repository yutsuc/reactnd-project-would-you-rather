import React from "react";
import { connect } from "react-redux";
import UserSummary from "../components/UserSummary";

class Leaderboard extends React.Component {
    render = () => {
        const {userIds} = this.props;
        return (
            <div>
                {userIds.map(id => (
                    <UserSummary id={id} key={id} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => {
    const userIds = Object.keys(users).sort((a, b) => {
        const valA = users[a].questions.length + Object.keys(users[a].answers).length;
        const valB = users[b].questions.length + Object.keys(users[b].answers).length;
        return valB - valA;
    });
    return {
        userIds,
    }
}

export default connect(mapStateToProps)(Leaderboard);