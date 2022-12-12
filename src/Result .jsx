import { useRef } from 'react';
import './App.css'
import { MdDelete } from "react-icons/md";




const Result = ({ Todo, update }) => {
    const ref = useRef(null);
    let Total = Todo.length
    let Completed = 0
    let Pending = 0
    Todo.map((item) => {
        item.checkers ? Completed += 1 : Pending += 1
    })


    const setChecked = (id) => {
        const newArr = Todo.map((i) => i.id === id ? { ...i, checkers: !i.checkers } : { ...i });
        update({ type: "checked", payload: { Check: newArr } })
    }


    const HandleDelete = (item) => {
        let newList = Todo.filter((val) => { return val.id !== item.id })
        // console.log(newList)
        update({ type: "checked", payload: { Check: newList } })
    }


    const HandleFilter = () => {
        let newfilter = Todo.filter((i) => { return !i.checkers })
        update({ type: "delet", payload: { Check: newfilter } })
    }


    return (
        <div className="Card">
            <div className='Card_wrap'>
                <div className="text">
                    <h1>Todo's</h1>
                    <div className="text1">
                        <p>{Total} Total, {Completed} Complete and {Pending} Pending</p>
                        
                    </div>


                </div>
                <div className="card">
                    <div className="card_head">
                        <div className='card_top'>
                            <div className='wrap'>
                                <div className='parent'>
                                    <p>#</p>
                                    <p>Todo Title</p>
                                </div>
                                <p> Status</p>
                            </div>
                        </div>
                    </div>
                    <div className='scroll'>
                        {Todo?.map((item, index) => <div key={index} className="Main_card">
                            <div className='Main_cardtop' style={{ backgroundColor: item.checkers === true ? '#b9f4b7' : "#fff" }} >
                                <div className='wrap'>
                                    <div className='parent'>
                                        <input
                                            type="checkbox"
                                            ref={ref}
                                            onChange={() => setChecked(item.id)}
                                        />
                                        <p>{item.todo}</p>
                                    </div>
                                    <div className='status'><p>{item.checkers ? "completed" : "pending"}
                                    </p> <MdDelete onClick={() => { HandleDelete(item) }} /></div>
                                </div>
                            </div>
                        </div>)}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Result;