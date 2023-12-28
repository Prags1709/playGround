//{type:"", payload: }

//Action type
export const ADD_COUNT = "ADD_COUNT"

//Action creator ===> this function for re-useability
export const addCount = (data)=>{
    return {
        type: ADD_COUNT,
        payload: data
    }
}