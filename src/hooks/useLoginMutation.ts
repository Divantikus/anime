import { UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authServices } from 'src/services/auth.services.ts';
import { useMutation } from 'react-query';
import { LoginData } from 'src/services/types/authDataTypes.ts';
import { incorrectData } from 'src/components/login-form/LoginVar.ts';

export const useLoginMutation = (setError: UseFormSetError<LoginData>) => {
    const navigate = useNavigate();

    return useMutation({
        mutationKey: ['loginMut'],
        mutationFn: async (data: LoginData) => {
            return await authServices.login(data);
        },
        onSuccess: () => {
            navigate('/');
        },
        onError: () => {
            setError('username', incorrectData);
            setError('password', incorrectData);
        },
    });
};
