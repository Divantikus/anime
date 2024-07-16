import {
    LoginData,
    RegistrationData,
} from 'src/services/types/authDataTypes.ts';
import axios from 'axios';

class Auth {
    private baseURL = 'http://localhost:8000/user/';

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
            this.createFormData(options)
        );
    }

    async registration(options: RegistrationData) {
        return await axios.postForm(
            this.baseURL + 'signup/',
            this.createFormData(options)
        );
    }
}

export const authServices = new Auth();
