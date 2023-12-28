import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/action";
import { useState } from "react";

export const AddTotoInput = ()=>{
    const [sub, setSubject] = useState("")
    const dispatch = useDispatch();
    const todoArr = useSelector((store)=>store.todoData) // +2

    return (
        <div className="todoInput">
            <input onChange={(e)=>setSubject(e.target.value)} type="text" placeholder="Add Subject"/>
            <button onClick={()=>{
                sub.length > 0 && dispatch(addTodo({
                    id:todoArr.length + 1, 
                    subject:sub
                }))
            }}>Add Todo</button>
        </div>
    )
}