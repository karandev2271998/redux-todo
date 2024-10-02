import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <>
      <p className="read-the-docs mb-6">
        Todo App
      </p>
      <AddTodo />
    </>
  )
}

export default App
