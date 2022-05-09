import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../f1-main/m2-store/store';
import {UserType} from '../../f1-main/m3-api/usersApi';
import {useState} from 'react';
import {MyTitle} from '../../f1-main/m1-ui/u2-common/c3-myTitle/MyTitle';
import s from './UserSettingsPage.module.scss'
import {MyButton} from '../../f1-main/m1-ui/u2-common/c2-myButton/MyButton';
import {SettingsOn} from './Settings/SettingsOn';
import {SettingsOff} from './Settings/SettingsOff';

export type UserSettingsType = {
    formikName: string
    title: string
    inputType: string
    data: string | undefined
}

export const UserSettingsPage = () => {

    const [editeMode, setEditeMode] = useState(false)

    const param = useParams<'id'>()

    const users = useAppSelector<UserType[]>(state => state.users.users)
    const user: UserType = {
        ...users.filter(u => {
            if (param.id) {
                return u.id === Number(param.id)
            }
        })[0]
    }

    const userSettings: UserSettingsType[] = [
        {formikName: 'name', title: 'Name', inputType: 'text', data: user.name,},
        {formikName: 'username', title: 'User name', inputType: 'text', data: user.username,},
        {formikName: 'email', title: 'E-mail', inputType: 'text', data: user.email,},
        {formikName: 'street', title: 'Street', inputType: 'text', data: user.address.street,},
        {formikName: 'city', title: 'City', inputType: 'text', data: user.address.city,},
        {formikName: 'zipcode', title: 'Zip-code', inputType: 'text', data: user.address.zipcode,},
        {formikName: 'phone', title: 'Phone', inputType: 'text', data: user.phone,},
        {formikName: 'website', title: 'Website', inputType: 'text', data: user.website,},
    ]

    const changeEditModeHandler = () => setEditeMode(!editeMode)

    return <div>
        <div className={s.header}>
            <MyTitle title="Профиль пользователя"/>
            <MyButton title="Редактировать" onClick={changeEditModeHandler}>Редактировать</MyButton>
        </div>
        {editeMode ? <SettingsOn
                user={user}
                userSettings={userSettings}/>
            : <SettingsOff
                userSettings={userSettings}/>}
    </div>
}