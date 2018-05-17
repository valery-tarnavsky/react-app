import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import TodoList from '../components/todo-list/TodoList';
import { addNumber } from "../actions/mathActions"

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

     toggleTodo(index){
         const todos = this.state.todos;
         let isCompleted = todos[index].completed;
         todos[index].completed = !isCompleted;

         this.setState({todos})
     };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <main>
                    <ul>
                        {
                            this.state.todos.map((item, index) => {
                                return <TodoList
                                    key={item.id.toString()}
                                    item={item}
                                    onItemClick={this.toggleTodo.bind(this, index)}
                                    userName={this.props.user.name} />
                            })
                        }
                    </ul>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (name) => {
            dispatch(addNumber(name))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
