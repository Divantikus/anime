import { RegisterOptions } from 'react-hook-form';
import { IFormDonate } from 'src/components/pages/types/DonatePageTypes.ts';

export const inputSumOptions: RegisterOptions<IFormDonate> = {
    required: true,
    validate: {
        isAmountMoreTwo: (option) => +option > 2,
    },
};
