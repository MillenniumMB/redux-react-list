import {Dispatch} from "react";
import {TodoAction, TodoActionType} from "../../types/todo";
import axios from "axios";


export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionType.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            dispatch({type: TodoActionType.FETCH_TODO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoActionType.FETCH_TODO_ERROR, payload: "Ошибка при загрузке данных"})
        }
    }
}


export function setTodoPage(page: number, limit = 10): TodoAction {
    return {type: TodoActionType.FETCH_TODO_PAGE, payload: {page, limit}}
}