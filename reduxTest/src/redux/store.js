import {legacy_createStore as createStore} from 'redux';
import { countReducer } from './reducer';


const initialVal = {
    count:0,
    arr: []
}

export const store = createStore( countReducer, initialVal);

//find store is changing or not
store.subscribe(()=>{
    console.log("subscribe :" + store.getState().count);
})
