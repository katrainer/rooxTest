import {FC,memo} from 'react';

type MyButtonPropsType = {
    title: string
    callback: () => void
}


export const MyButton: FC<MyButtonPropsType> = memo(({title, callback}) => {

    const onClickHandler = () => callback()

    return <button onClick={onClickHandler}>
        {title}
    </button>
})