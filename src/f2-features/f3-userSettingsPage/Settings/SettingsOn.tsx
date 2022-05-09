import {FC} from 'react';
import {UserType} from '../../../f1-main/m3-api/usersApi';
import s from './Settings.module.scss'
import {useFormik} from 'formik';
import {MyButton} from '../../../f1-main/m1-ui/u2-common/c2-myButton/MyButton';
import {UserSettingsType} from '../UserSettingsPage';

type SettingsPropsType = {
    user: UserType
    userSettings: UserSettingsType[]
}
type FormikErrorType = {
    name?: string,
    username?: string
    email?: string
    street?: string
    city?: string
    zipcode?: string
    phone?: string
    website?: string
}

export const SettingsOn: FC<SettingsPropsType> =
    ({user, userSettings}) => {
        const {name, username, email, address, phone, website} = user
        const formik = useFormik({
            initialValues: {
                name,
                username,
                email,
                street: address.street,
                city: address.city,
                zipcode: address.zipcode,
                phone,
                website,
                comment: '',
            },
            validate: (values) => {
                const errors: FormikErrorType = {};
                if (!values.name) errors.name = 'Required'
                if (!values.username) errors.username = 'Required'
                if (!values.street) errors.street = 'Required'
                if (!values.city) errors.city = 'Required'
                if (!values.zipcode) errors.zipcode = 'Required'
                if (!values.phone) errors.phone = 'Required'
                if (!values.website) errors.website = 'Required'
                return errors;
            },
            onSubmit: (values) => {
                console.log(JSON.stringify(values))
            },
        })
        return <form onSubmit={formik.handleSubmit} className={s.mainContainer}>
            <div className={s.contentContainer}>
                {userSettings.map(d => <div key={d.formikName}>
                    <span>{d.title}</span>
                    <input
                        id={d.formikName}
                        type={'text'}
                        placeholder={d.formikName}
                        {...formik.getFieldProps(d.formikName)}
                        // style={formik.touched[{d.formikName}] && formik.errors[{d.formikName}] ? {borderColor: 'red'} : undefined}
                        style={formik.touched.name && formik.errors.name ? {borderColor: 'red'} : undefined}
                    />
                </div>)}
                <div>
                    <span>Comment</span>
                    <input
                        className={s.comment}
                        id={'comment'}
                        type={'text'}
                        {...formik.getFieldProps('comment')}
                    />
                </div>
            </div>
            <div className={s.buttonContainer}>
                <MyButton
                    style={{background: '#52CF4F'}}
                    type={'submit'}>
                    Отправить
                </MyButton>
            </div>
        </form>
    }