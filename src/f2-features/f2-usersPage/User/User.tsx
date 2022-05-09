import {FC} from 'react';
import s from './User.module.scss'
import {Link} from 'react-router-dom';

type UserPropsType = {
    id: number
    userName: string
    city: string
    companyName: string
}

export const User: FC<UserPropsType> =
    ({
         id,
         userName,
         city,
         companyName
     }) => {
        return <div className={s.mainContainer}>
            <div className={s.infoContainer}>
                <p>
                    <span className={s.headline}>ФИО:</span>
                    <span>{userName}</span>
                </p>
                <p>
                    <span className={s.headline}>город:</span>
                    <span>{city}</span>
                </p>
                <p>
                    <span className={s.headline}>компания:</span>
                    <span>{companyName}</span>
                </p>
            </div>
            <div className={s.link}>
                <Link to={`/users/${id}`}>Подробнее</Link>
            </div>
        </div>
    }