import { ADD_COUNTER, ADD_TODOS, CHANGE_TODO_STATUS, DELETE_TODO } from "./action";

const reducer = (store, action)=>{
    switch (action.type) {
        case ADD_COUNTER:
            return {...store, count: store.count + action.payload}
        case ADD_TODOS:
            return {...store, todos: [...store.todos, action.payload]}
        case CHANGE_TODO_STATUS:
            const updatedTodo = store.todos.map(todo=>
                todo.id === action.payload ? {...todo, status: !todo.status}: todo
            );
            return {...store, todos: updatedTodo};
        case DELETE_TODO:
            const deletedTodo = store.todos.filter(todo => todo.id !== action.payload);
            return {...store, todos: deletedTodo}
        default:
            return store;
    }
}

export default reducer;