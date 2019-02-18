import { exceptions } from "config";

export const validateName = (name) => {
    if (!name.trim()) {
        return exceptions.FIELD_REQUIRED;
    }
    return null;
};

export const validateEmail = (email) => {
    if (!email.trim()) {
        return exceptions.FIELD_REQUIRED;
    }
    return null;
};
