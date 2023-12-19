import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, {payload}){
            const {text} = payload;
            if ( text.trim().length ) {
                state.todos.push({
                    id: new Date().getTime(),
                    text,
                    completed: false,
                })
            }

        },
        removeTodo(state, action){
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleTodoCompleted(state, action){
            state.todos.forEach(todo => {
                if( todo.id === action.payload.id ) todo.completed = !todo.completed
            })
        }
    }
})

export const {addTodo, removeTodo, toggleTodoCompleted} = todoSlice.actions;

export default todoSlice.reducer;