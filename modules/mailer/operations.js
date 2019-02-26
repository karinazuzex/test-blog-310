import jsonp from "jsonp";
import toQueryString from "to-querystring";
import { error, info } from "react-notification-system-redux";

import { consts } from "config";
import { helpers } from "utils";

import * as types from "./types";

export const mailchimpSubscribe = (name, email) => {
    return (dispatch) => {
        const params = toQueryString({
            NAME: name,
            EMAIL: email,
            [consts.MAILCHIMP_HIDDEN_INPUT_NAME]: "",
        });
        const url = `${helpers.getAjaxUrl(consts.MAILCHIMP_ACTION_URL)}&${params}`;
        return new Promise((resolve, reject) => {
            jsonp(
                url,
                {param: "c"},
                (err, data) => {
                    if (err || data.result !== types.MAILCHIMP_TYPE_SUCCESS) {
                        const message = err ? err.msg : data.msg;
                        dispatch(error({
                            position: "bc",
                            autoDismiss: 0,
                            message,
                        }));
                        reject(message);
                    } else {
                        const message = data.msg;
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
};
