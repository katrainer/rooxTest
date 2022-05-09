import {AppThunk} from '../store';
import {usersApi, UserType} from '../../m3-api/usersApi';
import axios from 'axios';

enum EnumSomeReducerActionType {
    setUsers = 'USERS/SET-USERS'
}

const initialState = {
    users: [] as UserType[]
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case EnumSomeReducerActionType.setUsers:
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

//action

const setUsersAC = (users: UserType[]) => {
    return {
        type: EnumSomeReducerActionType.setUsers,
        payload: {users}
    } as const
}

//thunk

export const setUsersTC = (): AppThunk => async dispatch => {
    try {
        const res = await usersApi.getUsers()
        dispatch(setUsersAC(res))
    } catch (e: any) {
        // if (axios.isAxiosError(e) && e.response) {
        //     const errorMessage = e.response.data.error;
        //     console.log(errorMessage)
        // }
    } finally {

    }
}


//type

type InitialStateType = typeof initialState
export type UsersReducerActionType = ReturnType<typeof setUsersAC>