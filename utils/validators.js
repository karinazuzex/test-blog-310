import { exceptions, consts } from "config";

export const validateName = (name) => {
    if (!name) {
        return exceptions.FIELD_REQUIRED;
    }
    return null;
};

export const validateEmail = (email) => {
    if (!email) {
        return exceptions.FIELD_REQUIRED;
    } else if (!consts.EMAIL_PATTERN.test(String(email).toLowerCase())) {
        return exceptions.EMAIL_WRONG_PATTERN;
    }
    return null;
};
