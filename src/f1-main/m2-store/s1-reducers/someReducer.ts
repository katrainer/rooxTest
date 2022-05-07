import axios from 'axios';
import {AppThunk} from '../store';

enum EnumSomeReducerActionType { setSome = 'SOME/SET-SOME' }

const initialState = {someProperty: 'someValue'}

export const someReducer = (state: initialStateType = initialState, action: SomeReducerActionType): initialStateType => {
    switch (action.type) {
        default:
            return {...state}
    }
}

//action

const setSomeAC = () => {
    return {type: EnumSomeReducerActionType.setSome,} as const
}

//thunk

export const getSomeTC = (): AppThunk => dispatch => {
    try {

    } catch (e) {

    } finally {

    }
}

//type
type initialStateType = typeof initialState
export type SomeReducerActionType = ReturnType<typeof setSomeAC>