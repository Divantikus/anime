import style from './Footer.module.scss';
import footerIcon1 from 'src/img/footer/anime-link1.jpg'
import footerIcon2 from 'src/img/footer/anime-link2.jpg'
import footerIcon3 from 'src/img/footer/anime-link3.jpg'
import {FooterLinks} from "src/components/footer/footer-links/FooterLinks.tsx";
export const Footer = () => {
  return (
      <footer className={style.footer}>
          <div className={style.leftSide}>
              <a href="#">
                  <img src={footerIcon1} alt="anime girl"/>
              </a>
              <a href="#">
                  <img src={footerIcon2} alt="github icon"/>
              </a>
              <a href="#">
                  <img src={footerIcon3} alt="anime eyes"/>
              </a>
          </div>
          <div className={style.divImg}></div>
          <div className={style.rightSide}>
            <FooterLinks/>
            <address className={style.text}>
                Весь материал на сайте представлен исключительно для домашнего ознакомительного просмотра.
                <br/>
                В случаях нарушения авторских прав - обращайтесь на почту &nbsp;
                <a href="mailto:anilibria@protonmail.com" className={style.emailLink}>anilibria@protonmail.com</a>
            </address>
          </div>
      </footer>
  )
}