//action type
export const ADD_COUNTER = "ADD_COUNTER";
export const ADD_TODOS = "ADD_TODOS";
export const CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS";
export const DELETE_TODO = "DELETE_TODO";

//action creator
export const addCount = (data)=>{
    return { type: ADD_COUNTER, payload: data}
}
export const addTodos = (data)=>{
    return { type: ADD_TODOS, payload: data}
}
export const changeTodoStatus = (data)=>{
    return { type: CHANGE_TODO_STATUS, payload: data}
}
export const deletedTodo = (data)=>{
    return { type: DELETE_TODO, payload: data}
}