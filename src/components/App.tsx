import {Header} from "src/components/header/Header.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "src/components/footer/Footer.tsx";
import {Sidebar} from "src/components/sidebar/Sidebar.tsx";
import  style from './style.module.scss'

export const App = () => {
    return (
        <section className={style.mainSection}>
            <div className={style.wrapper}>
                <Header/>
                <Sidebar/>
                <main className={style.main}>
                    <Outlet/>
                </main>
            </div>
            <Footer/>
        </section>
    )
}