import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo-list/TodoList';

class App extends Component {
     constructor(props){
         super(props);
     }

     state = {
         todos: [
             {
                 id: 1,
                 title: "title1",
                 completed: false
             },
             {
                 id: 2,
                 title: "title2",
                 completed: true
             }
         ],


     };

     toggleTodo = (id) => {
         console.log(id);
     };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <main>
                    <TodoList items={this.state.todos} onTodoClick={this.toggleTodo}/>
                </main>




            </div>
        );
    }
}

export default App;
