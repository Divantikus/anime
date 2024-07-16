import { ErrorOption, RegisterOptions } from 'react-hook-form';
import { TemplateInputReg } from 'src/components/login-form/input-fields/template-input/TemplateInput.tsx';

export const settingsEmail: RegisterOptions<TemplateInputReg> = {
    required: true,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};
export const settingsPassword: RegisterOptions<{ password: string }> = {
    required: true,
    minLength: 6,
};
export const emailErrors: ErrorOption = {
    type: 'registered',
    message: 'An account with such an email has already been registered',
};
