import React from 'react';
import TodoItem from "./TodoItem.jsx";

const TodoList = ({todos, removeTodo, toggleTodoCompleted}) => {
    return (
        <ul className="todoList">
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        removeTodo={removeTodo}
                        toggleTodoCompleted={toggleTodoCompleted}
                        {...todo}
                    />
                ))
            }
        </ul>
    );
};

export default TodoList;