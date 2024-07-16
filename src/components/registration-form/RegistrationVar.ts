import { settingsEmail } from 'src/components/login-form/LoginVar.ts';
import { TemplateInputParams } from 'src/components/login-form/input-fields/template-input/TemplateInput.tsx';
import emailIcon from 'public/login-img/email-icon.svg';
import userIcon from 'public/registration-img/user.svg';

export const passwordConfirmation = {};

export const usernameSett: TemplateInputParams = {
    inputName: 'username',
    label: 'Username',
    type: 'text',
    img: userIcon,
    inputSettings: { required: true },
};

export const emailSett: TemplateInputParams = {
    inputName: 'email',
    label: 'Email',
    type: 'email',
    img: emailIcon,
    inputSettings: settingsEmail,
};
