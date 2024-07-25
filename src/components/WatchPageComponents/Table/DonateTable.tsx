import style from './Table.module.scss';

export const DonateTable = () => {
    return (
        <table className={style.table}>
            <tbody>
                <tr>
                    <td className={style.firstTd}>Яндекс деньги</td>
                    <td>4100115839344905</td>
                </tr>
                <tr>
                    <td className={style.firstTd}>Webmoney</td>
                    <td>Больше не поддерживается</td>
                </tr>
                <tr>
                    <td className={style.firstTd}>PayPal</td>
                    <td>Временно не поддерживается</td>
                </tr>
            </tbody>
        </table>
    );
};
