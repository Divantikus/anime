import {useMutation} from "react-query";
import {LoginData} from "src/services/types/authDataTypes.ts";
import {authServices} from "src/services/auth.services.ts";

export const useLoginMutation = () => {

    return useMutation({
        mutationKey: ['loginMut'],
        mutationFn: async (data: LoginData) => {
            return await authServices.login(data)
        }
    })
}