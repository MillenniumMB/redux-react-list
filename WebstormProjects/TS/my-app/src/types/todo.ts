import {todo} from "./modal";

export enum TodoActionType{
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    FETCH_TODO_PAGE = "FETCH_TODO_PAGE"
}


interface FetchTodoAction {
    type: TodoActionType.FETCH_TODO,
    payload?: any

}

interface FetchTodoSuccessAction {
    type: TodoActionType.FETCH_TODO_SUCCESS,
    payload: any[]

}

interface FetchTodoErrorAction {
    type: TodoActionType.FETCH_TODO_ERROR,
    payload: string

}
interface FetchTodoPageAction {
    type: TodoActionType.FETCH_TODO_PAGE,
    payload: {
        page: number
        limit: number
    }

}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | FetchTodoPageAction

export interface TodoState {
    todo: Array<todo> | []
    loader: boolean
    error: string | null
    page?: number
    limit?: number
}