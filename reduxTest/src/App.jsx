import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './redux/store'
import { Counter } from './components/counter'
import { Todo } from './components/todo'
import { AddTotoInput } from './components/addTodoInput'
function App() {
  
  return (
    <>
      <div>
        <Counter/>
      </div> 
      <hr />
        <AddTotoInput />
        <Todo />
    </>
  )
}

export default App
