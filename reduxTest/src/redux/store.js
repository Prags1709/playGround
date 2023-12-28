import {legacy_createStore as createStore} from 'redux';
import { countReducer } from './reducer';


const initialVal = {
    count:0,
    todoData: [
        {id:1, subject:"Math"},
        {id:2, subject:"Node.js"},
        // {id:3, subject:"React.js"},
    ]
}

export const store = createStore( countReducer, initialVal);

//find store is changing or not
store.subscribe(()=>{
    console.log("subscribe :" + store.getState().todoData);
})
