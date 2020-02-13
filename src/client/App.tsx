import { Component } from 'react';
import React from 'react'
import './app.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FieldsList from './components/FieldsList';
import TodoFormContainer from './components/TodoFormContainer';

export default class App extends Component {

    render() {

        return (
            <>
                    <TodoFormContainer />
                    <FieldsList />
            </>
        )
    }
}
