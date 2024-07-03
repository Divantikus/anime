import {LoginData} from "src/services/types/authDataTypes.ts";
import axios from "axios";

class Auth {

    private baseURL = "localhost:8000/auth/";

    async login(options: LoginData){
        const data = await axios.post(this.baseURL + "login", {...options})
        console.log(data)
        return data
    }

    async registration(options: LoginData){
        const data = await axios.post(this.baseURL + "register", {...options})
        console.log(data)
        return data
    }
}


export const authServices = new Auth()