import { GTM_TRACKING_ID } from "./consts";

const pageview = url => {
    window.gtag('config', GTM_TRACKING_ID, {
        page_path: url,
    })
};

const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    })
};

export default {
    pageview: GTM_TRACKING_ID ? pageview : () => {},
    event: GTM_TRACKING_ID ? event : () => {},
};
