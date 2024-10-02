import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTask } from '../features/todo/todoSlice'
import { TfiPencilAlt, TfiTrash } from "react-icons/tfi";
const Todos = ({editTodo}) => {
    let todos = useSelector((state) => state.todos);
    const Dispatch = useDispatch();
    const editTodoHandler = (todoId) => {
        editTodo(todoId);
    }
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th colSpan="5" scope="col" className="px-6 py-3">
                                Task Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td colSpan="4" className="px-6 py-4">
                                    {todo.text}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => editTodoHandler(todo.id)} className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md mx-2">
                                        <TfiPencilAlt />
                                    </button>
                                    <button onClick={() => Dispatch(removeTask(todo.id))} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                                        <TfiTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todos
