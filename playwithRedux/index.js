import {legacy_createStore as createStore} from "redux";

let ADD_TODOS = "ADD_TODOS";
let ADD_COUNTER = "ADD_COUNTER";
let CHANGE_COLOR = "CHANGE_COLOR";

//Action Creator => for more readable code
let addTodo = (title)=>{
    return {
        type: ADD_TODOS,
        payload: {
            title,
            status: false
        }
    }
}

const reducer = (store, action)=>{
    switch (action.type){
        case ADD_COUNTER :
            return {...store, counter: store.counter + action.payload};
        case CHANGE_COLOR :
            return {...store, color: action.payload};
        case ADD_TODOS :
            return {...store, todos: [...store.todos, action.payload]}
        default: 
            return store
    }
}

//store inital state;
let initState = {
    counter: 1,
    color: "Black",
    todos: []
}
const store = createStore(reducer, initState);

console.log(store.getState());

//dispatch function to do some action;
store.dispatch({type: "ADD_COUNTER", payload: 1})
store.dispatch({type:"CHANGE_COLOR", payload: "red"})
store.dispatch(addTodo("Attryb"))
store.dispatch(addTodo("indi.gg"))

console.log(store.getState());