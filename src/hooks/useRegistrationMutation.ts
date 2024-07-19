import { TemplateInputReg } from 'src/components/login-form/input-fields/template-input/TemplateInputTypes.ts';
import { RegistrationData } from 'src/services/types/authDataTypes';
import { UseFormSetError } from 'react-hook-form';
import { authServices } from 'src/services/auth.services.ts';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
    emailErrorAlreadyExists,
    userNameErrorAlreadyExists,
} from 'src/components/registration-form/RegistrationVar.ts';
import { AxiosError } from 'axios';

export const useRegistrationMutation = (
    setError: UseFormSetError<TemplateInputReg>
) => {
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ['registration'],
        mutationFn: async (data: RegistrationData) => {
            return await authServices.registration(data);
        },
        onSuccess: () => {
            navigate('/');
        },
        onError: (data: AxiosError<unknown>) => {
            switch (data.response?.status) {
                case 456:
                    setError('username', userNameErrorAlreadyExists);
                    break;
                case 457:
                    setError('email', emailErrorAlreadyExists);
            }
        },
    });
};
