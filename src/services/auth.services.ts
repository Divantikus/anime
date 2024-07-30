import {
    LoginData,
    RegistrationData,
} from 'src/services/types/authDataTypes.ts';
import axios from 'axios';

class Auth {
    private baseURL = `http://${import.meta.env.VITE_DOMAINE}:${import.meta.env.VITE_PORT}/user/`;

    private createFormData(data: LoginData | RegistrationData) {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        return formData;
    }

    async login(options: LoginData) {
        return await axios.postForm(
            this.baseURL + 'login/',
            this.createFormData(options),{withCredentials: true}
        );
    }

    async registration(options: RegistrationData) {
        return await axios.postForm(
            this.baseURL + 'signup/',
            this.createFormData(options),{withCredentials: true}
        );
    }

    async getProfile(){
        const data = await axios.get(this.baseURL + 'profile', {withCredentials: true})
        console.log(data);
        return data
    }
}

export const authServices = new Auth();
