import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from './store/todoSlice.js'

function App() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const addTodoItem = () => {
        dispatch(addTodo({text}));
        setText('');
    };

    const removeTodo = (todoId) => {
        // setTodos(todos.filter((todo) => todo.id !== todoId) );
    }

    const toggleTodoCompleted = (todoId) => {
        // setTodos(
        //     todos.map((todo) => {
        //         if( todo.id !== todoId ) return todo;
        //
        //         return {
        //             ...todo,
        //             completed: !todo.completed,
        //         }
        //     })
        // )
    }

  return (
    <>
        <AddTodo text={text} handleInput={setText} handleSubmit={addTodoItem}/>

        <TodoList/>
    </>
  )
}

export default App
