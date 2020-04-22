import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

class App extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(handleInitialData());
    }

    render = () => {
        return (
            <div className="App">
                App
            </div>
        );
    }
}

export default connect()(App);
