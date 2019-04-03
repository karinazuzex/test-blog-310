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
        return exceptions.EMAIL_INVALID;
    }
    return null;
};

export const validateSubject = (subject) => {
    if (!subject) {
        return exceptions.FIELD_REQUIRED;
    }
    return null;
};

export const validateMessage = (message) => {
    if (!message) {
        return exceptions.FIELD_REQUIRED;
    }
    return null;
};

export const validateAgreement = (agreement) => {
    if (!agreement) {
        return exceptions.AGREEMENT_NOT_ACCEPTED;
    }
    return null;
};

export const detectMultipleFieldsRequired = (errors) => {
    const errorsArray = Array.isArray(errors) ? errors : [errors];
    return errorsArray.filter(item => item === exceptions.FIELD_REQUIRED).length > 1;
};

export const formatFormError = (errors) => {
    const errorsArray = Array.isArray(errors) ? errors : [errors];
    const errorsFiltered = errorsArray.filter(item => item);
    return errorsFiltered.length
        ? (
            detectMultipleFieldsRequired(errorsFiltered)
            ? exceptions.MULTIPLE_FIELD_REQUIRED
            : errorsFiltered[0]
        )
        : null;
};
