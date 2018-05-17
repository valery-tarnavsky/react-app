import  React from 'react';

function TodoList(props){
    return (
        <li className={ props.item.completed ? "todo-list__item todo-list__item--completed" : "todo-list__item" }
            onClick={props.onItemClick}>
            {props.item.title}
            <i className="far fa-check-circle"></i>
        </li>
    );
}

export default TodoList;