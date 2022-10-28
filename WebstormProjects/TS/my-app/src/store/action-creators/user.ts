import {Dispatch} from "redux";
import {UserActionType, UsersAction} from "../../types/users";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try{
            dispatch({type: UserActionType.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
        }
        catch (e){
            dispatch({type: UserActionType.FETCH_USERS_ERROR,
                payload:'Произошла ошибка при загрузке пользователей'})
        }
    }
}