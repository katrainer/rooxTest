import {useAppDispatch, useAppSelector} from '../../f1-main/m2-store/store';
import {UserType} from '../../f1-main/m3-api/usersApi';
import {useEffect} from 'react';
import {setUsersTC} from '../../f1-main/m2-store/s1-reducers/usersReducer';
import {MyTitle} from '../../f1-main/m1-ui/u2-common/c2-myTitle/MyTitle';
import s from './UsersPage.module.scss'
import {User} from './User/User';

export const UsersPage = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector<UserType[]>(state => state.users.users)

    useEffect(() => {
        dispatch(setUsersTC())
    }, [])

    return <div className={s.mainContainer}>
        <div>
            <div className={s.titleContainer}>
                <MyTitle title="Список пользователей"/>
            </div>
            <div className={s.usersContainer}>
                {users.map(u => <User
                    key={u.id}
                    id={u.id}
                    userName={u.name}
                    city={u.address.city}
                    companyName={u.company.name}/>
                )}
            </div>
            <div className={s.countUsersContainer}>
                <span>{`Найдено ${users.length} пользователей`}</span>
            </div>
        </div>
    </div>
}