import './App.css'
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const createID = () => new Date().getTime();

    const addTodo = () => {
        if( text.trim().length ) {
            setTodos([
                ...todos,
                {
                    id: createID(),
                    text,
                    completed: false,
                }
            ])

            setText('')
        }
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId) );
    }

    const toggleTodoCompleted = (todoId) => {
        setTodos(
            todos.map((todo) => {
                if( todo.id !== todoId ) return todo;

                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
        )
    }

  return (
    <>
        <AddTodo text={text} handleInput={setText} handleSubmit={addTodo}/>

        <TodoList todos={todos} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted}/>
    </>
  )
}

export default App
