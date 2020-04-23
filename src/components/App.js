import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Nav from "../components/Nav";
import Dashboard from "../components/Dashboard";
import NewQuestion from "../components/NewQuestion";
import Leaderboard from "../components/Leaderboard";
import QuestionPage from "../components/QuestionPage";
import { Divider } from '@material-ui/core';


class App extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(handleInitialData());
    }

    render = () => {
        return (
            <BrowserRouter>
                <LoadingBar />
                <div className="App">
                    <Nav />
                    <Divider />
                    <br />
                    {!this.props.loading &&
                        <div>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/add" exact component={NewQuestion} />
                            <Route path="/leaderboard" exact component={Leaderboard} />
                            <Route path="/questions/:id" exact component={QuestionPage} />
                            <a href="https://icons8.com/">User icons by Icons8</a>
                        </div>
                    }
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        loading: authedUser === null,
    };
}
export default connect(mapStateToProps)(App);
