import {AppThunk} from '../store';
import {usersApi, UserType} from '../../m3-api/usersApi';

enum EnumSomeReducerActionType {
    setUsers = 'USERS/SET-USERS',
    setInitialized = 'USERS/SET-INITIALIZED',
}

const initialState = {
    users: [] as UserType[],
    isInitialized: false,
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case EnumSomeReducerActionType.setUsers:
            return {...state, users: [...action.payload]}
        case EnumSomeReducerActionType.setInitialized:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//action

export const setUsersAC = (users: UserType[]) => {
    return {
        type: EnumSomeReducerActionType.setUsers,
        payload: users
    } as const
}
const setInitializedAC = (isInitialized: boolean) => {
    return {
        type: EnumSomeReducerActionType.setInitialized,
        payload: {isInitialized}
    } as const
}

//thunk

export const setUsersTC = (): AppThunk => async dispatch => {
    dispatch(setInitializedAC(false))
    try {
        const res = await usersApi.getUsers()
        dispatch(setUsersAC(res))
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    }
    dispatch(setInitializedAC(true))
}


//type

type InitialStateType = typeof initialState
export type UsersReducerActionType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setInitializedAC>