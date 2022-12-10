import React,{useState, useEffect, useRef} from 'react'
import './App.css'
import Result from './Result '


function App (){
  const inputRef = useRef('')
  const [Todo, setTodo] = useState([])
  const [checked, setChecked] = useState(null)
  const [item, setitem] = useState('')
  let newData = {}

  const handleClick = () => {
    if (inputRef.current.value) {
      newData.id = Todo.length + 1
      newData.todo = inputRef.current.value
      // newData.status = 'pending'
      newData.checkers = false
      setTodo((val) => { return [...val, newData] })
    }
  }

  useEffect(() => {
    Todo.map((value) => {
      if (value.id === item.id && checked) {
        value.status = 'pending'
        console.log(checked) 
      }
      if (value.id === item.id && !checked) {
        value.status = 'complete'
        console.log(checked)
      }
    })
  }, [checked])
 
  useEffect(()=>{ console.log(Todo)},[Todo])

  return (
    <div className='App'>
      <div className='App-wrap'>
      <div className='input-holder'>
        <div className='main-input'>
        <input ref={inputRef} type="text" className='enter' placeholder='Add new Todo...' />
        <button onClick={handleClick}>+</button>
        </div>
      </div>
          <Result Todo={Todo} inputitem={setitem} status={setChecked} check={checked} setTodo={setTodo} />
      </div>
    </div>
  )
}

export default App;