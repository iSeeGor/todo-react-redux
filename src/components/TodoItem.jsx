import React from 'react';

const TodoItem = ({id, text, completed, removeTodo, toggleTodoCompleted}) => {
    return (
        <li className="todoList__item" key={id}>
            <input type="checkbox" checked={completed} onChange={() => toggleTodoCompleted(id)}/>
            <span className="todoList__item-text">{text}</span>
            <span className="todoList__item-del" onClick={() => removeTodo(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;