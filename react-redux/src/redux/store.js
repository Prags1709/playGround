import {legacy_createStore as createStore} from 'redux';
import reducer from './reducer';

const initState = {
    count: 0,
    todos: [
        {id:1, name: 'hola', status: true},
    ]
}

export const store = createStore(reducer, initState);

store.subscribe(()=>{
    console.log(store.getState());
})