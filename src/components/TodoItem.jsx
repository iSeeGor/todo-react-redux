import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoCompleted} from "../store/todoSlice.js";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <li className="todoList__item" key={id}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoCompleted({id}))}/>
            <span className="todoList__item-text">{text}</span>
            <span className="todoList__item-del" onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    );
};

export default TodoItem;