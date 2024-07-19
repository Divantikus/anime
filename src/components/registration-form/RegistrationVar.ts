import { TemplateInputParams } from 'src/components/login-form/input-fields/template-input/TemplateInputTypes.ts';
import { ErrorOption } from 'react-hook-form';
import {
    settingsEmail,
    settingsUserName,
} from 'src/components/login-form/LoginVar.ts';
import emailIcon from 'public/login-img/email-icon.svg';
import userIcon from 'public/registration-img/user.svg';

export const passwordConfirmation = {};

export const userNameSett: TemplateInputParams = {
    inputName: 'username',
    label: 'Username',
    type: 'text',
    img: userIcon,
    inputSettings: settingsUserName,
};

export const emailSett: TemplateInputParams = {
    inputName: 'email',
    label: 'Email',
    type: 'email',
    img: emailIcon,
    inputSettings: settingsEmail,
};

export const userNameErrorAlreadyExists: ErrorOption = {
    type: 'username already exists',
    message: 'Such an username already exists',
};

export const emailErrorAlreadyExists: ErrorOption = {
    type: 'email already exists',
    message: 'Such an email already exists',
};
