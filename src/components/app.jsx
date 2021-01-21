import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';

//Class or Stateful Component
export default class App extends Component {
    state = {

    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        );
    }
}