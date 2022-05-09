import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Navbar} from '../f2-features/f1-navbar/Navbar';
import {routes} from './m1-ui/u1-routes/routes';
import {UsersPage} from '../f2-features/f2-usersPage/usersPage';
import s from './App.module.scss'

export const App = () => <div className={s.mainContainer}>
    <Navbar/>
    <div className={s.contentContainer}><Routes>
        <Route path={'/'} element={<Navigate to={routes.users}/>}></Route>
        <Route path={routes.users} element={<UsersPage/>}></Route>
    </Routes></div>
</div>

