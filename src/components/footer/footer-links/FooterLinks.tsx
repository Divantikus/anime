import {IFooterLink} from "src/components/footer/footer-links/FooterLinksTypes.ts";
import {Link} from "react-router-dom";
import style from './FooterLinks.module.scss'

const footerLinks: IFooterLink[] = [
    {text: "Правила", link: ""},
    {text: "Вопрос", link: ""},
    {text: "Личный кабинет", link: ""},
    {text: "Регистрация", link: "/registration"},
    {text: "Вход", link: "/login"},
]
export const FooterLinks = () => {
    return (
            <ul className={style.linksContainer}>
            {footerLinks.map(link => {
                return (
                    <li key={link.text + link.link}>
                        <Link to={link.link} className={style.link}>{link.text}</Link>
                    </li>
                )
            })}
        </ul>
    )
}