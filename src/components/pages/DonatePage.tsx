import { useForm } from 'react-hook-form';
import style from './styles/DonatePage.module.scss';

interface IForm {
    sum: number;
}

export const DonatePage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IForm>();

    const submit = (event: IForm) => {};

    return (
        <section className={style.flexContainer}>
            <form className={style.donateForm} onSubmit={handleSubmit(submit)}>
                <h2 className={style.formTitle}>Перевод по кнопке</h2>
                <label htmlFor="sum">Сколько</label>
                <input type="number" {...register('sum')} id="sum" />
                {errors.sum && (
                    <p className={style.errorMes}>Минимум 2 рубля</p>
                )}
                <button></button>
            </form>
            <div className={style.cardsNumbers}>
                <table>
                    <tbody>
                        <tr>
                            <td>Яндекс деньги</td>
                            <td>4100115839344905</td>
                        </tr>
                        <tr>
                            <td>Webmoney</td>
                            <td>Больше не поддерживается</td>
                        </tr>
                        <tr>
                            <td>PayPal</td>
                            <td>Временно не поддерживается</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <a href="https://www.patreon.com/anilibria">
                        https://www.patreon.com/anilibria
                    </a>
                    - ежемесячное добровольное пожертвование!
                </p>
                <p>
                    <a href="https://boosty.to/anilibriatv">
                        https://boosty.to/anilibriatv
                    </a>
                    - ежемесячное добровольное пожертвование!
                </p>
            </div>
        </section>
    );
};
