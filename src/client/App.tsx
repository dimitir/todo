import { Component } from 'react';
import React from 'react'
import './app.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MakeTodoContainer from './components/makeTodo/MakeTodoContainer';
import Navbar from './components/navbar/Navbar';

export default class App extends Component {

    render() {

        return (
            <>
                <Navbar />
                <MakeTodoContainer />
            </>
        )
    }
}
