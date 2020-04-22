import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "../components/Nav"
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(handleInitialData());
    }

    render = () => {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    App
                </div>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
