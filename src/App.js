import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import SignIn from './components/SignIn';

class App extends Component {
    state = {
        isFormRendered : true
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isFormRendered: false });
    };

    handleSigningIn = event => {
        event.preventDefault();
        this.setState({ isFormRendered: true });
    };

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
              <SignIn onButtonClick={this.handleSigningIn} />

              { this.state.isFormRendered && <Form onSubmit={this.handleSubmit} /> }


          </div>
        );
    }
}

export default App;
