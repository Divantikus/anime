import {useMutation} from "react-query";
import {authServices} from "src/services/auth.services.ts";
import {UseFormSetError} from "react-hook-form";

export const useRegistrationMutation = (setError: UseFormSetError) => {
    return useMutation({
      mutationKey: ['registration'],
      mutationFn: async (data: any) => {

        return await authServices.registration()
      }
    })
}