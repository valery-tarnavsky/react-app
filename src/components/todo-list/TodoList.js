import  React from 'react';

function TodoList(props){
    const items = props.items;
    const listItems = items.map((item) =>
        <li key={ item.id.toString() }
            className={ item.completed ? "todo-list__item todo-list__item--completed" : "todo-list__item" }
            onClick={props.onTodoClick(item.id) }>
            {item.title}
            <i className="far fa-check-circle"></i>
        </li>
    );
    return <ul className="todo-list">{listItems}</ul>
}

export default TodoList;