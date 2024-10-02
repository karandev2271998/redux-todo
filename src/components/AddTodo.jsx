import React, { useState } from 'react'
import Todos from './Todos'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/todo/todoSlice'
const AddTodo = () => {
    const [input, setInput] = useState("");
    const [todotype, setTodoType] = useState("add");
    const [editTaskId, setEditTaskId] = useState(0);
    const Dispatch = useDispatch();
    let todos = useSelector((state) => state.todos);

    let addTaskHandler = () => {
        Dispatch(addTask(input))
        setInput('');
    }
    let editTodoHandler = (todoId) => {
        let editTaskDetail = todos.filter((todo) => {
            return todo.id === todoId;
        });
        let task = editTaskDetail[0];
        setInput(task.text);
        setTodoType('edit');
        setEditTaskId(task.id);
    }
    let updateTaskHandler = () => {
        let task = {
            id: editTaskId,
            text: input
        }
        Dispatch(updateTask(task))
        setInput('');
        setTodoType('add');
    }

    const todoHandler = (e) => {
        e.preventDefault();
        if (todotype == 'add') {
            addTaskHandler();
        } else {
            updateTaskHandler();
        }
    }
    return (
        <>
            <div className="w-full m-20 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6 mb-6" onSubmit={todoHandler}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add new task</h5>
                    <div>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Learning" required
                            value={input}
                            onChange={(e) => { setInput(e.target.value) }}
                        />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {(todotype == 'add') ? 'Add New' : 'Update'}
                    </button>
                </form>
                <Todos editTodo={editTodoHandler} />
            </div>
        </>
    )
}

export default AddTodo
