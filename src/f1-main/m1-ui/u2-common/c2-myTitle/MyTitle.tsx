import {FC, memo} from 'react';
import s from './MyTitle.module.scss'

type MyTitlePropsType = {
    title: string
}

export const MyTitle: FC<MyTitlePropsType> = memo(({title}) =>
    <span className={s.title}>
            {title}
    </span>)