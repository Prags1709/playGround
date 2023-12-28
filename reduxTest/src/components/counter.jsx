import { addCount } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = ()=>{

    const dispatch = useDispatch();
    //Redux store is biggest data {}object so we have to 
    //filter particular data.
    const countVal = useSelector((store)=>store.count)

    return (
        <div>
            <h1>Count: {countVal}</h1>
            <button onClick={()=>{
            // dispatch action to update state
            dispatch(addCount(1)) 
            }}>ADD COUNT</button>
      </div>
    )
}