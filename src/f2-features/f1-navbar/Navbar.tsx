import s from './Navbar.module.scss'
import {MyButton} from '../../f1-main/m1-ui/u2-common/c1-myButton/MyButton';

export const Navbar = () => {

    return <div className={s.mainContainer}>
        <span>Сортировка</span>
        <MyButton
            title="по городу"
            callback={() => {
            }}
        />
        <MyButton
            title="по компании"
            callback={() => {
            }}
        />
    </div>
}