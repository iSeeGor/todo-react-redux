import './App.css'
import {useEffect, useState} from "react";

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
        <label className="formAddTodo">
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
            <button onClick={addTodo}>Add todo</button>
        </label>

        <ul className="todoList">
            {
                todos.map((todo) => {
                    return (
                        <li className="todoList__item" key={todo.id}>
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoCompleted(todo.id)}/>
                            <span className="todoList__item-text">{todo.text}</span>
                            <span className="todoList__item-del" onClick={() => removeTodo(todo.id)}>&times;</span>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default App
