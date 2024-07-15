export interface LoginData {
    username: string;
    password: string;
}

export interface RegistrationData extends LoginData {
    email: string;
}
