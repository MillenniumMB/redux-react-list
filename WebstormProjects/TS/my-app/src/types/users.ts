import {user} from "./modal";

export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}


interface FetchUsersAction{
    type: UserActionType.FETCH_USERS
    payload?: any
}

interface FetchUsersSuccessAction{
    type: UserActionType.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction{
    type: UserActionType.FETCH_USERS_ERROR
    payload: string
}

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction




export interface UserState{
    users: Array<user> | [],
    loading: boolean,
    error: string | null
}