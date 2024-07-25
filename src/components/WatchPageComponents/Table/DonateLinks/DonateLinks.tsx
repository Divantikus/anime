import style from './DonateLinks.module.scss';

export const DonateLinks = () => {
    return (
        <>
            <p className={style.linkPar}>
                <a
                    href="https://www.patreon.com/anilibria"
                    className={style.link}
                >
                    https://www.patreon.com/anilibria
                </a>
                - ежемесячное добровольное пожертвование!
            </p>
            <p className={style.linkPar}>
                <a href="https://boosty.to/anilibriatv" className={style.link}>
                    https://boosty.to/anilibriatv
                </a>
                - ежемесячное добровольное пожертвование!
            </p>
        </>
    );
};
