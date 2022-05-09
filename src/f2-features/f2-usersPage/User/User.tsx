import {FC, memo} from 'react';
import s from './User.module.scss'
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    id: number
    userName: string
    city: string
    companyName: string
}

export const User: FC<UserPropsType> = memo(
    (props) => {
        const userInfo = [props]
        return <div className={s.mainContainer}>
            {
                userInfo.map(u => <div key={u.id} className={s.contentContainer}>
                    <div className={s.infoContainer}>
                        <p>
                            <span className={s.headline}>ФИО:</span>
                            <span>{u.userName}</span>
                        </p>
                        <p>
                            <span className={s.headline}>город:</span>
                            <span>{u.city}</span>
                        </p>
                        <p>
                            <span className={s.headline}>компания:</span>
                            <span>{u.companyName}</span>
                        </p>
                    </div>
                    <div className={s.link}>
                        <NavLink to={`/user/${u.id}`}>Подробнее</NavLink>
                    </div>
                </div>)}

        </div>
    })