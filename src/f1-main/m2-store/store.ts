import {applyMiddleware, combineReducers, createStore} from 'redux';
import {usersReducer, UsersReducerActionType} from './s1-reducers/usersReducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
    users: usersReducer,

})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionType = UsersReducerActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => {
    return useDispatch() as ThunkDispatch<AppRootStateType, unknown, AppActionType>
}

//Типизация стора
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store