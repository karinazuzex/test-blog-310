import { GTM_TRACKING_ID } from "./consts";

let disabled = true;

const init = couldUseGtm => {
    disabled = !(couldUseGtm && GTM_TRACKING_ID);
};

const pageview = (url, title) => {
    if (disabled) {
        return;
    }
    window.dataLayer.push({
        event: 'pageview',
        pagePath: url,
        pageTitle: title,
    })
};

const event = ({ action, category, label, value }) => {
    if (disabled) {
        return;
    }
    const data = {};
    if (action) { data.event = action.toLowerCase().split(' ').join('_'); }
    if (category) { data.category = category; }
    if (label) { data.label = label; }
    if (value) { data.value = value; }

    window.dataLayer.push(data);
};

export default {
    init,
    pageview,
    event,
};
