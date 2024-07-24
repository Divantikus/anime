import { INavBarButton } from 'src/components/header/nav-bar/NavBarTypes.ts';
import { Link } from 'react-router-dom';
import style from './NavBar.module.scss';
const navBarButtons: INavBarButton[] = [
    { text: 'ГЛАВНАЯ', link: '/', className: `${style.navBarBtn1}` },
    { text: 'РЕЛИЗЫ', link: '/releases', className: `${style.navBarBtn2}` },
    { text: 'РАСПИСАНИЕ', link: '/schedule', className: `${style.navBarBtn3}` },
    { text: 'СЛУЧАЙНОЕ', link: '', className: `${style.navBarBtn4}` },
    { text: 'ПРИЛОЖЕНИЕ', link: '', className: `${style.navBarBtn5}` },
    { text: 'КОМАНДА', link: '', className: `${style.navBarBtn6}` },
    {
        text: 'ПОДДЕРЖАТЬ ПРОЕКТ',
        link: '/donate',
        className: `${style.navBarBtn7}`,
    },
];

export const NavBar = () => {
    return (
        <nav>
            <ul className={style.buttonContainer}>
                {navBarButtons.map((button) => {
                    return (
                        <li key={button.link + button.text}>
                            <Link
                                to={button.link}
                                className={`${style.navBarBtn} ${button.className}`}
                            >
                                {button.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
