import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { handleInitialData } from "../actions/shared";
import Nav from "../components/Nav";
import Dashboard from "../components/Dashboard";
import NewQuestion from "../components/NewQuestion";
import Leaderboard from "../components/Leaderboard";


class App extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(handleInitialData());
    }

    render = () => {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/add" exact component={NewQuestion} />
                    <Route path="/leaderboard" exact component={Leaderboard} />
                </div>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
