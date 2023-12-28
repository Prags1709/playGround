import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../redux/action";

export const Todo = ()=>{
    const dispatch = useDispatch();
    const todoArr = useSelector((store)=>store.todoData)
    return (
        <div>
            {todoArr.map((ele, i)=>{
                return <div className="dataBox" key={ele.id+i}>
                    <h3>{ele.id}</h3>
                    {ele.subject && <h4>{ele.subject}</h4>}
                    <button onClick={()=>{
                        dispatch(deleteTodo(ele.id))
                    }} className={ele.id}>Delete</button>
                </div>
            })}
        </div>
    )
}