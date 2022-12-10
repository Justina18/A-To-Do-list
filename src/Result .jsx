import React from 'react'
import './App.css'
import { MdDeleteOutline } from "react-icons/md";


function Result({ Todo, setTodo }){

    const setChecked=(id)=>{
        const newArr = Todo.map((i)=>  i.id === id? {...i, checkers : !i.checkers}: {...i});setTodo(newArr)
    }

    const deleteItems = (id) =>{
        const newArr = todo.filter((list)=> list !== id);
        console.log(newArr)
        setTodo(newArr)
    }


  return (
    <div className='Result'>
        <div className='text'>            
            <h2>Todo's</h2>
            <p>3 Total, 2 complete and 1 pending</p>
        </div>
        <div className='todos'>
            <div className='card'>
                <p>#</p>
                <p>Todo Title</p>
                <div>
                    <p>Status</p> 
                </div>
            </div>


            <div className='scroll'>
            {Todo?.map((item) => 
                    <div key={item.id} className="Main">
                       
                                <div className='cards'  style={{backgroundColor: item.checkers=== true? '#b9f4b7': "#fff"}}>
                                    <input
                                     type="checkbox"
                                     onChange={()=> setChecked(item.id)}
                                      />
                                    <p>{item.todo}</p>
                               
                                <p>{item.checkers? "completed": "pending"}</p>
                                <button 
                                    className="delete-button" 
                                    onClick={()=>{deleteItems(item)}}>
                                    <MdDeleteOutline /> 
                                </button>
              
                                </div>
                    </div>)}
            </div>
            </div>
  </div>
  )
}

export default Result;

      