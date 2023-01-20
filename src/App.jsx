import { useState,useRef, useReducer} from 'react'
import './App.css'
import data from './data.json'
import Result from './Result '

function reducer(todos, action) {
  switch (action.type) {
    case 'Add':
      return [...todos, newTodo(action.payload.name)]
    case "checked":
      return action.payload.Check
    case "delete":
      return action.payload.Check
  }
}

function newTodo(inputRef) {
  return { id: Date.now(), todo: inputRef, checkers: false }
}

function App() {
  const inputRef = useRef('')
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todo'))|| [])


  const handleClick = () => {
    dispatch({ type: 'Add', payload: { name: inputRef.current.value } })
  }

  return (
    <div className="App">
      <div className='App_wrap'>
        <div className='input-holder'>
          <input 
          ref={inputRef} 
          placeholder='Add new Todo...' 
          />
          <button 
          onClick={() => { handleClick(); }}>+</button>
        </div>
      </div>
      <Result 
      Todo={state}
       update={dispatch}/>.
    </div>
  )
}

export default App;
