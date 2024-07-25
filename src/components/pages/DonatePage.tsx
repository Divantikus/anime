import { inputSumOptions } from 'src/components/pages/variables/DonatePageVariables.ts';
import { DonateLinks } from 'src/components/WatchPageComponents/Table/DonateLinks/DonateLinks.tsx';
import { DonateTable } from 'src/components/WatchPageComponents/Table/DonateTable.tsx';
import { IFormDonate } from 'src/components/pages/types/DonatePageTypes.ts';
import { useForm } from 'react-hook-form';
import style from './styles/DonatePage.module.scss';

export const DonatePage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormDonate>({
        mode: 'onBlur',
    });

    const submit = (formEvent: IFormDonate) => {};

    return (
        <section className={style.flexContainer}>
            <form className={style.donateForm} onSubmit={handleSubmit(submit)}>
                <h2 className={style.formTitle}>Перевод по кнопке</h2>
                <label htmlFor="sum" className={style.label}>
                    Сколько
                </label>
                <div className={style.inputContainer}>
                    <input
                        id="sum"
                        type="number"
                        className={style.inputSum}
                        {...register('sum', inputSumOptions)}
                    />
                </div>
                {errors.sum?.type === 'isAmountMoreTwo' && (
                    <p className={style.errorMes}>Минимум 2 рубля</p>
                )}
                <button className={style.donateButton}>Пожертвовать</button>
            </form>
            <div className={style.cardsNumbers}>
                <DonateTable />
                <DonateLinks />
            </div>
        </section>
    );
};
