import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoContextProvider from "./contexts/TodoContext";

class App extends Component {
    render() {
        return (
            <TodoContextProvider>

            </TodoContextProvider>
        );
    }
}

render(<App />, document.querySelector('#root'));
