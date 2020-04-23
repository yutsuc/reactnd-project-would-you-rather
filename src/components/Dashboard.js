import React from "react";
import { connect } from "react-redux"
import Question from "../components/Question";

class Dashboard extends React.Component {
    render = () => {
        const { questionIds } = this.props
        return (
            <div>
                {questionIds.map(qid => (
                    <Question key={qid} id={qid} />
                ))}
                <a href="https://icons8.com/">User icons by Icons8</a>
            </div>
        );
    }
}

const mapStateToProps = ({ questions }) => {
    return {
        questionIds: Object.keys(questions),
    };
}

export default connect(mapStateToProps)(Dashboard);