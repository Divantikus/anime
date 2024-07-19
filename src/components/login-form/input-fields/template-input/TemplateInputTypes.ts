import { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions } from 'react-hook-form';

export interface TemplateInputReg {
    username: string;
    password: string;
    email: string;
}

export interface TemplateInputParams {
    img: string;
    type: HTMLInputTypeAttribute;
    inputName: 'username' | 'password' | 'email';
    label: string;
    inputSettings: RegisterOptions<TemplateInputReg> | undefined;
}

export interface TemplateInputProps {
    settings: TemplateInputParams;
}
