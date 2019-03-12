import jsonp from "jsonp";
import toQueryString from "to-querystring";
import { error, info } from "react-notification-system-redux";

import { consts, exceptions, messages } from "config";
import { helpers } from "utils";

import * as types from "./types";

export const formatMailchimpMessage = (message) => {
    const mes = message.toLowerCase();
    if (mes.includes("already subscribed")) {
        return exceptions.EMAIL_IN_USE;
    } else if (mes.includes("thank you")) {
        return messages.SUBSCRIPTION_SUCCESS;
    } else if (mes.includes("too many recent")) {
        return exceptions.TOO_MANY_REQUESTS;
    }
    return exceptions.EMAIL_INVALID;
};

export const mailchimpSubscribe = (name, email) =>
    dispatch => {
        const params = toQueryString({
            NAME: name,
            EMAIL: email,
            [consts.MAILCHIMP_SUBSCRIBE_NAME]: "",
        });
        const url = `${helpers.getAjaxUrl(consts.MAILCHIMP_SUBSCRIBE_URL)}&${params}`;
        return new Promise((resolve, reject) => {
            jsonp(
                url,
                {param: "c"},
                (err, data) => {
                    if (err || data.result !== types.MAILCHIMP_TYPE_SUCCESS) {
                        const message = formatMailchimpMessage(err ? err.msg : data.msg);
                        dispatch(error({
                            position: "bc",
                            autoDismiss: 0,
                            message,
                        }));
                        reject(message);
                    } else {
                        const message = formatMailchimpMessage(data.msg);
                        dispatch(info({
                            position: "bc",
                            autoDismiss: 3,
                            message,
                        }));
                        resolve(message);
                    }
                },
            );
        });
    };

export const mailchimpDownload = (name, email) =>
    dispatch => {
        const params = toQueryString({
            NAME: name,
            EMAIL: email,
            [consts.MAILCHIMP_DOWNLOAD_NAME]: "",
        });
        const url = `${helpers.getAjaxUrl(consts.MAILCHIMP_DOWNLOAD_URL)}&${params}`;
        return new Promise((resolve, reject) => {
            jsonp(
                url,
                {param: "c"},
                (err, data) => {
                    if (err || data.result !== types.MAILCHIMP_TYPE_SUCCESS) {
                        const message = formatMailchimpMessage(err ? err.msg : data.msg);
                        dispatch(error({
                            position: "bc",
                            autoDismiss: 0,
                            message,
                        }));
                        reject(message);
                    } else {
                        const message = formatMailchimpMessage(data.msg);
                        dispatch(info({
                            position: "bc",
                            autoDismiss: 3,
                            message,
                        }));
                        resolve(message);
                    }
                },
            );
        });
    };
