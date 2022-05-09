import preloaderGif from './preloader.gif'
import s from './Preloader.module.scss'

export const Preloader = () => <div className={s.mainContainer}>
    <img src={preloaderGif} alt="Приложение загружается"/>
</div>