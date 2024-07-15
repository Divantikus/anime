import {
    LoginData,
    RegistrationData,
} from 'src/services/types/authDataTypes.ts';
import axios from 'axios';

class Auth {
    private baseURL = 'http://localhost:8000/user/';

    private createFormData<T>(data: T) {
        const formData = new FormData();
        for (const key in data) {
            // @ts-ignore
            formData.append(key, data[key]);
        }
        return formData;
    }

    async login(options: LoginData) {
        const data = await axios.postForm(
            this.baseURL + 'login/',
            this.createFormData<LoginData>(options)
        );
        console.log(data);
        return data;
    }

    async getProfile() {
        const data = await axios.get('http://localhost:8000/user/some/');
        console.log(data);
        return data;
    }

    async registration(options: RegistrationData) {
        const data = await axios.postForm(
            this.baseURL + 'signup/',
            this.createFormData<RegistrationData>(options)
        );
        console.log(data);
        return data;
    }
}

export const authServices = new Auth();
