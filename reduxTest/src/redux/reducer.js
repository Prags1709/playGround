import { ADD_COUNT, ADD_TODO, DELETE_TODO } from "./action";


export const countReducer = (store, {type, payload})=>{
    switch(type){
        case ADD_COUNT: 
            return {...store, count: store.count + payload};
        case ADD_TODO:
            return {...store, todoData: [...store.todoData, payload]};
        case DELETE_TODO:
            const updatedTodoData = store.todoData.filter(todo => todo.id !== payload)
            return {...store, todoData: updatedTodoData}
        default:
            return store;
    }
}