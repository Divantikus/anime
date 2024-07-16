export interface LoginData {
    [key: string]: string;
    username: string;
    password: string;
}

export interface RegistrationData extends LoginData {
    [key: string]: string;
    email: string;
}
