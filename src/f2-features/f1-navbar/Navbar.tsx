import s from './Navbar.module.scss'
import {MyButton} from '../../f1-main/m1-ui/u2-common/c2-myButton/MyButton';
import {useAppDispatch, useAppSelector} from '../../f1-main/m2-store/store';
import {UserType} from '../../f1-main/m3-api/usersApi';
import {setUsersAC} from '../../f1-main/m2-store/s1-reducers/usersReducer';
import {sortArr} from '../../f1-main/m4-utils/sortArrAscending';

export const Navbar = () => {

    const dispatch = useAppDispatch()
    const users = useAppSelector<UserType[]>(state => state.users.users)

    const sortCityHandler = () => {
        dispatch(setUsersAC(sortArr('increase', users, 'address', 'city')))
    }

    const sortCompanyHandler = () => {
        dispatch(setUsersAC(sortArr('increase', users, 'company', 'name')))
    }

    return <div className={s.mainContainer}>
        <span>Сортировка</span>
        <MyButton onClick={sortCityHandler}>по городу</MyButton>
        <MyButton onClick={sortCompanyHandler}>по компании</MyButton>
    </div>
}