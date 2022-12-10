import React,{useReducer} from 'react'

function reducer(state, action){

}

const usdcij = () => {

const [count, dispatch] = useReducer(reducer, 0)




  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch()}>increment</button>
      <button onClick={() => dispatch()}>decrement</button>
    </div>
  )
};

// the value of the state is 0
// count is the state

export default usdcij