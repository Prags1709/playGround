import { ADD_COUNT } from "./action";


export const countReducer = (store, {type, payload})=>{
    switch(type){
        case ADD_COUNT: 
            return {...store, count: store.count + payload};
        default:
            return store;
    }
}