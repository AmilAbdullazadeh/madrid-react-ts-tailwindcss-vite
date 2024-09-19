const generatePassword = (length: number): string => {
    const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}';
    let generatePassword: string = '';

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * chars.length);
        generatePassword += chars[random];
    }

    return generatePassword;
}

const checkPasswordStrength = (password: string) => {
    if (password.length < 8) {
        return 'weak';
    } else if (password.length >= 8 && password.length < 12) {
        return 'medium';
    } else {
        return 'strong';
    }
}

const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password);
}

export { generatePassword, copyToClipboard, checkPasswordStrength };