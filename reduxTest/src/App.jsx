import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './redux/store'
import { Counter } from './components/counter'
import { Todo } from './components/todo'
import { AddTotoInput } from './components/addTodoInput'
import "./scss/main.scss"
function App() {
  
  return (
    <>
      <div>
        <Counter/>
      </div> 
      <a>{import.meta.env.VITE_API_URL}</a>
      <hr />
        <AddTotoInput />
        <Todo />
    </>
  )
}

export default App
