import {TodoAction, TodoActionType, TodoState} from "../../types/todo";


const initialState: TodoState = {
    todo: [],
    loader: false,
    error: null,
    limit: 10, page: 1
}

export const todoReducer = (state = initialState, action:TodoAction) : TodoState =>{
    switch (action.type){
        case TodoActionType.FETCH_TODO:
            return {...state, loader: true}
        case TodoActionType.FETCH_TODO_SUCCESS:
            return {...state, loader:false, todo: action.payload}
        case TodoActionType.FETCH_TODO_ERROR:
            return {...state, loader:false, error: action.payload}
        case TodoActionType.FETCH_TODO_PAGE:
            return {...state, loader:false, page: action.payload.page, limit: action.payload.limit}
        default:
            return state
    }

}