import { useMutation } from 'react-query';
import { authServices } from 'src/services/auth.services.ts';
import { UseFormSetError } from 'react-hook-form';
import { RegistrationData } from 'src/services/types/authDataTypes';

export const useRegistrationMutation = (setError: UseFormSetError) => {
    return useMutation({
        mutationKey: ['registration'],
        mutationFn: async (data: RegistrationData) => {
            return await authServices.registration(data);
        },
    });
};
