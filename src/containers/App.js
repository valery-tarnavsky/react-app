import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Router, Route} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import logo from '../logo.svg';
import '../App.css';
import Sidebar from "../components/Sidebar";

import {addDeck, hideAddDeck, showAddDeck} from "../actions";
import {store} from "../store";
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import { createHashHistory } from '/history';


const hashHistory = createHashHistory();
const history =  syncHistoryWithStore(hashHistory, store);

const mapStateToProps = (state) => {
    return {
        decks : state.decks,
        addingDeck : state.addingDeck
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDeck : (name) => dispatch(addDeck(name)),
        showAddDeck : () => dispatch(showAddDeck()),
        hideAddDeck : () => dispatch(hideAddDeck())
    }
};

class App extends Component {
     constructor(props){
         super(props);
     }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <main>
                    <Sidebar
                        decks={ this.props.decks }
                        showAddDeck={ this.props.showAddDeck }
                        addingDeck={ this.props.addingDeck }
                        addDeck={ this.props.addDeck }
                        hideAddDeck={ this.props.hideAddDeck }
                    />
                    <div className="content"></div>
                </main>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
