import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Navbar} from '../f2-features/f1-navbar/Navbar';
import {routes} from './m1-ui/u1-routes/routes';
import {UsersPage} from '../f2-features/f2-usersPage/usersPage';
import s from './App.module.scss'
import {useAppDispatch, useAppSelector} from './m2-store/store';
import {Preloader} from './m1-ui/u2-common/c1-Preloader/Preloader';
import {UserSettingsPage} from '../f2-features/f3-userSettingsPage/UserSettingsPage';
import {setUsersTC} from './m2-store/s1-reducers/usersReducer';

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.users.isInitialized)
    useEffect(() => {
        dispatch(setUsersTC())
    }, [])
    return <div className={s.mainContainer}>
        {!isInitialized && <Preloader/>}
        <Navbar/>
        <div className={s.contentContainer}><Routes>
            <Route path={'/'} element={<Navigate to={routes.users}/>}></Route>
            <Route path={routes.users} element={<UsersPage/>}></Route>
            <Route path={routes.userSettings} element={<UserSettingsPage/>}></Route>
        </Routes></div>
    </div>
}

