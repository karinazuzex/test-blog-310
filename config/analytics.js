import { GTM_TRACKING_ID } from "./consts";

let disabled = true;

const init = couldUseGtm => {
    disabled = !(couldUseGtm && GTM_TRACKING_ID);
};

const pageview = (url, title) => {
    if (disabled) {
        return;
    }
    window.gtag('config', GTM_TRACKING_ID, {
        page_path: url,
        page_title: title,
    })
};

const event = ({ action, category, label, value }) => {
    if (disabled) {
        return;
    }
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    })
};

export default {
    init,
    pageview,
    event,
};
