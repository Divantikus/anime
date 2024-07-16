import { useNewsData } from 'src/hooks/useNewsData.ts';
import { Loading } from 'src/load/Loading.tsx';
import style from './styles/MainPage.module.scss';

// export const decodingJpgImg = 'data:image/jpg;base64,';

export const MainPage = () => {
    const { data: axiosRes, isLoading } = useNewsData();

    if (isLoading) {
        return <Loading height={20} />;
    }

    return (
        <article className={style.news}>
            {axiosRes?.map((title) => {
                console.log();
                return (
                    <a
                        key={title.id}
                        href={title.url}
                        target="_blank"
                        className={style.link}
                    >
                        <img
                            src={title.image_data}
                            alt={title.title}
                            className={style.bg}
                        />
                        <span className={style.whiteBg}></span>
                    </a>
                );
            })}
        </article>
    );
};
