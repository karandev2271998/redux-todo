import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Hello world'
        }
    ],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            let todoTask = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todoTask);
        },

        removeTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        updateTask: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id == action.payload.id){
                    todo.text = action.payload.text             
                }
                return todo;
            });
        }
    }

});

export const {addTask, removeTask, updateTask} = todoSlice.actions;
export default todoSlice.reducer;