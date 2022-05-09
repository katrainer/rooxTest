import {FC} from 'react';
import s from './Settings.module.scss'
import {MyButton} from '../../../f1-main/m1-ui/u2-common/c2-myButton/MyButton';
import {UserSettingsType} from '../UserSettingsPage';

type SettingsPropsType = {
    userSettings: UserSettingsType[]
}
export const SettingsOff: FC<SettingsPropsType> =
    ({userSettings,}) => {


        return <div className={s.mainContainer}>
            <div className={s.contentContainer}>
                {userSettings.map(u => <div key={u.formikName}>
                    <span>{u.title}</span>
                    <input
                        id={u.formikName}
                        type={u.inputType}
                        placeholder={u.data}
                    />
                </div>)}
                <div>
                    <span>Comment</span>
                    <input
                        className={s.comment}
                        id="comment"
                        type={'text'}
                    />
                </div>
            </div>
            <div className={s.buttonContainer}>
                <MyButton
                    style={{background: '#AFAFAF'}}
                    disabled
                    type={'submit'}>
                    Отправить
                </MyButton>
            </div>
        </div>
    }