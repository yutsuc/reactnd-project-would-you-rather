import React from "react";
import { connect } from "react-redux";
import { Avatar, Card, CardContent, Divider } from "@material-ui/core";


class UserSummary extends React.Component {
    render = () => {
        const { user } = this.props;
        return (
            <div>
                <Card className="card-container">
                    <CardContent>
                        <div className="card-info">
                            <Avatar alt={user.name} src={user.avatarURL} className="avatar">{user.name["0"]}</Avatar>
                            <div className="user-detail">
                                <h2>{user.name}</h2>
                                <p>Answered Questions: <strong>{Object.keys(user.answers).length}</strong></p>
                                <Divider />
                                <p>Created Questions: <strong>{user.questions.length}</strong></p>
                            </div>
                            <div className="user-score">
                                <h3>Score</h3>
                                <p><strong>{user.questions.length + Object.keys(user.answers).length}</strong></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = ({ users }, { id }) => {
    return {
        user: users[id],
    }
}
export default connect(mapStateToProps)(UserSummary);