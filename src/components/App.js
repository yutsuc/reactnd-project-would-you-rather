import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoadingBar from "react-redux-loading-bar";
import { Divider } from '@material-ui/core';
import Nav from "../components/Nav";
import Dashboard from "../components/Dashboard";
import NewQuestion from "../components/NewQuestion";
import Leaderboard from "../components/Leaderboard";
import QuestionPage from "../components/QuestionPage";
import Login from "../components/Login";


class App extends React.Component {
    render = () => {
        const { loading } = this.props;
        return (
            <BrowserRouter>
                <LoadingBar />
                <div className="App">
                    <Nav />
                    <Divider />
                    <br />

                    <Switch>
                            <Route exact path="/" render={({ location }) => !loading ? (<Dashboard />) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)} />
                            <Route exact path="/add" render={({ location }) => !loading ? (<NewQuestion />) : (<Redirect to={{ pathname: "/login", state: { from: location }}} /> )} />
                            <Route exact path="/leaderboard"  render={({ location }) => !loading ? (<Leaderboard />) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)} />
                            <Route exact path="/questions/:id" render={({ location }) => !loading ? (<QuestionPage />) : (<Redirect to={{ pathname: "/login", state: { from: location } }} /> )}/>
                            <Route exact path="/login" component={Login} />
                            <a href="https://icons8.com/">User icons by Icons8</a>
                        </Switch>
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
