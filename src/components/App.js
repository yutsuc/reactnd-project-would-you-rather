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
                    {!this.props.loading &&
                        <div>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/add" exact component={NewQuestion} />
                            <Route path="/leaderboard" exact component={Leaderboard} />
                        </div>}

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
