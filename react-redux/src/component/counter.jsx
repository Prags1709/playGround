import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { addCount } from "../redux/action";

export const Counter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((store)=> store.count)
    //const state = store.getState();
    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={()=>dispatch(addCount(1))}>Increment</button>
        </div>
    )
}