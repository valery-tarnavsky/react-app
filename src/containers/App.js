import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Sidebar from "../components/Sidebar";

const App = ({children}) => {
    return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <main>
                    <Sidebar />
                    <div className="content">
                        {children}
                    </div>
                </main>
            </div>
        );
};

export default App;
