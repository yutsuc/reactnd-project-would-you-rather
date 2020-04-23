import React from "react";
import { connect } from "react-redux";
import { Avatar, Button, Card, CardContent, Divider } from "@material-ui/core";


class UserSummary extends React.Component {
    render = () => {
        const { user } = this.props;
        return (
            <div>
                <Card>
                    <CardContent>
                        <div>
                            <Avatar alt={user.name} src={user.avatarURL}>{user.name["0"]}</Avatar>
                            <div>
                                <h2>{user.name}</h2>
                                <p>Answered Questions {Object.keys(user.answers).length}</p>
                                <p>Created Questions {user.questions.length}</p>
                            </div>
                            <div>
                                score: {user.questions.length + Object.keys(user.answers).length}
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