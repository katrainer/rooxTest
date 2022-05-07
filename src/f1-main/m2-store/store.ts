import {applyMiddleware, combineReducers, createStore} from 'redux';
import {someReducer, SomeReducerActionType} from './s1-reducers/someReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const rootReducer = combineReducers({
    some: someReducer,

})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionType = SomeReducerActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//Типизация стора
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store