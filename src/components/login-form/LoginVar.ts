export const settingsEmail = {
    required: true,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};
export const settingsPassword = {
    required: true,
};
export const emailErrors = {
    type: 'registered',
    message: 'An account with such an email has already been registered',
};
