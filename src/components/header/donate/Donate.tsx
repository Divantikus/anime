import supportImg from 'src/img/support_al.png'
import style from './Donate.module.scss'
export const Donate = () => {
  return (
      <a href="#" className={style.donateLink}>
          <img src={supportImg} alt="support pls <3"/>
      </a>
  )
}