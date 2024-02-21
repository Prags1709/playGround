import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { addTodos, changeTodoStatus, deletedTodo } from "../redux/action";

export const Todos = ()=>{
    const [name, setName] = useState();
    const dispatch = useDispatch();
    const todosData = useSelector((store) => store.todos)
    //console.log(store.getState());
    return (
        <div>
            <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="enter name"/>
            <button onClick={()=>dispatch(addTodos({id: todosData.length+1, name:name, status: true}))}>ADD</button>
            <hr />
            {todosData.map((todo)=>{
                return (
                    <div key={todo.name+Math.random()} className="todoList">
                        <p>{todo.name}</p>
                        <p>{`${todo.status}`}</p>
                        <button onClick={()=>dispatch(changeTodoStatus(todo.id))}>Toggle</button>
                        <button onClick={()=>dispatch(deletedTodo(todo.id))}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}